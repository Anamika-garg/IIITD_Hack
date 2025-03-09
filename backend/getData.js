const mongoose = require("mongoose");

// MongoDB URLs for each service
const portfolioUrl = "mongodb://localhost:27018/portfolio_db";
const transactionsUrl = "mongodb://localhost:27019/transactions_db";
const creditCardUrl = "mongodb://localhost:27020/creditcard_db";

// Mongoose Schemas for Portfolio, Transactions, and Credit Card Transactions
const portfolioSchema = new mongoose.Schema({
  user_id: Number,
  investment_type: String,
  value: Number,
  date: String,
});

const transactionSchema = new mongoose.Schema({
  user_id: Number,
  amount: Number,
  date: String,
  type: String,
});

const creditCardSchema = new mongoose.Schema({
  user_id: Number,
  amount: Number,
  date: String,
  card_type: String,
});

// Function to establish a connection and fetch data safely
const fetchData = async (url, modelName, schema, userId) => {
  let connection;
  try {
    connection = await mongoose.createConnection(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const Model = connection.model(modelName, schema);
    const data = await Model.find({ user_id: userId });

    return data;
  } catch (error) {
    console.error(`Error fetching data from ${modelName}:`, error.message);
    return []; // Return empty array if the database fails
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error(`Error closing connection for ${modelName}:`, closeError.message);
      }
    }
  }
};

// Function to merge data from all databases
const getMergedData = async (userId) => {
  const [portfolioData, transactionData, creditCardData] = await Promise.all([
    fetchData(portfolioUrl, "Portfolio", portfolioSchema, userId),
    fetchData(transactionsUrl, "Transaction", transactionSchema, userId),
    fetchData(creditCardUrl, "CreditCard", creditCardSchema, userId),
  ]);

  return {
    user_id: userId,
    portfolio: portfolioData,
    transactions: transactionData,
    credit_cards: creditCardData,
  };
};

module.exports = { getMergedData };

const mongoose = require('mongoose');

const portfolioUrl = 'mongodb://localhost:27018/portfolio_db';
const transactionsUrl = 'mongodb://localhost:27019/transactions_db';
const creditCardUrl = 'mongodb://localhost:27020/creditcard_db';

// Define Schemas
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

// Function to connect to MongoDB with error handling
const connectDB = async (url) => {
  try {
    const connection = await mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connected to ${url}`);
    return connection;
  } catch (error) {
    console.error(`Failed to connect to ${url}:`, error.message);
    return null; // Return null to handle failure gracefully
  }
};

const fetchData = async (amountId, radioValue) => {
  try {
    const amount = Number(amountId);

    // Connect to Transactions DB (Mandatory)
    const transactionsConn = await connectDB(transactionsUrl);
    if (!transactionsConn) {
      throw new Error('Transactions database is down. Cannot fetch user transactions.');
    }

    // Connect to Portfolio and Credit Card DBs (Optional)
    const portfolioConn = await connectDB(portfolioUrl);
    const creditCardConn = await connectDB(creditCardUrl);

    // Create Models
    const Transaction = transactionsConn.model('Transaction', transactionSchema);
    let transactions;

    console.log("radioValue:", radioValue);

    // Fetch transactions based on radio value
    if (radioValue === 'greater') {
      transactions = await Transaction.find({ amount: { $gt: amount } }).lean();
    } else {
      transactions = await Transaction.find({ amount: { $lt: amount } }).lean();
    }

    const userIds = [...new Set(transactions.map(txn => txn.user_id))];

    if (userIds.length === 0) {
      console.log(`No users found with transactions ${radioValue} than ${amount}`);
      await transactionsConn.close();
      return [];
    }

    // Fetch Portfolio Data (if connection is available)
    let portfolioData = [];
    if (portfolioConn) {
      try {
        const Portfolio = portfolioConn.model('Portfolio', portfolioSchema);
        portfolioData = await Portfolio.find({ user_id: { $in: userIds } }).lean();
      } catch (error) {
        console.error('Error fetching portfolio data:', error.message);
      }
    } else {
      console.warn('Skipping portfolio data fetch as Portfolio DB is down.');
    }

    // Fetch Credit Card Data (if connection is available)
    let creditCardData = [];
    if (creditCardConn) {
      try {
        const CreditCard = creditCardConn.model('CreditCard', creditCardSchema);
        creditCardData = await CreditCard.find({ user_id: { $in: userIds } }).lean();
      } catch (error) {
        console.error('Error fetching credit card data:', error.message);
      }
    } else {
      console.warn('Skipping credit card data fetch as Credit Card DB is down.');
    }

    const result = userIds.map(user_id => ({
      user_id,
      transactions: JSON.stringify(transactions.filter(txn => txn.user_id === user_id)),
      portfolio: JSON.stringify(portfolioData.filter(portfolio => portfolio.user_id === user_id)),
      creditCards: JSON.stringify(creditCardData.filter(card => card.user_id === user_id)),
    }));

    // Close successful connections
    await transactionsConn.close();
    if (portfolioConn) await portfolioConn.close();
    if (creditCardConn) await creditCardConn.close();

    return result;
  } catch (err) {
    console.error('Error fetching data:', err.message);
    return [];
  }
};

const getAmountData = async (amountId, radioValue) => {
  return await fetchData(amountId, radioValue);
};

module.exports = { getAmountData };

const mongoose = require('mongoose');

// MongoDB URLs for each service
const portfolioUrl = 'mongodb://localhost:27018/portfolio_db';
const transactionsUrl = 'mongodb://localhost:27019/transactions_db';
const creditCardUrl = 'mongodb://localhost:27020/creditcard_db';

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

// Seed data for Portfolio investments
const portfolioData = [
  { user_id: 1, investment_type: "Stocks", value: 5000, date: "2024-03-01" },
  { user_id: 1, investment_type: "Crypto", value: 2000, date: "2024-03-02" },
  { user_id: 2, investment_type: "Mutual Fund", value: 7000, date: "2024-03-03" },
  { user_id: 2, investment_type: "Stocks", value: 4500, date: "2024-03-04" },
  { user_id: 3, investment_type: "Real Estate", value: 15000, date: "2024-03-05" },
  { user_id: 3, investment_type: "Crypto", value: 3200, date: "2024-03-06" },
  { user_id: 4, investment_type: "Bonds", value: 5000, date: "2024-03-07" },
  { user_id: 4, investment_type: "Mutual Fund", value: 6200, date: "2024-03-08" },
  { user_id: 5, investment_type: "Stocks", value: 5400, date: "2024-03-09" },
  { user_id: 5, investment_type: "Crypto", value: 2700, date: "2024-03-10" },
  { user_id: 6, investment_type: "Gold", value: 8100, date: "2024-03-11" },
  { user_id: 6, investment_type: "Mutual Fund", value: 6900, date: "2024-03-12" },
  { user_id: 7, investment_type: "Stocks", value: 7300, date: "2024-03-13" },
  { user_id: 7, investment_type: "Real Estate", value: 18000, date: "2024-03-14" },
  { user_id: 8, investment_type: "Crypto", value: 3900, date: "2024-03-15" },
  { user_id: 8, investment_type: "Bonds", value: 5500, date: "2024-03-16" },
  { user_id: 9, investment_type: "Mutual Fund", value: 4800, date: "2024-03-17" },
  { user_id: 9, investment_type: "Gold", value: 9400, date: "2024-03-18" },
  { user_id: 10, investment_type: "Stocks", value: 6200, date: "2024-03-19" },
  { user_id: 10, investment_type: "Crypto", value: 4100, date: "2024-03-20" },
  { user_id: 1, investment_type: "Bonds", value: 5200, date: "2024-03-21" },
  { user_id: 2, investment_type: "Real Estate", value: 21000, date: "2024-03-22" },
  { user_id: 3, investment_type: "Gold", value: 8500, date: "2024-03-23" },
  { user_id: 4, investment_type: "Stocks", value: 5600, date: "2024-03-24" },
  { user_id: 5, investment_type: "Mutual Fund", value: 6700, date: "2024-03-25" },
  { user_id: 6, investment_type: "Crypto", value: 3200, date: "2024-03-26" },
  { user_id: 7, investment_type: "Bonds", value: 5100, date: "2024-03-27" },
  { user_id: 8, investment_type: "Real Estate", value: 19000, date: "2024-03-28" },
  { user_id: 9, investment_type: "Stocks", value: 7300, date: "2024-03-29" },
  { user_id: 10, investment_type: "Gold", value: 8700, date: "2024-03-30" },
  { user_id: 1, investment_type: "Mutual Fund", value: 5200, date: "2024-03-31" },
  { user_id: 2, investment_type: "Crypto", value: 3900, date: "2024-04-01" },
  { user_id: 3, investment_type: "Bonds", value: 5400, date: "2024-04-02" },
  { user_id: 4, investment_type: "Gold", value: 9100, date: "2024-04-03" },
  { user_id: 5, investment_type: "Real Estate", value: 17500, date: "2024-04-04" },
  { user_id: 6, investment_type: "Stocks", value: 6000, date: "2024-04-05" },
  { user_id: 7, investment_type: "Mutual Fund", value: 7200, date: "2024-04-06" },
  { user_id: 8, investment_type: "Crypto", value: 3400, date: "2024-04-07" },
  { user_id: 9, investment_type: "Bonds", value: 5300, date: "2024-04-08" },
  { user_id: 10, investment_type: "Stocks", value: 6500, date: "2024-04-09" },
  { user_id: 1, investment_type: "Gold", value: 8900, date: "2024-04-10" },
  { user_id: 2, investment_type: "Crypto", value: 4300, date: "2024-04-11" },
  { user_id: 3, investment_type: "Mutual Fund", value: 7100, date: "2024-04-12" },
  { user_id: 4, investment_type: "Stocks", value: 6700, date: "2024-04-13" },
  { user_id: 5, investment_type: "Bonds", value: 5500, date: "2024-04-14" },
  { user_id: 6, investment_type: "Real Estate", value: 20500, date: "2024-04-15" },
  { user_id: 7, investment_type: "Crypto", value: 3100, date: "2024-04-16" }
];


const transactionData = [
  { user_id: 1, amount: 1500, date: "2024-03-01", type: "Deposit" },
  { user_id: 1, amount: 500, date: "2024-03-02", type: "Withdrawal" },
  { user_id: 2, amount: 2000, date: "2024-03-03", type: "Deposit" },
  { user_id: 2, amount: 700, date: "2024-03-04", type: "Withdrawal" },
  { user_id: 3, amount: 3500, date: "2024-03-05", type: "Deposit" },
  { user_id: 3, amount: 1200, date: "2024-03-06", type: "Withdrawal" },
  { user_id: 4, amount: 1800, date: "2024-03-07", type: "Deposit" },
  { user_id: 4, amount: 600, date: "2024-03-08", type: "Withdrawal" },
  { user_id: 5, amount: 2200, date: "2024-03-09", type: "Deposit" },
  { user_id: 5, amount: 800, date: "2024-03-10", type: "Withdrawal" },
  { user_id: 6, amount: 2700, date: "2024-03-11", type: "Deposit" },
  { user_id: 6, amount: 900, date: "2024-03-12", type: "Withdrawal" },
  { user_id: 7, amount: 3200, date: "2024-03-13", type: "Deposit" },
  { user_id: 7, amount: 1100, date: "2024-03-14", type: "Withdrawal" },
  { user_id: 8, amount: 2600, date: "2024-03-15", type: "Deposit" },
  { user_id: 8, amount: 950, date: "2024-03-16", type: "Withdrawal" },
  { user_id: 9, amount: 3000, date: "2024-03-17", type: "Deposit" },
  { user_id: 9, amount: 1300, date: "2024-03-18", type: "Withdrawal" },
  { user_id: 10, amount: 4100, date: "2024-03-19", type: "Deposit" },
  { user_id: 10, amount: 1700, date: "2024-03-20", type: "Withdrawal" },
  { user_id: 1, amount: 2000, date: "2024-03-21", type: "Deposit" },
  { user_id: 2, amount: 1000, date: "2024-03-22", type: "Withdrawal" },
  { user_id: 3, amount: 4500, date: "2024-03-23", type: "Deposit" },
  { user_id: 4, amount: 1800, date: "2024-03-24", type: "Withdrawal" },
  { user_id: 5, amount: 3500, date: "2024-03-25", type: "Deposit" },
  { user_id: 6, amount: 1200, date: "2024-03-26", type: "Withdrawal" },
  { user_id: 7, amount: 4000, date: "2024-03-27", type: "Deposit" },
  { user_id: 8, amount: 2000, date: "2024-03-28", type: "Withdrawal" },
  { user_id: 9, amount: 3700, date: "2024-03-29", type: "Deposit" },
  { user_id: 10, amount: 2500, date: "2024-03-30", type: "Withdrawal" }
];

const creditCardData = [
  { "user_id": 1, "amount": 3200, "date": "2024-01-05", "card_type": "Visa" },
  { "user_id": 1, "amount": 4100, "date": "2024-02-12", "card_type": "MasterCard" },
  { "user_id": 1, "amount": 2700, "date": "2024-03-18", "card_type": "Amex" },
  { "user_id": 1, "amount": 3500, "date": "2024-04-07", "card_type": "Discover" },
  { "user_id": 1, "amount": 2800, "date": "2024-05-03", "card_type": "Visa" },
  { "user_id": 1, "amount": 3000, "date": "2024-02-22", "card_type": "MasterCard" },
  { "user_id": 1, "amount": 4200, "date": "2024-04-14", "card_type": "Amex" },
  { "user_id": 1, "amount": 3900, "date": "2024-01-30", "card_type": "Discover" },
  { "user_id": 1, "amount": 2500, "date": "2024-03-10", "card_type": "Visa" },
  { "user_id": 1, "amount": 3100, "date": "2024-05-25", "card_type": "MasterCard" },

  { "user_id": 2, "amount": 2800, "date": "2024-02-05", "card_type": "Amex" },
  { "user_id": 2, "amount": 4600, "date": "2024-03-14", "card_type": "Visa" },
  { "user_id": 2, "amount": 3900, "date": "2024-04-07", "card_type": "MasterCard" },
  { "user_id": 2, "amount": 2400, "date": "2024-05-02", "card_type": "Discover" },
  { "user_id": 2, "amount": 3300, "date": "2024-01-17", "card_type": "Amex" },
  { "user_id": 2, "amount": 4000, "date": "2024-03-22", "card_type": "Visa" },
  { "user_id": 2, "amount": 2900, "date": "2024-04-10", "card_type": "MasterCard" },
  { "user_id": 2, "amount": 3700, "date": "2024-05-18", "card_type": "Discover" },
  { "user_id": 2, "amount": 4500, "date": "2024-02-28", "card_type": "Amex" },
  { "user_id": 2, "amount": 3100, "date": "2024-03-08", "card_type": "Visa" },

  { "user_id": 3, "amount": 2700, "date": "2024-01-15", "card_type": "MasterCard" },
  { "user_id": 3, "amount": 3100, "date": "2024-02-24", "card_type": "Visa" },
  { "user_id": 3, "amount": 4200, "date": "2024-03-05", "card_type": "Amex" },
  { "user_id": 3, "amount": 3900, "date": "2024-04-13", "card_type": "Discover" },
  { "user_id": 3, "amount": 2500, "date": "2024-05-20", "card_type": "MasterCard" },
  { "user_id": 3, "amount": 2800, "date": "2024-01-29", "card_type": "Visa" },
  { "user_id": 3, "amount": 3500, "date": "2024-03-17", "card_type": "Amex" },
  { "user_id": 3, "amount": 4300, "date": "2024-04-08", "card_type": "Discover" },
  { "user_id": 3, "amount": 3900, "date": "2024-05-04", "card_type": "Visa" },
  { "user_id": 3, "amount": 3100, "date": "2024-02-10", "card_type": "MasterCard" },

  { "user_id": 4, "amount": 2900, "date": "2024-01-22", "card_type": "Visa" },
  { "user_id": 4, "amount": 3700, "date": "2024-02-15", "card_type": "MasterCard" },
  { "user_id": 4, "amount": 4600, "date": "2024-03-03", "card_type": "Amex" },
  { "user_id": 4, "amount": 3200, "date": "2024-04-19", "card_type": "Discover" },
  { "user_id": 4, "amount": 4100, "date": "2024-05-28", "card_type": "Visa" },
  { "user_id": 4, "amount": 3900, "date": "2024-01-08", "card_type": "MasterCard" },
  { "user_id": 4, "amount": 2800, "date": "2024-03-14", "card_type": "Amex" },
  { "user_id": 4, "amount": 4300, "date": "2024-04-10", "card_type": "Discover" },
  { "user_id": 4, "amount": 3000, "date": "2024-05-02", "card_type": "Visa" },
  { "user_id": 4, "amount": 2700, "date": "2024-02-05", "card_type": "MasterCard" },

  { "user_id": 5, "amount": 3500, "date": "2024-01-18", "card_type": "Visa" },
  { "user_id": 5, "amount": 4200, "date": "2024-02-07", "card_type": "MasterCard" },
  { "user_id": 5, "amount": 3900, "date": "2024-03-09", "card_type": "Amex" },
  { "user_id": 5, "amount": 3100, "date": "2024-04-12", "card_type": "Discover" },
  { "user_id": 5, "amount": 2800, "date": "2024-05-22", "card_type": "Visa" },
  { "user_id": 5, "amount": 2700, "date": "2024-01-29", "card_type": "MasterCard" },
  { "user_id": 5, "amount": 4600, "date": "2024-03-04", "card_type": "Amex" },
  { "user_id": 5, "amount": 3300, "date": "2024-04-10", "card_type": "Discover" },
  { "user_id": 5, "amount": 4100, "date": "2024-05-03", "card_type": "Visa" },
  { "user_id": 5, "amount": 3700, "date": "2024-02-16", "card_type": "MasterCard" },
  { "user_id": 6, "amount": 3100, "date": "2024-01-10", "card_type": "Visa" },
  { "user_id": 6, "amount": 4200, "date": "2024-02-15", "card_type": "MasterCard" },
  { "user_id": 6, "amount": 3900, "date": "2024-03-20", "card_type": "Amex" },
  { "user_id": 6, "amount": 2700, "date": "2024-04-05", "card_type": "Discover" },
  { "user_id": 6, "amount": 3500, "date": "2024-05-12", "card_type": "Visa" },
  { "user_id": 6, "amount": 3800, "date": "2024-01-22", "card_type": "MasterCard" },
  { "user_id": 6, "amount": 2600, "date": "2024-03-07", "card_type": "Amex" },
  { "user_id": 6, "amount": 4100, "date": "2024-04-19", "card_type": "Discover" },
  { "user_id": 6, "amount": 3700, "date": "2024-05-25", "card_type": "Visa" },
  { "user_id": 6, "amount": 3000, "date": "2024-02-28", "card_type": "MasterCard" },

  { "user_id": 7, "amount": 2900, "date": "2024-01-14", "card_type": "Visa" },
  { "user_id": 7, "amount": 3600, "date": "2024-02-19", "card_type": "MasterCard" },
  { "user_id": 7, "amount": 3100, "date": "2024-03-25", "card_type": "Amex" },
  { "user_id": 7, "amount": 4300, "date": "2024-04-09", "card_type": "Discover" },
  { "user_id": 7, "amount": 2700, "date": "2024-05-20", "card_type": "Visa" },
  { "user_id": 7, "amount": 2500, "date": "2024-01-28", "card_type": "MasterCard" },
  { "user_id": 7, "amount": 4600, "date": "2024-03-12", "card_type": "Amex" },
  { "user_id": 7, "amount": 3900, "date": "2024-04-07", "card_type": "Discover" },
  { "user_id": 7, "amount": 3500, "date": "2024-05-16", "card_type": "Visa" },
  { "user_id": 7, "amount": 4100, "date": "2024-02-22", "card_type": "MasterCard" },

  { "user_id": 8, "amount": 3200, "date": "2024-01-08", "card_type": "Visa" },
  { "user_id": 8, "amount": 4100, "date": "2024-02-17", "card_type": "MasterCard" },
  { "user_id": 8, "amount": 3900, "date": "2024-03-10", "card_type": "Amex" },
  { "user_id": 8, "amount": 3500, "date": "2024-04-12", "card_type": "Discover" },
  { "user_id": 8, "amount": 2800, "date": "2024-05-02", "card_type": "Visa" },
  { "user_id": 8, "amount": 3100, "date": "2024-01-25", "card_type": "MasterCard" },
  { "user_id": 8, "amount": 4300, "date": "2024-03-07", "card_type": "Amex" },
  { "user_id": 8, "amount": 2700, "date": "2024-04-23", "card_type": "Discover" },
  { "user_id": 8, "amount": 4000, "date": "2024-05-14", "card_type": "Visa" },
  { "user_id": 8, "amount": 2600, "date": "2024-02-28", "card_type": "MasterCard" },

  { "user_id": 9, "amount": 3300, "date": "2024-01-11", "card_type": "Visa" },
  { "user_id": 9, "amount": 4600, "date": "2024-02-23", "card_type": "MasterCard" },
  { "user_id": 9, "amount": 3900, "date": "2024-03-19", "card_type": "Amex" },
  { "user_id": 9, "amount": 2700, "date": "2024-04-10", "card_type": "Discover" },
  { "user_id": 9, "amount": 3500, "date": "2024-05-15", "card_type": "Visa" },
  { "user_id": 9, "amount": 3000, "date": "2024-01-30", "card_type": "MasterCard" },
  { "user_id": 9, "amount": 4100, "date": "2024-03-08", "card_type": "Amex" },
  { "user_id": 9, "amount": 4300, "date": "2024-04-21", "card_type": "Discover" },
  { "user_id": 9, "amount": 2500, "date": "2024-05-12", "card_type": "Visa" },
  { "user_id": 9, "amount": 3700, "date": "2024-02-16", "card_type": "MasterCard" },

  { "user_id": 10, "amount": 2700, "date": "2024-01-13", "card_type": "Visa" },
  { "user_id": 10, "amount": 3100, "date": "2024-02-25", "card_type": "MasterCard" },
  { "user_id": 10, "amount": 4200, "date": "2024-03-09", "card_type": "Amex" },
  { "user_id": 10, "amount": 3900, "date": "2024-04-14", "card_type": "Discover" },
  { "user_id": 10, "amount": 2500, "date": "2024-05-20", "card_type": "Visa" },
  { "user_id": 10, "amount": 2800, "date": "2024-01-28", "card_type": "MasterCard" },
  { "user_id": 10, "amount": 3500, "date": "2024-03-17", "card_type": "Amex" },
  { "user_id": 10, "amount": 4300, "date": "2024-04-10", "card_type": "Discover" },
  { "user_id": 10, "amount": 3900, "date": "2024-05-04", "card_type": "Visa" },
  { "user_id": 10, "amount": 3100, "date": "2024-02-10", "card_type": "MasterCard" },
  { "user_id": 11, "amount": 2800, "date": "2024-01-05", "card_type": "Visa" },
  { "user_id": 11, "amount": 3500, "date": "2024-02-10", "card_type": "MasterCard" },
  { "user_id": 11, "amount": 4200, "date": "2024-03-15", "card_type": "Amex" },
  { "user_id": 11, "amount": 3100, "date": "2024-04-18", "card_type": "Discover" },
  { "user_id": 11, "amount": 3900, "date": "2024-05-07", "card_type": "Visa" },
  { "user_id": 11, "amount": 2800, "date": "2024-01-22", "card_type": "MasterCard" },
  { "user_id": 11, "amount": 3600, "date": "2024-03-09", "card_type": "Amex" },
  { "user_id": 11, "amount": 4000, "date": "2024-04-05", "card_type": "Discover" },
  { "user_id": 11, "amount": 2600, "date": "2024-05-20", "card_type": "Visa" },
  { "user_id": 11, "amount": 4100, "date": "2024-02-27", "card_type": "MasterCard" },

  { "user_id": 12, "amount": 3100, "date": "2024-01-12", "card_type": "Visa" },
  { "user_id": 12, "amount": 4300, "date": "2024-02-18", "card_type": "MasterCard" },
  { "user_id": 12, "amount": 2700, "date": "2024-03-14", "card_type": "Amex" },
  { "user_id": 12, "amount": 3400, "date": "2024-04-09", "card_type": "Discover" },
  { "user_id": 12, "amount": 3900, "date": "2024-05-01", "card_type": "Visa" },
  { "user_id": 12, "amount": 2800, "date": "2024-01-28", "card_type": "MasterCard" },
  { "user_id": 12, "amount": 3700, "date": "2024-03-11", "card_type": "Amex" },
  { "user_id": 12, "amount": 4600, "date": "2024-04-22", "card_type": "Discover" },
  { "user_id": 12, "amount": 2500, "date": "2024-05-15", "card_type": "Visa" },
  { "user_id": 12, "amount": 4200, "date": "2024-02-25", "card_type": "MasterCard" },

  { "user_id": 13, "amount": 3200, "date": "2024-01-17", "card_type": "Visa" },
  { "user_id": 13, "amount": 4600, "date": "2024-02-28", "card_type": "MasterCard" },
  { "user_id": 13, "amount": 4100, "date": "2024-03-13", "card_type": "Amex" },
  { "user_id": 13, "amount": 2900, "date": "2024-04-06", "card_type": "Discover" },
  { "user_id": 13, "amount": 3500, "date": "2024-05-19", "card_type": "Visa" },
  { "user_id": 13, "amount": 2700, "date": "2024-01-25", "card_type": "MasterCard" },
  { "user_id": 13, "amount": 4300, "date": "2024-03-04", "card_type": "Amex" },
  { "user_id": 13, "amount": 3700, "date": "2024-04-20", "card_type": "Discover" },
  { "user_id": 13, "amount": 3100, "date": "2024-05-10", "card_type": "Visa" },
  { "user_id": 13, "amount": 4000, "date": "2024-02-14", "card_type": "MasterCard" },

  { "user_id": 14, "amount": 3000, "date": "2024-01-08", "card_type": "Visa" },
  { "user_id": 14, "amount": 4400, "date": "2024-02-19", "card_type": "MasterCard" },
  { "user_id": 14, "amount": 2900, "date": "2024-03-20", "card_type": "Amex" },
  { "user_id": 14, "amount": 3600, "date": "2024-04-07", "card_type": "Discover" },
  { "user_id": 14, "amount": 4000, "date": "2024-05-21", "card_type": "Visa" },
  { "user_id": 14, "amount": 2500, "date": "2024-01-30", "card_type": "MasterCard" },
  { "user_id": 14, "amount": 3700, "date": "2024-03-15", "card_type": "Amex" },
  { "user_id": 14, "amount": 4600, "date": "2024-04-25", "card_type": "Discover" },
  { "user_id": 14, "amount": 2800, "date": "2024-05-12", "card_type": "Visa" },
  { "user_id": 14, "amount": 4100, "date": "2024-02-10", "card_type": "MasterCard" },

  { "user_id": 15, "amount": 3300, "date": "2024-01-09", "card_type": "Visa" },
  { "user_id": 15, "amount": 4200, "date": "2024-02-14", "card_type": "MasterCard" },
  { "user_id": 15, "amount": 3900, "date": "2024-03-18", "card_type": "Amex" },
  { "user_id": 15, "amount": 3100, "date": "2024-04-22", "card_type": "Discover" },
  { "user_id": 15, "amount": 3500, "date": "2024-05-06", "card_type": "Visa" },
  { "user_id": 15, "amount": 2800, "date": "2024-01-28", "card_type": "MasterCard" },
  { "user_id": 15, "amount": 4600, "date": "2024-03-05", "card_type": "Amex" },
  { "user_id": 15, "amount": 2500, "date": "2024-04-11", "card_type": "Discover" },
  { "user_id": 15, "amount": 4000, "date": "2024-05-17", "card_type": "Visa" },
  { "user_id": 15, "amount": 3700, "date": "2024-02-26", "card_type": "MasterCard" },
  { "user_id": 16, "amount": 3400, "date": "2024-01-05", "card_type": "Visa" },
  { "user_id": 16, "amount": 4500, "date": "2024-02-12", "card_type": "MasterCard" },
  { "user_id": 16, "amount": 3900, "date": "2024-03-20", "card_type": "Amex" },
  { "user_id": 16, "amount": 3100, "date": "2024-04-08", "card_type": "Discover" },
  { "user_id": 16, "amount": 4000, "date": "2024-05-02", "card_type": "Visa" },
  { "user_id": 16, "amount": 2800, "date": "2024-01-25", "card_type": "MasterCard" },
  { "user_id": 16, "amount": 3700, "date": "2024-03-07", "card_type": "Amex" },
  { "user_id": 16, "amount": 4600, "date": "2024-04-19", "card_type": "Discover" },
  { "user_id": 16, "amount": 2500, "date": "2024-05-14", "card_type": "Visa" },
  { "user_id": 16, "amount": 4200, "date": "2024-02-22", "card_type": "MasterCard" },

  { "user_id": 17, "amount": 3200, "date": "2024-01-14", "card_type": "Visa" },
  { "user_id": 17, "amount": 4400, "date": "2024-02-18", "card_type": "MasterCard" },
  { "user_id": 17, "amount": 3800, "date": "2024-03-15", "card_type": "Amex" },
  { "user_id": 17, "amount": 3600, "date": "2024-04-10", "card_type": "Discover" },
  { "user_id": 17, "amount": 3900, "date": "2024-05-05", "card_type": "Visa" },
  { "user_id": 17, "amount": 2700, "date": "2024-01-28", "card_type": "MasterCard" },
  { "user_id": 17, "amount": 4300, "date": "2024-03-12", "card_type": "Amex" },
  { "user_id": 17, "amount": 3700, "date": "2024-04-25", "card_type": "Discover" },
  { "user_id": 17, "amount": 3100, "date": "2024-05-17", "card_type": "Visa" },
  { "user_id": 17, "amount": 4000, "date": "2024-02-27", "card_type": "MasterCard" },

  { "user_id": 18, "amount": 3000, "date": "2024-01-07", "card_type": "Visa" },
  { "user_id": 18, "amount": 4700, "date": "2024-02-21", "card_type": "MasterCard" },
  { "user_id": 18, "amount": 3500, "date": "2024-03-19", "card_type": "Amex" },
  { "user_id": 18, "amount": 2900, "date": "2024-04-08", "card_type": "Discover" },
  { "user_id": 18, "amount": 4000, "date": "2024-05-10", "card_type": "Visa" },
  { "user_id": 18, "amount": 2600, "date": "2024-01-26", "card_type": "MasterCard" },
  { "user_id": 18, "amount": 3900, "date": "2024-03-05", "card_type": "Amex" },
  { "user_id": 18, "amount": 4500, "date": "2024-04-20", "card_type": "Discover" },
  { "user_id": 18, "amount": 2800, "date": "2024-05-15", "card_type": "Visa" },
  { "user_id": 18, "amount": 4100, "date": "2024-02-16", "card_type": "MasterCard" },

  { "user_id": 19, "amount": 3300, "date": "2024-01-13", "card_type": "Visa" },
  { "user_id": 19, "amount": 4200, "date": "2024-02-25", "card_type": "MasterCard" },
  { "user_id": 19, "amount": 4100, "date": "2024-03-11", "card_type": "Amex" },
  { "user_id": 19, "amount": 2900, "date": "2024-04-14", "card_type": "Discover" },
  { "user_id": 19, "amount": 3600, "date": "2024-05-09", "card_type": "Visa" },
  { "user_id": 19, "amount": 2700, "date": "2024-01-30", "card_type": "MasterCard" },
  { "user_id": 19, "amount": 4300, "date": "2024-03-08", "card_type": "Amex" },
  { "user_id": 19, "amount": 3700, "date": "2024-04-23", "card_type": "Discover" },
  { "user_id": 19, "amount": 3100, "date": "2024-05-18", "card_type": "Visa" },
  { "user_id": 19, "amount": 4000, "date": "2024-02-20", "card_type": "MasterCard" },

  { "user_id": 20, "amount": 3100, "date": "2024-01-09", "card_type": "Visa" },
  { "user_id": 20, "amount": 4500, "date": "2024-02-13", "card_type": "MasterCard" },
  { "user_id": 20, "amount": 3900, "date": "2024-03-17", "card_type": "Amex" },
  { "user_id": 20, "amount": 3300, "date": "2024-04-21", "card_type": "Discover" },
  { "user_id": 20, "amount": 3700, "date": "2024-05-08", "card_type": "Visa" },
  { "user_id": 20, "amount": 2900, "date": "2024-01-27", "card_type": "MasterCard" },
  { "user_id": 20, "amount": 4600, "date": "2024-03-06", "card_type": "Amex" },
  { "user_id": 20, "amount": 2500, "date": "2024-04-15", "card_type": "Discover" },
  { "user_id": 20, "amount": 4000, "date": "2024-05-20", "card_type": "Visa" },
  { "user_id": 20, "amount": 3700, "date": "2024-02-28", "card_type": "MasterCard" }
]

async function seedDatabase() {
  try {
    const portfolioConnection = await mongoose.createConnection(portfolioUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const Portfolio = portfolioConnection.model('Portfolio', portfolioSchema);
    await Portfolio.insertMany(portfolioData);
    console.log('Portfolio data seeded successfully.');
    await portfolioConnection.close();

    const transactionsConnection = await mongoose.createConnection(transactionsUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const Transaction = transactionsConnection.model('Transaction', transactionSchema);
    await Transaction.insertMany(transactionData);
    console.log('Transaction data seeded successfully.');
    await transactionsConnection.close();

    const creditCardConnection = await mongoose.createConnection(creditCardUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const CreditCard = creditCardConnection.model('CreditCard', creditCardSchema);
    await CreditCard.insertMany(creditCardData);
    console.log('Credit card data seeded successfully.');
    await creditCardConnection.close();
  } catch (err) {
    console.error('Error seeding data:', err);
  }
}

seedDatabase();
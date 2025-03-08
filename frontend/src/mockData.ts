import { UserFinancialData } from './types';

export const mockUserData: Record<string, UserFinancialData> = {
  'USER123': {
    userId: 'USER123',
    bankTransactions: [
      { id: '1', date: '2024-03-10', description: 'Salary Deposit', amount: 5000, type: 'credit', category: 'Income' },
      { id: '2', date: '2024-03-09', description: 'Grocery Store', amount: 150, type: 'debit', category: 'Food' },
      { id: '3', date: '2024-03-08', description: 'Netflix Subscription', amount: 15, type: 'debit', category: 'Entertainment' },
    ],
    investments: [
      { category: 'Stocks', value: 25000 },
      { category: 'Mutual Funds', value: 15000 },
      { category: 'Crypto', value: 5000 },
      { category: 'Bonds', value: 10000 },
    ],
    creditCardTransactions: [
      { id: '1', date: '2024-03-10', description: 'Amazon Purchase', amount: 99, type: 'debit', category: 'Shopping' },
      { id: '2', date: '2024-03-09', description: 'Restaurant', amount: 45, type: 'debit', category: 'Food' },
      { id: '3', date: '2024-03-08', description: 'Flight Tickets', amount: 300, type: 'debit', category: 'Travel' },
    ],
  },
  'DEMO456': {
    userId: 'DEMO456',
    bankTransactions: [
      { id: '1', date: '2024-03-10', description: 'Consulting Fee', amount: 8500, type: 'credit', category: 'Income' },
      { id: '2', date: '2024-03-09', description: 'Whole Foods Market', amount: 230, type: 'debit', category: 'Food' },
      { id: '3', date: '2024-03-08', description: 'Gym Membership', amount: 80, type: 'debit', category: 'Health' },
      { id: '4', date: '2024-03-07', description: 'Dividend Payment', amount: 450, type: 'credit', category: 'Investment' },
      { id: '5', date: '2024-03-06', description: 'Electric Bill', amount: 95, type: 'debit', category: 'Utilities' },
    ],
    investments: [
      { category: 'Tech Stocks', value: 45000 },
      { category: 'Index Funds', value: 30000 },
      { category: 'Real Estate', value: 100000 },
      { category: 'Crypto', value: 15000 },
      { category: 'Government Bonds', value: 25000 },
    ],
    creditCardTransactions: [
      { id: '1', date: '2024-03-10', description: 'Apple Store', amount: 1299, type: 'debit', category: 'Electronics' },
      { id: '2', date: '2024-03-09', description: 'Uber Ride', amount: 25, type: 'debit', category: 'Transportation' },
      { id: '3', date: '2024-03-08', description: 'Business Lunch', amount: 85, type: 'debit', category: 'Food' },
      { id: '4', date: '2024-03-07', description: 'Hotel Booking', amount: 450, type: 'debit', category: 'Travel' },
      { id: '5', date: '2024-03-06', description: 'Online Course', amount: 199, type: 'debit', category: 'Education' },
    ],
  },
  'TEST789': {
    userId: 'TEST789',
    bankTransactions: [
      { id: '1', date: '2024-03-10', description: 'Freelance Payment', amount: 3200, type: 'credit', category: 'Income' },
      { id: '2', date: '2024-03-09', description: 'Rent Payment', amount: 1800, type: 'debit', category: 'Housing' },
      { id: '3', date: '2024-03-08', description: 'Side Gig Income', amount: 500, type: 'credit', category: 'Income' },
      { id: '4', date: '2024-03-07', description: 'Internet Bill', amount: 75, type: 'debit', category: 'Utilities' },
      { id: '5', date: '2024-03-06', description: 'Phone Bill', amount: 65, type: 'debit', category: 'Utilities' },
    ],
    investments: [
      { category: 'Startups', value: 20000 },
      { category: 'Blue Chip Stocks', value: 35000 },
      { category: 'ETFs', value: 28000 },
      { category: 'Precious Metals', value: 12000 },
    ],
    creditCardTransactions: [
      { id: '1', date: '2024-03-10', description: 'Spotify Premium', amount: 9.99, type: 'debit', category: 'Entertainment' },
      { id: '2', date: '2024-03-09', description: 'Gas Station', amount: 45, type: 'debit', category: 'Transportation' },
      { id: '3', date: '2024-03-08', description: 'Pharmacy', amount: 32.50, type: 'debit', category: 'Health' },
      { id: '4', date: '2024-03-07', description: 'Coffee Shop', amount: 15.75, type: 'debit', category: 'Food' },
      { id: '5', date: '2024-03-06', description: 'Book Store', amount: 48.99, type: 'debit', category: 'Education' },
    ],
  }
};
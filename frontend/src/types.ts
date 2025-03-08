export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
}

export interface Investment {
  category: string;
  value: number;
}

export interface UserFinancialData {
  userId: string;
  bankTransactions: Transaction[];
  investments: Investment[];
  creditCardTransactions: Transaction[];
}
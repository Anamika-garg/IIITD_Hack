export interface Transaction {
  _id: string;
  user_id: number;
  amount: number;
  date: string;
  type: string;
}

export interface Investment {
  _id: string;
  user_id: number;
  investment_type: string;
  date: string;
  stocks?: {
    symbol: string;
    quantity: number;
    price: number;
    current_price: number;
  }[];
  profit_loss?: number;
  value?: number;
}


export interface CreditCard {
  _id: string;
  user_id: number;
  amount: number;
  date: string;
  card_type: string;
}

export interface UserFinancialData {
  user_id: string;
  portfolio: Investment[];
  transactions: Transaction[];
  credit_cards: CreditCard[];
}
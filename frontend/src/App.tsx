import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { TransactionTable } from './components/TransactionTable';
import { InvestmentChart } from './components/InvestmentChart';
import { mockUserData } from './mockData';
import { UserFinancialData } from './types';
import clsx from 'clsx';

function App() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState<UserFinancialData | null>(null);
  const [error, setError] = useState('');

  const handleFetchData = () => {
    setError('');
    const data = mockUserData[userId];
    if (data) {
      setUserData(data);
    } else {
      setError('User not found. Try USER123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-xl">
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID (e.g., USER123)"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                onClick={handleFetchData}
                className={clsx(
                  "inline-flex items-center px-4 py-2 border border-transparent",
                  "text-sm font-medium rounded-r-md text-white bg-indigo-600",
                  "hover:bg-indigo-700 focus:outline-none focus:ring-2",
                  "focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <Search className="h-5 w-5 mr-2" />
                Fetch Details
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
        </div>

        {userData && (
          <div className="space-y-6">
            {/* Investment Portfolio */}
            <InvestmentChart investments={userData.investments} />

            {/* Bank Transactions */}
            <TransactionTable
              transactions={userData.bankTransactions}
              title="Bank Transactions"
            />

            {/* Credit Card Transactions */}
            <TransactionTable
              transactions={userData.creditCardTransactions}
              title="Credit Card Transactions"
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
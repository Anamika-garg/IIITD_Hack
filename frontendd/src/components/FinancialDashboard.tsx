import React, { useState } from "react";

interface Transaction {
  date: string;
  amount: number;
  type: string;
}

interface Portfolio {
  date: string;
  investment_type: string;
  value: number;
}

interface CreditCard {
  date: string;
  card_type: string;
  amount: number;
}

interface UserData {
  user_id: number;
  transactions: string;
  portfolio: string;
  creditCards: string;
}

interface FinancialDashboardProps {
  userData: UserData[];
}

const FinancialDashboard: React.FC<FinancialDashboardProps> = ({ userData }) => {
  const [expandedUser, setExpandedUser] = useState<number | null>(null);

  const toggleExpand = (userId: number) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Financial Dashboard</h1>

      {userData.map((user) => (
        <div key={user.user_id} className="mb-4 border rounded-lg shadow-md bg-white p-4">
          {/* User Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(user.user_id)}
          >
            <h2 className="text-xl font-semibold">User ID: {user.user_id}</h2>
            <button className="text-blue-500 font-bold">
              {expandedUser === user.user_id ? "▲ Collapse" : "▼ Expand"}
            </button>
          </div>

          {expandedUser === user.user_id && (
            <div className="mt-4">
              {/* Transactions */}
              <DetailsSection<Transaction>
                title="Transactions"
                data={parseJSON<Transaction>(user.transactions)}
                columns={["date", "amount", "type"]}
              />

              {/* Portfolio */}
              <DetailsSection<Portfolio>
                title="Portfolio"
                data={parseJSON<Portfolio>(user.portfolio)}
                columns={["date", "investment_type", "value"]}
              />

              {/* Credit Cards */}
              <DetailsSection<CreditCard>
                title="Credit Cards"
                data={parseJSON<CreditCard>(user.creditCards)}
                columns={["date", "card_type", "amount"]}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Generic Section Component
interface DetailsSectionProps<T> {
  title: string;
  data: T[];
  columns: (keyof T)[];
}

const DetailsSection = <T,>({ title, data, columns }: DetailsSectionProps<T>) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col) => (
                <th key={col as string} className="border border-gray-200 px-3 py-2 text-left">
                  {String(col).replace("_", " ").toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border border-gray-200">
                  {columns.map((col) => (
                    <td key={col as string} className="px-3 py-2">
                      {String(item[col])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-2">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Safe JSON Parsing Function
const parseJSON = <T,>(jsonString: string): T[] => {
  try {
    return JSON.parse(jsonString) as T[];
  } catch (error) {
    console.error("Error parsing JSON", error);
    return [];
  }
};

export default FinancialDashboard;
import React from 'react';
import { Transaction, CreditCard } from '../types';

interface TransactionTableProps {
  data: (Transaction | CreditCard)[];
  title: string;
  type: 'transaction' | 'credit';
}

export function TransactionTable({ data, title, type }: TransactionTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              {type === 'credit' && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card Type</th>
              )}
              {type === 'transaction' && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                {type === 'credit' && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {(item as CreditCard).card_type}
                  </td>
                )}
                {type === 'transaction' && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {(item as Transaction).type}
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  -${item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
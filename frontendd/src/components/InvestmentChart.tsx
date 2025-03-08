import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Investment } from '../types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' , 'red' , 'purple' , 'pink'];

interface InvestmentChartProps {
  investments: Investment[];
}

export function InvestmentChart({ investments }: InvestmentChartProps) {
  // Aggregate investments by type
  const aggregatedData = investments.reduce((acc, curr) => {
    const existing = acc.find(item => item.investment_type === curr.investment_type);
    if (existing) {
      existing.value += curr.value;
    } else {
      acc.push({
        investment_type: curr.investment_type,
        value: curr.value
      });
    }
    return acc;
  }, [] as { investment_type: string; value: number }[]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Investment Portfolio</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={aggregatedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="investment_type"
            >
              {aggregatedData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
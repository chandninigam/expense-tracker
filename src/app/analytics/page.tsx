"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS: string[] = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
];

const expenseData = [
  { category: "Food", amount: 1200 },
  { category: "Travel", amount: 800 },
  { category: "Rent", amount: 3000 },
  { category: "Shopping", amount: 900 },
];

export default function Analytics() {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {expenseData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <div>
            <Tooltip />
            <Legend />
          </div>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

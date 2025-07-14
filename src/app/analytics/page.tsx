"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../../style/analytics.css";

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
    <div className="analytics-wrapper">
      <div className="chart-wrapper">
        <h3>Monthly Expense</h3>
        <div className="chart-detail-wrapper">
          <ResponsiveContainer width="50%" height={300}>
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
              </div>
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-categories-wrapper">
            {expenseData.map((item, index) => (
              <div key={index} className="detail-wrapper">
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: COLORS[index % COLORS.length],
                    display: "inline-block",
                    borderRadius: "4px",
                  }}
                />
                <span className="">
                  {item.category}: ₹{item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <h3>Yearly Expense</h3>
        {false ? (
          <div className="chart-detail-wrapper">
            <ResponsiveContainer width="50%" height={300}>
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
                </div>
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-categories-wrapper">
              {expenseData.map((item, index) => (
                <div key={index} className="detail-wrapper">
                  <span
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: COLORS[index % COLORS.length],
                      display: "inline-block",
                      borderRadius: "4px",
                    }}
                  />
                  <span className="">
                    {item.category}: ₹{item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="fallback">
            <h4>Data must cover more than one month.</h4>
          </div>
        )}
      </div>
    </div>
  );
}

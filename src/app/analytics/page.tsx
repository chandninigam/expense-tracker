"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../../style/analytics.css";
import useGroupedExpenses from "@/hooks/useGroupedExpenses";

const COLORS: string[] = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
];

function FallBack({ txt }: { txt: string }) {
  return (
    <div className="fallback">
      <h4>{txt}</h4>
    </div>
  );
}

export default function Analytics() {
  const { getMontlyExpense, getYearlyExpenses, getMonthsGroupedByYear } =
    useGroupedExpenses();

  return (
    <div className="analytics-wrapper">
      <div className="chart-wrapper">
        <h3>Monthly Expense</h3>
        {getMontlyExpense.length > 0 ? (
          <div className="chart-detail-wrapper">
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={getMontlyExpense}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {getMontlyExpense.map((_, index) => (
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
              {getMontlyExpense.map((item, index) => (
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
          <FallBack txt="You don’t have any data to display right now." />
        )}
      </div>
      <div className="chart-wrapper">
        <h3>Yearly Expense</h3>
        {getMonthsGroupedByYear ? (
          <div className="chart-detail-wrapper">
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={getYearlyExpenses}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {getYearlyExpenses.map((_, index) => (
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
              {getYearlyExpenses.map((item, index) => (
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
          <FallBack txt="Data must cover more than one month." />
        )}
      </div>
    </div>
  );
}

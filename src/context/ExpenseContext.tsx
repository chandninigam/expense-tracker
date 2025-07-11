"use client";
import { Expense, ExpenseContextType } from "@/type/expense";
import { ReactNode, createContext, useContext, useState } from "react";

export const ExpenseContext = createContext<ExpenseContextType | null>(null);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (uniqueId: string) => {
    const res = expenses.filter((ex: Expense) => ex.id !== uniqueId);
    setExpenses(res);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("UseExpense context must be used with in Expense Provider");
  }
  return context;
};

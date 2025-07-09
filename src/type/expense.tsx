export type Expense = {
  id: string;
  amount: string;
  category: string;
  date: string;
  notes?: string;
};

export type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
};

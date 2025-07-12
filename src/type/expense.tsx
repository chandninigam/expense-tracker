export type Expense = {
  id: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
};

export type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (uniqueId: string) => void;
};

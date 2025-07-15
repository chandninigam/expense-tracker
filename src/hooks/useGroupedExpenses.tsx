import { useExpense } from "@/context/ExpenseContext";
import { Expense } from "@/type/expense";
import { useCallback, useMemo } from "react";

export default function useGroupedExpenses() {
  const { expenses } = useExpense();

  function isExpenseInMonthOrYear(
    expenseDate: string,
    isMonthly: boolean
  ): boolean {
    const expDate = new Date(expenseDate);
    const todayDate = new Date();

    return isMonthly
      ? expDate.getMonth() === todayDate.getMonth() &&
          expDate.getFullYear() === todayDate.getFullYear()
      : expDate.getFullYear() === todayDate.getFullYear();
  }

  const groupedCategoryMonthlyOrYearly = useCallback(
    (expenses: Expense[], monthly: boolean) => {
      const categoryByTotals: Record<string, number> = {};

      expenses.forEach((expense) => {
        if (isExpenseInMonthOrYear(expense.date, monthly)) {
          categoryByTotals[expense.category] =
            (categoryByTotals[expense.category] || 0) + expense.amount;
        }
      });

      const result = Object.entries(categoryByTotals).map(
        ([category, amount]) => ({
          category,
          amount,
        })
      );
      return result;
    },
    []
  );

  const getMontlyExpense = useMemo(
    () => groupedCategoryMonthlyOrYearly(expenses, true),
    [expenses, groupedCategoryMonthlyOrYearly]
  );

  const getYearlyExpenses = useMemo(
    () => groupedCategoryMonthlyOrYearly(expenses, false),
    [expenses, groupedCategoryMonthlyOrYearly]
  );

  const getMonthsGroupedByYear = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const map: Record<string, Set<number>> = {};
    expenses.map((ele) => {
      const date = new Date(ele.date);
      const year = date.getFullYear();
      if (!map[year]) {
        map[year] = new Set();
      }
      map[year].add(date.getMonth());
    });

    if (map[currentYear]) return map[currentYear].size > 1;

    return false;
  }, [expenses]);

  return { getMontlyExpense, getYearlyExpenses, getMonthsGroupedByYear };
}

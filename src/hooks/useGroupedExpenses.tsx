import { useExpense } from "@/context/ExpenseContext";
import { Expense } from "@/type/expense";
import { useMemo } from "react";

export default function useGroupedExpenses() {
  const { expenses } = useExpense();

  function monthYearlyData(expenseDate: string, isMonthly: boolean): boolean {
    const expDate = new Date(expenseDate);
    const todayDate = new Date();

    if (isMonthly) {
      return (
        expDate.getMonth() === todayDate.getMonth() &&
        expDate.getFullYear() === todayDate.getFullYear()
      );
    }

    return expDate.getFullYear() === todayDate.getFullYear();
  }

  const getMontlyExpense = useMemo(
    function getMontlyExpense(): Expense[] {
      const filterByRecentMonth = expenses.filter((exp: Expense) => {
        return monthYearlyData(exp.date, true);
      });

      return filterByRecentMonth;
    },
    [expenses]
  );

  const getYearlyExpenses = useMemo(
    function getYearlyExpense() {
      const filterByYear = expenses.filter((exp: Expense) => {
        return monthYearlyData(exp.date, false);
      });

      return filterByYear;
    },
    [expenses]
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

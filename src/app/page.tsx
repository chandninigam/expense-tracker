"use client";
import ExpenseForm from "@/components/ExpenseForm/expenseForm";
import styles from "../style/page.module.css";
import { useExpense } from "@/context/ExpenseContext";
import ExpenseList from "@/components/ExpenseList/expenseList";
import { useMemo } from "react";
import { Expense } from "@/type/expense";

function FallbackExpenseList() {
  return (
    <div className={styles.fallbackExpenseList}>
      <h4>You haven&apos;t added any items yet.</h4>
    </div>
  );
}

export default function ExpenseTrackerPage() {
  const { expenses } = useExpense();

  function isSameMonth(expenseDate: string): boolean {
    const expDate = new Date(expenseDate);
    const todayDate = new Date();

    return (
      expDate.getMonth() === todayDate.getMonth() &&
      expDate.getFullYear() === todayDate.getFullYear()
    );
  }

  const monthlyExpense = useMemo(() => {
    const filterByRecentMonth = expenses.filter((exp: Expense) => {
      return isSameMonth(exp.date);
    });

    const total = filterByRecentMonth.reduce((sum, exp) => sum + exp.amount, 0);
    return total;
  }, [expenses]);

  return (
    <div className={styles.heroFormWrapper}>
      <ExpenseForm />
      <div className={styles.listWrapper}>
        <div className={styles.expenseListHeader}>
          <h2>Expense List</h2>
          {expenses.length > 0 && (
            <div>
              You’ve spent ₹
              <span className={styles.amountTxt}>{monthlyExpense}</span> this
              month !
            </div>
          )}
        </div>
        <div className={styles.list}>
          {expenses.length === 0 ? (
            <FallbackExpenseList />
          ) : (
            <ExpenseList expenses={expenses} />
          )}
        </div>
      </div>
    </div>
  );
}

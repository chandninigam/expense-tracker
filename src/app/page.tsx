"use client";
import ExpenseForm from "@/components/ExpenseForm/expenseForm";
import styles from "../style/page.module.css";
import { useExpense } from "@/context/ExpenseContext";
import ExpenseList from "@/components/ExpenseList/expenseList";

function FallbackExpenseList() {
  return (
    <div className={styles.fallbackExpenseList}>
      <h4>You haven&apos;t added any items yet.</h4>
    </div>
  );
}

export default function ExpenseTrackerPage() {
  const { expenses } = useExpense();

  return (
    <div className={styles.heroFormWrapper}>
      <ExpenseForm />
      <div className={styles.listWrapper}>
        <div className={styles.expenseList}>
          <h3>Expense List</h3>
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

"use client";
import ExpenseForm from "@/components/ExpenseForm/expenseForm";
import styles from "../style/page.module.css";

export default function ExpenseTrackerPage() {
  return (
    <div className={styles.heroFormWrapper}>
      <ExpenseForm />
      <div></div>
    </div>
  );
}

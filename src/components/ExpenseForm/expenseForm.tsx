import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useExpense } from "@/context/ExpenseContext";
import { Expense } from "@/type/expense";
import "./expenseForm.css";

interface IFormData {
  amount: string;
  category: string;
  date: string;
  notes?: string;
}

export default function ExpenseForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const { addExpense } = useExpense();

  const handleOnSubmitForm = (data: IFormData) => {
    const expense: Expense = {
      id: uuidv4(),
      ...data,
    };
    addExpense(expense);
    reset();
  };

  return (
    <div className="form-wrapper">
      <h3>Let&apos;s Add an Expense</h3>
      <form onSubmit={handleSubmit(handleOnSubmitForm)}>
        {/* Amount */}
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Amount"
            {...register("amount", { required: true })}
          />
          {errors.amount && <p>Amount is required</p>}
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select {...register("category", { required: true })}>
            <option value="">Select Category</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="utilities">Utilities</option>
          </select>
          {errors.category && <p>Category is required</p>}
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="date"
          />
          {errors.date && <p>Date is required</p>}
        </div>

        {/* Notes */}
        <div className="form-group">
          <label>Notes</label>
          <textarea {...register("notes")} placeholder="Notes" />
        </div>

        {/* Button */}
        <button type="submit" className="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

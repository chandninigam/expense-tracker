import { useExpense } from "@/context/ExpenseContext";
import { Expense } from "@/type/expense";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";

const DummyData = [
  {
    id: "1",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "11",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "10",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "9",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "8",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "7",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "6",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "5",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "4",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "3",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
  {
    id: "2",
    amount: 10,
    category: "rent",
    date: "12/01/2025",
  },
];

export function SingleExpenseUI(props: { expense: Expense; index: number }) {
  const { removeExpense } = useExpense();

  function handleDeleteListItem(expense: Expense) {
    removeExpense(expense.id);
  }

  return (
    <tr>
      <td>{props.index + 1}.</td>
      <td>{props.expense.category}</td>
      <td>{props.expense.amount}</td>
      <td>{props.expense.date}</td>
      <td>
        <div
          onClick={() => handleDeleteListItem(props.expense)}
          className="deleteBtn"
        >
          <Delete color="red" />
        </div>
      </td>
    </tr>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
  return (
    <div>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {DummyData.map((exp: Expense, index: number) => {
              return (
                <SingleExpenseUI expense={exp} index={index} key={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

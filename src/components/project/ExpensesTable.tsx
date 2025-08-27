import { Expense } from '@/data/types';
import styles from './proposalsTable.module.css'; // Reusing the same table styles

interface ExpensesTableProps {
  expenses: Expense[];
}

export const ExpensesTable = ({ expenses }: ExpensesTableProps) => {
  if (expenses.length === 0) {
    return <p>No expenses have been logged for this project yet.</p>;
  }

  return (
    <div className={styles.tableContainer}>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Expense Category</th>
                    <th>Amount (₹)</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{new Date(expense.date).toLocaleDateString('en-GB')}</td>
                        <td>{expense.category}</td>
                        <td>{expense.amount.toLocaleString('en-IN')}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

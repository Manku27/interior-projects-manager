import ExpensesList from '@/components/expense/ExpensesList/ExpensesList';
import { ExpenseForm } from '@/components/expense/form';
import ProjectExpense from '@/components/expense/projectExpenses/ProjectExpense';

import styles from './expensePage.module.css';

export default function Page() {
  return (
    <main className={styles.container}>
      <div className="heading1">Your Expenses</div>
      <ExpenseForm />
      <ProjectExpense />
      <ExpensesList />
    </main>
  );
}

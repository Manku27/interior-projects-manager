import { ExpenseForm } from '@/components/expense/form';

import styles from './expensePage.module.css';

export default function Page() {
  return (
    <main className={styles.container}>
      <div className="heading1">Your Expenses</div>
      <ExpenseForm />
    </main>
  );
}

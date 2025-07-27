import classNames from 'classnames';

import { expensesList } from '../content';
import styles from './expensesList.module.css';

export default function ExpensesList() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>
        Expenses List
      </div>
      <div className={styles.expenseList}>
        {expensesList.map((expense, index) => (
          <div key={index} className={styles.expenseItem}>
            <div className={styles.expenseProject}>{expense.project}</div>
            <div className={styles.expenseAmount}>₹{expense.amount}</div>
            <div className={styles.expenseItemName}>{expense.item}</div>
            <div className={styles.expenseDateTime}>{expense.dateTime}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

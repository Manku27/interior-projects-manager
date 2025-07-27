import classNames from 'classnames';

import { projectExpenses } from '../content';
import styles from './projectExpense.module.css';

export default function ProjectExpense() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>
        Project Expenses
      </div>
      <div className={styles.expenseList}>
        {projectExpenses.map((expense, index) => (
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

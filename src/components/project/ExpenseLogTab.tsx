import { Project } from '@/data/types';
import Link from 'next/link';
import styles from './expenseLogTab.module.css';
import { ExpensesTable } from './ExpensesTable';

interface ExpenseLogTabProps {
  project: Project;
}

export const ExpenseLogTab = ({ project }: ExpenseLogTabProps) => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className="heading3">Project Expense Log</h3>
        <Link href={`/project/${project.id}/expenses/new`} className={styles.addButton}>
            + Add Expense
        </Link>
      </div>
      <ExpensesTable expenses={project.expenses} />
    </div>
  );
};

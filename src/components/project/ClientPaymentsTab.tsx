import { Project } from '@/data/types';
import Link from 'next/link';
import styles from './clientPaymentsTab.module.css';
import { PaymentMilestonesList } from './PaymentMilestonesList';

interface ClientPaymentsTabProps {
  project: Project;
}

export const ClientPaymentsTab = ({ project }: ClientPaymentsTabProps) => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className="heading3">Client Payment Milestones</h3>
        <Link href={`/project/${project.id}/milestones/new`} className={styles.addButton}>
            + Add Milestone
        </Link>
      </div>
      <PaymentMilestonesList milestones={project.paymentMilestones} />
    </div>
  );
};

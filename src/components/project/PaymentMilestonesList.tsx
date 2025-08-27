import { PaymentMilestone } from '@/data/types';
import styles from './paymentMilestonesList.module.css';

interface PaymentMilestonesListProps {
  milestones: PaymentMilestone[];
}

const getStatus = (amountDue: number, amountPaid: number, dueDate: string) => {
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    if (amountPaid >= amountDue) return 'Paid';
    if (today > dueDateObj) return 'Overdue';
    // A more complex logic can be added for "Due" status (e.g., due within a week)
    return 'Upcoming';
}

export const PaymentMilestonesList = ({ milestones }: PaymentMilestonesListProps) => {
  if (milestones.length === 0) {
    return <p>No payment milestones have been set up for this project yet.</p>;
  }

  return (
    <div className={styles.list}>
      {milestones.map((milestone) => {
        const amountPaid = milestone.transactions.reduce((sum, t) => sum + t.amount, 0);
        const balance = milestone.amountDue - amountPaid;
        const status = getStatus(milestone.amountDue, amountPaid, milestone.dueDate);

        return (
          <div key={milestone.id} className={styles.card}>
            <div className={styles.cardHeader}>
                <h4 className={styles.milestoneName}>{milestone.name}</h4>
                <span className={`${styles.statusTag} ${styles[status.toLowerCase()]}`}>{status}</span>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.infoItem}>
                    <span>Amount Due</span>
                    <strong>₹{milestone.amountDue.toLocaleString('en-IN')}</strong>
                </div>
                <div className={styles.infoItem}>
                    <span>Amount Paid</span>
                    <strong>₹{amountPaid.toLocaleString('en-IN')}</strong>
                </div>
                <div className={`${styles.infoItem} ${styles.balance}`}>
                    <span>Balance</span>
                    <strong>₹{balance.toLocaleString('en-IN')}</strong>
                </div>
                <div className={styles.infoItem}>
                    <span>Due Date</span>
                    <strong>{new Date(milestone.dueDate).toLocaleDateString('en-GB')}</strong>
                </div>
            </div>
            <div className={styles.cardActions}>
                <button>Log Transaction</button>
                <button className={styles.secondaryButton}>View History</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

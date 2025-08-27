import { DailyProgress } from '@/data/types';
import styles from './updatesFeed.module.css';

interface UpdatesFeedProps {
  updates: DailyProgress[];
}

export const UpdatesFeed = ({ updates }: UpdatesFeedProps) => {
  if (updates.length === 0) {
    return <p>No progress updates have been logged for this project yet.</p>;
  }

  // Sort updates by date, most recent first
  const sortedUpdates = [...updates].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={styles.feed}>
      {sortedUpdates.map((update) => (
        <div key={update.id} className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.date}>{new Date(update.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className={styles.time}>{update.timeSpentHrs} hrs</span>
            </div>
            <div className={styles.cardBody}>
                <div>
                    <h4>Work Completed Today</h4>
                    <p>{update.workCompleted}</p>
                </div>
                <div>
                    <h4>Plan for Tomorrow</h4>
                    <p>{update.planForTomorrow}</p>
                </div>
                {update.blockers && (
                    <div>
                        <h4>Meetings / Blockers</h4>
                        <p>{update.blockers}</p>
                    </div>
                )}
            </div>
        </div>
      ))}
    </div>
  );
};

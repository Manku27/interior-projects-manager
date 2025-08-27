import { Project } from '@/data/types';
import Link from 'next/link';
import styles from './dailyProgressTab.module.css';
import { UpdatesFeed } from './UpdatesFeed';

interface DailyProgressTabProps {
  project: Project;
}

export const DailyProgressTab = ({ project }: DailyProgressTabProps) => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className="heading3">Daily Progress & Time Log</h3>
        <Link href={`/project/${project.id}/progress/new`} className={styles.addButton}>
            + Add Daily Update
        </Link>
      </div>
      <UpdatesFeed updates={project.progress} />
    </div>
  );
};

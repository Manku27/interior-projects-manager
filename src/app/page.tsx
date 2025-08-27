import { KpiCards } from '@/components/dashboard/KpiCards';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';
import Link from 'next/link';
import styles from './page.module.css';
import buttonStyles from '@/components/common/button.module.css';

export default function DashboardPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className="heading1">Dashboard</h1>
        <Link href="/project/new" className={buttonStyles.addButton}>
            + Add New Project
        </Link>
      </div>
      <KpiCards />
      <ProjectsTable />
    </main>
  );
}

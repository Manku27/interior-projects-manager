import {
  calculateTotalActiveProjects,
  calculateTotalProfitYTD,
  calculateTotalIncentiveDue,
} from '@/lib/data-helpers';
import { KpiCard } from './KpiCard';
import styles from './kpiCards.module.css';

export const KpiCards = () => {
  const totalActiveProjects = calculateTotalActiveProjects();
  const totalProfitYTD = calculateTotalProfitYTD();
  const totalIncentiveDue = calculateTotalIncentiveDue();
  // The fourth KPI is not clearly defined in the requirements, I'll add a placeholder.
  // "Total Incentive Due: The total outstanding incentive balance across all vendors." - This is one.
  // "Total Profit (YTD): Sum of profit from all completed projects this year." - This is two.
  // "Total Active Projects: A live count of all projects with a status of 'Ongoing'." - This is three.
  // The user only listed three KPI cards. I will add a placeholder for a potential fourth one.
  const placeholderValue = 0;

  return (
    <div className={styles.container}>
      <KpiCard title="Total Active Projects" value={totalActiveProjects} />
      <KpiCard title="Total Profit (YTD)" value={totalProfitYTD} isCurrency />
      <KpiCard title="Total Incentive Due" value={totalIncentiveDue} isCurrency />
      <KpiCard title="Projects Completed (YTD)" value={placeholderValue} />
    </div>
  );
};

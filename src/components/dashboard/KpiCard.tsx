import styles from './kpiCard.module.css';

interface KpiCardProps {
  title: string;
  value: number | string;
  isCurrency?: boolean;
}

export const KpiCard = ({ title, value, isCurrency = false }: KpiCardProps) => {
  const formattedValue = isCurrency
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Number(value))
    : value;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.value}>{formattedValue}</p>
    </div>
  );
};

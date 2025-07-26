import { HomeEventList } from '@/components/home/events';
import { ExpenseLogger } from '@/components/home/expense';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className="heading1">Hey, Boss!</div>
      <HomeEventList />
      <ExpenseLogger />
      <section>
        <h2>I just worked</h2>
      </section>
    </main>
  );
}

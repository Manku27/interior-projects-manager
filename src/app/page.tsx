import { HomeEventList } from '@/components/home/events';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className="heading1">Hey, Boss!</div>
      <HomeEventList />
      <section>
        <h2>Quick Expense</h2>
      </section>
      <section>
        <h2>I just worked</h2>
      </section>
    </main>
  );
}

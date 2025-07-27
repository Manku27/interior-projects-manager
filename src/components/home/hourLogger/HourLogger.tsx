import classNames from 'classnames';
import Form from 'next/form';

import styles from './hourLogger.module.css';

async function logHours(formData: FormData) {
  'use server';
  const amount = formData.get('amount');
  const item = formData.get('item');
  console.log({ amount, item });
}

export function HourLogger() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>
        I just worked
      </div>
      <Form action={logHours} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Hours:
            <input
              className={styles.input}
              type="number"
              name="amount"
              required
              min="0"
              step="0.01"
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Project:
            <input
              className={styles.input}
              type="text"
              name="item"
              placeholder="Item name"
            />
          </label>
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </section>
  );
}

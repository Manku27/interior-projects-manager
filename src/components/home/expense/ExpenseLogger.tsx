import classNames from 'classnames';
import Form from 'next/form';

import styles from './expenseLogger.module.css';

async function logExpense(formData: FormData) {
  'use server';
  const amount = formData.get('amount');
  const item = formData.get('item');
  console.log({ amount, item });
}

export function ExpenseLogger() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>
        Quick Expense
      </div>
      <Form action={logExpense} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Amount (₹):
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
            Item (optional):
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

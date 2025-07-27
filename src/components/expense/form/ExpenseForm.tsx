import classNames from 'classnames';
import Form from 'next/form';

import styles from './expenseForm.module.css';

async function logExpense(formData: FormData) {
  'use server';
  const amount = formData.get('amount');
  const item = formData.get('item');
  const project = formData.get('project');
  const media = formData.get('media');
  const date = formData.get('date');
  console.log({ amount, item, project, media, date });
}

export function ExpenseForm() {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.heading, 'heading3')}>Add Expense</div>
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
            Item name:
            <input
              className={styles.input}
              type="text"
              name="item"
              placeholder="Item name"
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Project:
            <input
              className={styles.input}
              type="text"
              name="project"
              placeholder="Project name"
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Media:
            <input
              className={styles.input}
              type="text"
              name="media"
              placeholder="Media"
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Date-Time:
            <input
              className={styles.input}
              type="text"
              name="date"
              placeholder="Date"
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

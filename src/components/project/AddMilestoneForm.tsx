"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/common/form.module.css';

export const AddMilestoneForm = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMilestone = {
      projectId,
      name,
      amountDue: parseFloat(amountDue),
      dueDate,
    };
    console.log('New Milestone Data:', newMilestone);
    alert('Milestone added! (Check console for data). Redirecting...');
    router.push(`/project/${projectId}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Milestone / Vendor Name</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="amountDue">Amount Due (₹)</label>
          <input type="number" id="amountDue" value={amountDue} onChange={(e) => setAmountDue(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </div>
      </div>
      <div className={styles.formActions}>
        <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Add Milestone
        </button>
      </div>
    </form>
  );
};

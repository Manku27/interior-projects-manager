"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/dashboard/addProjectForm.module.css'; // Reuse styles

export const AddDailyUpdateForm = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  const [date, setDate] = useState('');
  const [timeSpentHrs, setTimeSpentHrs] = useState('');
  const [workCompleted, setWorkCompleted] = useState('');
  const [planForTomorrow, setPlanForTomorrow] = useState('');
  const [blockers, setBlockers] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUpdate = {
      projectId,
      date,
      timeSpentHrs: parseFloat(timeSpentHrs),
      workCompleted,
      planForTomorrow,
      blockers,
    };
    console.log('New Daily Update Data:', newUpdate);
    alert('Update added! (Check console for data). Redirecting...');
    router.push(`/project/${projectId}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
            <div className={styles.formGroup}>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="timeSpentHrs">Time Spent (Hrs)</label>
                <input type="number" step="0.5" id="timeSpentHrs" value={timeSpentHrs} onChange={(e) => setTimeSpentHrs(e.target.value)} required />
            </div>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="workCompleted">Work Completed Today</label>
            <textarea id="workCompleted" value={workCompleted} onChange={(e) => setWorkCompleted(e.target.value)} required rows={5}></textarea>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="planForTomorrow">Plan for Tomorrow</label>
            <textarea id="planForTomorrow" value={planForTomorrow} onChange={(e) => setPlanForTomorrow(e.target.value)} required rows={5}></textarea>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="blockers">Notes (Meetings / Blockers)</label>
            <textarea id="blockers" value={blockers} onChange={(e) => setBlockers(e.target.value)} rows={3}></textarea>
        </div>
        <div className={styles.formActions}>
            <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
            Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
            Add Update
            </button>
        </div>
    </form>
  );
};

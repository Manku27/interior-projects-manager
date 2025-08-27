"use client";

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './addProjectForm.module.css';
import { ProjectStatus } from '@/data/types';

export const AddProjectForm = () => {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('Ongoing');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      projectName,
      clientName,
      status,
      startDate,
      endDate,
    };
    console.log('New Project Data:', newProject);
    // Here you would typically call an API to save the data
    alert('Project added! (Check console for data). Redirecting to dashboard...');
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="clientName">Client Name</label>
        <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value as ProjectStatus)}>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="endDate">End Date (Optional)</label>
            <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
      </div>
      <div className={styles.formActions}>
        <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Add Project
        </button>
      </div>
    </form>
  );
};

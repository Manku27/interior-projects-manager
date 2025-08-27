"use client";

import { useState } from 'react';
import { getProjects } from '@/lib/data-helpers';
import styles from './quickExpenseForm.module.css';

export const QuickExpenseForm = () => {
  const [projectId, setProjectId] = useState('');
  const [item, setItem] = useState('');
  const [value, setValue] = useState('');

  const projects = getProjects();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectId) {
        alert('Please select a project.');
        return;
    }
    const expense = {
      projectId,
      item,
      value: parseFloat(value),
    };
    console.log('New Quick Expense:', expense);
    // Reset form
    setProjectId('');
    setItem('');
    setValue('');
  };

  return (
    <div className={styles.container}>
        <h3 className='heading3'>Log Quick Expense</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="project">Project</label>
                <select id="project" value={projectId} onChange={(e) => setProjectId(e.target.value)} required>
                    <option value="" disabled>Select a project</option>
                    {projects.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="item">Item / Service</label>
                <input
                    type="text"
                    id="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    required
                    placeholder='e.g. Travel to site'
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="value">Value (₹)</label>
                <input
                    type="number"
                    id="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    placeholder='e.g. 500'
                />
            </div>
            <button type="submit" className={styles.submitButton}>Log Expense</button>
        </form>
    </div>
  );
};

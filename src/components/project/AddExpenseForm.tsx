"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ExpenseCategory } from '@/data/types';
import styles from '@/components/common/form.module.css';

export const AddExpenseForm = ({ projectId }: { projectId: string }) => {
  const router = useRouter();

  const [date, setDate] = useState('');
  const [category, setCategory] = useState<ExpenseCategory>('Other');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = {
      projectId,
      date,
      category,
      amount: parseFloat(amount),
    };
    console.log('New Expense Data:', newExpense);
    alert('Expense added! (Check console for data). Redirecting...');
    router.push(`/project/${projectId}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="category">Expense Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value as ExpenseCategory)} required>
                <option value="Travel">Travel</option>
                <option value="Supplies">Supplies</option>
                <option value="Printing">Printing</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="amount">Amount (₹)</label>
            <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className={styles.formActions}>
            <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
            Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
            Add Expense
            </button>
        </div>
    </form>
  );
};

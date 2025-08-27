"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/common/form.module.css';

export const AddVendorForm = () => {
  const router = useRouter();
  const [vendorName, setVendorName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVendor = {
      vendorName,
      contactPerson,
      contactNumber,
      email,
    };
    console.log('New Vendor Data:', newVendor);
    alert('Vendor added! (Check console for data). Redirecting to vendors page...');
    router.push('/vendors');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="vendorName">Vendor Name</label>
        <input
          type="text"
          id="vendorName"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contactPerson">Contact Person (Optional)</label>
        <input
          type="text"
          id="contactPerson"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contactNumber">Contact Number (Optional)</label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email (Optional)</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formActions}>
        <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Add Vendor
        </button>
      </div>
    </form>
  );
};

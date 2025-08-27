"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getVendors } from '@/lib/data-helpers';
import { ProposalStatus } from '@/data/types';
import styles from '@/components/dashboard/addProjectForm.module.css'; // Reuse styles

export const AddProposalForm = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const vendors = getVendors();

  const [vendorId, setVendorId] = useState('');
  const [description, setDescription] = useState('');
  const [vendorProposalAmount, setVendorProposalAmount] = useState('');
  const [myQuoteAmount, setMyQuoteAmount] = useState('');
  const [status, setStatus] = useState<ProposalStatus>('Draft');
  const [clientRejected, setClientRejected] = useState(false);
  const [finalVendor, setFinalVendor] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProposal = {
      projectId,
      vendorId,
      description,
      vendorProposalAmount: parseFloat(vendorProposalAmount),
      myQuoteAmount: parseFloat(myQuoteAmount),
      status,
      clientRejected: clientRejected ? { finalVendor, finalPrice: parseFloat(finalPrice) } : undefined,
    };
    console.log('New Proposal Data:', newProposal);
    alert('Proposal added! (Check console for data). Redirecting...');
    router.push(`/project/${projectId}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="vendor">Vendor</label>
        <select id="vendor" value={vendorId} onChange={(e) => setVendorId(e.target.value)} required>
          <option value="" disabled>Select a vendor</option>
          {vendors.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Item / Service Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="vendorProposalAmount">Vendor Proposal (₹)</label>
          <input type="number" id="vendorProposalAmount" value={vendorProposalAmount} onChange={(e) => setVendorProposalAmount(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="myQuoteAmount">My Quoted Price (₹)</label>
          <input type="number" id="myQuoteAmount" value={myQuoteAmount} onChange={(e) => setMyQuoteAmount(e.target.value)} required />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value as ProposalStatus)}>
          <option value="Draft">Draft</option>
          <option value="Sent to Client">Sent to Client</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>
          <input type="checkbox" checked={clientRejected} onChange={(e) => setClientRejected(e.target.checked)} />
          Client Rejected?
        </label>
      </div>
      {clientRejected && (
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="finalVendor">Final Vendor Chosen</label>
            <input type="text" id="finalVendor" value={finalVendor} onChange={(e) => setFinalVendor(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="finalPrice">Final Price Agreed (₹)</label>
            <input type="number" id="finalPrice" value={finalPrice} onChange={(e) => setFinalPrice(e.target.value)} />
          </div>
        </div>
      )}
      <div className={styles.formActions}>
        <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={styles.submitButton}>
          Add Proposal
        </button>
      </div>
    </form>
  );
};

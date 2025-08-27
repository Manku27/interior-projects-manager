import { Proposal } from '@/data/types';
import { getVendorById } from '@/lib/data-helpers';
import styles from './proposalsTable.module.css';

interface ProposalsTableProps {
  proposals: Proposal[];
}

const getVendorName = (vendorId: string) => {
    return getVendorById(vendorId)?.name || 'Unknown Vendor';
}

export const ProposalsTable = ({ proposals }: ProposalsTableProps) => {
  if (proposals.length === 0) {
    return <p>No proposals have been added to this project yet.</p>;
  }

  return (
    <div className={styles.tableContainer}>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Vendor Name</th>
                    <th>Item / Service Description</th>
                    <th>Vendor Proposal (₹)</th>
                    <th>My Quoted Price (₹)</th>
                    <th>Incentive (₹)</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {proposals.map((proposal) => {
                    const incentive = proposal.myQuoteAmount - proposal.vendorProposalAmount;
                    return (
                        <tr key={proposal.id}>
                            <td>{getVendorName(proposal.vendorId)}</td>
                            <td>{proposal.description}</td>
                            <td>{proposal.vendorProposalAmount.toLocaleString('en-IN')}</td>
                            <td>{proposal.myQuoteAmount.toLocaleString('en-IN')}</td>
                            <td>{incentive.toLocaleString('en-IN')}</td>
                            <td>{proposal.status}</td>
                            <td>
                                <div className={styles.actionButtons}>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                    {proposal.status === 'Approved' && <button>Log Incentive</button>}
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  );
};

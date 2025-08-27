import { getVendors } from '@/lib/data-helpers';
import {
    getVendorTotalBusiness,
    getVendorTotalIncentiveEarned,
    getVendorOutstandingIncentive
} from '@/lib/data-helpers';
import styles from '@/components/dashboard/projectsTable.module.css'; // Reuse styles

export const VendorsTable = () => {
    const vendors = getVendors();

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Vendor Name</th>
                        <th>Contact Details</th>
                        <th>Total Business Given (₹)</th>
                        <th>Total Incentive Earned (₹)</th>
                        <th>Outstanding Incentive (₹)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor) => (
                        <tr key={vendor.id}>
                            <td>{vendor.name}</td>
                            <td>
                                {vendor.contactPerson && <div>{vendor.contactPerson}</div>}
                                {vendor.phone && <div>{vendor.phone}</div>}
                                {vendor.email && <div>{vendor.email}</div>}
                            </td>
                            <td>{getVendorTotalBusiness(vendor.id).toLocaleString('en-IN')}</td>
                            <td>{getVendorTotalIncentiveEarned(vendor.id).toLocaleString('en-IN')}</td>
                            <td>{getVendorOutstandingIncentive(vendor.id).toLocaleString('en-IN')}</td>
                            <td>
                                <div className={styles.actionButtons}>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

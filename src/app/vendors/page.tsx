import styles from './vendors.module.css';
import { VendorsTable } from '@/components/vendors/VendorsTable';
import Link from 'next/link';
import buttonStyles from '@/components/common/button.module.css';

export default function VendorsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className="heading1">Vendors</h1>
        <Link href="/vendors/new" className={buttonStyles.addButton}>
            + Add New Vendor
        </Link>
      </div>
      <VendorsTable />
    </main>
  );
}

import { AddVendorForm } from '@/components/vendors/AddVendorForm';
import styles from '@/app/project/new/newProject.module.css'; // Reuse styles

export default function NewVendorPage() {
    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add a New Vendor</h1>
                <p>Fill out the details below to create a new vendor.</p>
                <div className={styles.formWrapper}>
                    <AddVendorForm />
                </div>
            </div>
        </main>
    )
}

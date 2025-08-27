import { AddProjectForm } from '@/components/dashboard/AddProjectForm';
import styles from './newProject.module.css';

export default function NewProjectPage() {
    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add a New Project</h1>
                <p>Fill out the details below to create a new project.</p>
                <div className={styles.formWrapper}>
                    <AddProjectForm />
                </div>
            </div>
        </main>
    )
}

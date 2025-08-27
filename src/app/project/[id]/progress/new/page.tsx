import { AddDailyUpdateForm } from '@/components/project/AddDailyUpdateForm';
import { getProjectById } from '@/lib/data-helpers';
import styles from '@/app/project/new/newProject.module.css'; // Reuse styles

export default function NewProgressPage({ params }: { params: { id: string }}) {
    const project = getProjectById(params.id);

    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add Daily Update for {project?.name || 'Project'}</h1>
                <p>Fill out the details below to log your progress.</p>
                <div className={styles.formWrapper}>
                    <AddDailyUpdateForm projectId={params.id} />
                </div>
            </div>
        </main>
    )
}

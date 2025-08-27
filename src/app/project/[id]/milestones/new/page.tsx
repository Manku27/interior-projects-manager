import { AddMilestoneForm } from '@/components/project/AddMilestoneForm';
import { getProjectById } from '@/lib/data-helpers';
import styles from '@/app/project/new/newProject.module.css'; // Reuse styles

export default function NewMilestonePage({ params }: { params: { id: string }}) {
    const project = getProjectById(params.id);

    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add Payment Milestone for {project?.name || 'Project'}</h1>
                <p>Fill out the details below to add a new payment milestone.</p>
                <div className={styles.formWrapper}>
                    <AddMilestoneForm projectId={params.id} />
                </div>
            </div>
        </main>
    )
}

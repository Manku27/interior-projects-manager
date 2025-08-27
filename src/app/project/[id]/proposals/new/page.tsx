import { AddProposalForm } from '@/components/project/AddProposalForm';
import { getProjectById } from '@/lib/data-helpers';
import styles from '@/app/project/new/newProject.module.css'; // Reuse styles

export default function NewProposalPage({ params }: { params: { id: string }}) {
    const project = getProjectById(params.id);

    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add Proposal for {project?.name || 'Project'}</h1>
                <p>Fill out the details below to add a new proposal.</p>
                <div className={styles.formWrapper}>
                    <AddProposalForm projectId={params.id} />
                </div>
            </div>
        </main>
    )
}

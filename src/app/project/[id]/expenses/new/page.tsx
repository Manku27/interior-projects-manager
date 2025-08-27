import { AddExpenseForm } from '@/components/project/AddExpenseForm';
import { getProjectById } from '@/lib/data-helpers';
import styles from '@/app/project/new/newProject.module.css'; // Reuse styles

export default function NewExpensePage({ params }: { params: { id: string }}) {
    const project = getProjectById(params.id);

    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className='heading1'>Add Expense for {project?.name || 'Project'}</h1>
                <p>Fill out the details below to log a new expense.</p>
                <div className={styles.formWrapper}>
                    <AddExpenseForm projectId={params.id} />
                </div>
            </div>
        </main>
    )
}

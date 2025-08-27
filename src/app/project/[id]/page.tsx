import { getProjectById, getClientById } from '@/lib/data-helpers';
import styles from './projectDetail.module.css';
import { Tabs } from '@/components/common/Tabs';
import { ProposalsTab } from '@/components/project/ProposalsTab';
import { ClientPaymentsTab } from '@/components/project/ClientPaymentsTab';
import { ExpenseLogTab } from '@/components/project/ExpenseLogTab';
import { DailyProgressTab } from '@/components/project/DailyProgressTab';
import { Project } from '@/data/types';

type ProjectDetailPageProps = {
    params: {
        id: string;
    }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const project = getProjectById(params.id);

    if (!project) {
        return (
            <main className={styles.container}>
                <h1 className="heading1">Project Not Found</h1>
                <p>The project you are looking for does not exist.</p>
            </main>
        )
    }

    const client = getClientById(project.clientId);

    const projectTabs = [
        { label: 'Proposals', content: <ProposalsTab project={project} /> },
        { label: 'Client Payments', content: <ClientPaymentsTab project={project} /> },
        { label: 'Expense Log', content: <ExpenseLogTab project={project} /> },
        { label: 'Daily Progress & Time Log', content: <DailyProgressTab project={project} /> },
    ];

    return (
        <main className={styles.container}>
            <div className={styles.header}>
                <div>
                    <p className={styles.breadcrumb}>Projects / {project.name}</p>
                    <h1 className="heading1">{project.name}</h1>
                </div>
                <div className={styles.meta}>
                    <p><strong>Client:</strong> {client?.name || 'Unknown'}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                </div>
            </div>

            <div className={styles.tabContainer}>
                <Tabs tabs={projectTabs} />
            </div>
        </main>
    );
}

import { getProjects, getClients } from '@/lib/data-helpers';
import Link from 'next/link';
import styles from './projectsTable.module.css';
import {
    getProjectIncentiveReceivable,
    getProjectProfit,
    getProjectTimeSpent,
    getProjectTotalExpenses,
    getProjectTotalMyQuote,
    getProjectTotalReceived
} from '@/lib/data-helpers';
import { Project } from '@/data/types';

// TODO: Create a reusable StatusTag component
const StatusTag = ({ status }: { status: string }) => {
    return <span className={`${styles.status} ${styles[status.toLowerCase().replace(' ', '')]}`}>{status}</span>
}

// TODO: Create a reusable ActionButton component
const ActionButtons = ({ project }: { project: Project }) => {
    return (
        <div className={styles.actionButtons}>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export const ProjectsTable = () => {
    const projects = getProjects();
    const clients = getClients();

    const getClientName = (clientId: string) => {
        return clients.find(c => c.id === clientId)?.name || 'Unknown Client';
    }
    const getClientWhatsapp = (clientId: string) => {
        return clients.find(c => c.id === clientId)?.whatsappNumber || '';
    }

    return (
        <div className={styles.tableContainer}>
            <h2 className="heading2">All Projects</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Client Name</th>
                        <th>Status</th>
                        <th>Total My Quote (₹)</th>
                        <th>Total Expenses (₹)</th>
                        <th>Incentive Receivable (₹)</th>
                        <th>Received (₹)</th>
                        <th>Profit (₹)</th>
                        <th>Time Spent (Hrs)</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>
                                <Link href={`/project/${project.id}`}>
                                    {project.name}
                                </Link>
                            </td>
                            <td>
                                <a href={`https://wa.me/${getClientWhatsapp(project.clientId)}`} target="_blank" rel="noopener noreferrer">
                                    {getClientName(project.clientId)}
                                </a>
                            </td>
                            <td><StatusTag status={project.status} /></td>
                            <td>{getProjectTotalMyQuote(project).toLocaleString('en-IN')}</td>
                            <td>{getProjectTotalExpenses(project).toLocaleString('en-IN')}</td>
                            <td>{getProjectIncentiveReceivable(project).toLocaleString('en-IN')}</td>
                            <td>{getProjectTotalReceived(project).toLocaleString('en-IN')}</td>
                            <td>{getProjectProfit(project).toLocaleString('en-IN')}</td>
                            <td>{getProjectTimeSpent(project)}</td>
                            <td>{project.startDate}</td>
                            <td>{project.endDate || 'N/A'}</td>
                            <td><ActionButtons project={project} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

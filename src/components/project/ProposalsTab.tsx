import { Project } from '@/data/types';
import Link from 'next/link';
import { ProposalsTable } from './ProposalsTable';
import styles from './proposalsTab.module.css';

interface ProposalsTabProps {
  project: Project;
}

export const ProposalsTab = ({ project }: ProposalsTabProps) => {
  return (
    <div>
        <div className={styles.header}>
            <h3 className='heading3'>Project Proposals</h3>
            <Link href={`/project/${project.id}/proposals/new`} className={styles.addButton}>
                + Add Proposal
            </Link>
        </div>
        <ProposalsTable proposals={project.proposals} />
    </div>
  );
};

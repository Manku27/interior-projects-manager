import { projects } from '@/data/projects';
import { vendors } from '@/data/vendors';
import { clients } from '@/data/clients';
import { Project, Proposal } from '@/data/types';

// --- Data Accessors ---
export const getProjects = () => projects;
export const getVendors = () => vendors;
export const getClients = () => clients;
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getVendorById = (id: string) => vendors.find(v => v.id === id);
export const getClientById = (id: string) => clients.find(c => c.id === c.id);


// --- KPI Calculations ---

export const calculateTotalActiveProjects = () => {
  return projects.filter(p => p.status === 'Ongoing').length;
};

export const calculateTotalProfitYTD = () => {
  const currentYear = new Date().getFullYear();
  return projects
    .filter(p => p.status === 'Completed' && new Date(p.endDate || 0).getFullYear() === currentYear)
    .reduce((totalProfit, project) => {
      const totalPayments = project.paymentMilestones.reduce((sum, milestone) => {
        return sum + milestone.transactions.reduce((tsum, t) => tsum + t.amount, 0);
      }, 0);

      const totalVendorCost = project.proposals
        .filter(p => p.status === 'Approved')
        .reduce((sum, proposal) => sum + proposal.vendorProposalAmount, 0);

      const totalExpenses = project.expenses.reduce((sum, expense) => sum + expense.amount, 0);

      return totalProfit + (totalPayments - totalVendorCost - totalExpenses);
    }, 0);
};

export const calculateTotalIncentiveDue = () => {
  return projects.reduce((totalDue, project) => {
    const projectIncentive = project.proposals
      .filter(p => p.status === 'Approved')
      .reduce((projectSum, proposal) => {
        const incentiveEarned = proposal.myQuoteAmount - proposal.vendorProposalAmount;
        const incentivePaid = proposal.incentivePayments.reduce((sum, p) => sum + p.amount, 0);
        return projectSum + (incentiveEarned - incentivePaid);
      }, 0);
    return totalDue + projectIncentive;
  }, 0);
};


// --- Projects Table Column Calculations ---

export const getProjectTotalMyQuote = (project: Project) => {
    return project.proposals.reduce((sum, p) => sum + p.myQuoteAmount, 0);
};

export const getProjectTotalExpenses = (project: Project) => {
    return project.expenses.reduce((sum, e) => sum + e.amount, 0);
};

export const getProjectIncentiveReceivable = (project: Project) => {
    return project.proposals
        .filter(p => p.status === 'Approved')
        .reduce((sum, p) => {
            const earned = p.myQuoteAmount - p.vendorProposalAmount;
            const paid = p.incentivePayments.reduce((s, ip) => s + ip.amount, 0);
            return sum + (earned - paid);
        }, 0);
};

export const getProjectTotalReceived = (project: Project) => {
    return project.paymentMilestones.reduce((sum, m) => {
        return sum + m.transactions.reduce((tsum, t) => tsum + t.amount, 0);
    }, 0);
};

export const getProjectProfit = (project: Project) => {
    const totalReceived = getProjectTotalReceived(project);
    const totalVendorCost = project.proposals
        .filter(p => p.status === 'Approved')
        .reduce((sum, proposal) => sum + proposal.vendorProposalAmount, 0);
    const totalExpenses = getProjectTotalExpenses(project);
    return totalReceived - totalVendorCost - totalExpenses;
};

export const getProjectTimeSpent = (project: Project) => {
    return project.progress.reduce((sum, prog) => sum + prog.timeSpentHrs, 0);
};

// --- Vendor Page Calculations ---

export const getVendorTotalBusiness = (vendorId: string) => {
    let totalBusiness = 0;
    projects.forEach(project => {
        project.proposals.forEach(proposal => {
            if (proposal.vendorId === vendorId && proposal.status === 'Approved') {
                totalBusiness += proposal.vendorProposalAmount;
            }
        });
    });
    return totalBusiness;
};

export const getVendorTotalIncentiveEarned = (vendorId: string) => {
    let totalIncentive = 0;
    projects.forEach(project => {
        project.proposals.forEach(proposal => {
            if (proposal.vendorId === vendorId && proposal.status === 'Approved') {
                totalIncentive += proposal.myQuoteAmount - proposal.vendorProposalAmount;
            }
        });
    });
    return totalIncentive;
};

export const getVendorOutstandingIncentive = (vendorId: string) => {
    let outstanding = 0;
    projects.forEach(project => {
        project.proposals.forEach(proposal => {
            if (proposal.vendorId === vendorId && proposal.status === 'Approved') {
                const earned = proposal.myQuoteAmount - proposal.vendorProposalAmount;
                const paid = proposal.incentivePayments.reduce((sum, p) => sum + p.amount, 0);
                outstanding += (earned - paid);
            }
        });
    });
    return outstanding;
};

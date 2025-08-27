import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'proj-001',
    name: 'Modern Apartment Interior',
    clientId: 'cli-001',
    status: 'Ongoing',
    startDate: '2023-01-15',
    proposals: [
      {
        id: 'prop-001',
        vendorId: 'ven-001',
        description: 'Full kitchen setup with island',
        vendorProposalAmount: 500000,
        myQuoteAmount: 550000,
        status: 'Approved',
        incentivePayments: [{ id: 'inc-001', amount: 10000, date: '2023-03-20' }],
      },
      {
        id: 'prop-002',
        vendorId: 'ven-002',
        description: 'Italian marble flooring for living room',
        vendorProposalAmount: 300000,
        myQuoteAmount: 325000,
        status: 'Approved',
        incentivePayments: [],
      },
      {
        id: 'prop-003',
        vendorId: 'ven-004',
        description: 'Smart lighting for all rooms',
        vendorProposalAmount: 150000,
        myQuoteAmount: 160000,
        status: 'Sent to Client',
        incentivePayments: [],
      },
    ],
    paymentMilestones: [
      {
        id: 'pay-001',
        name: 'Advance Payment',
        amountDue: 200000,
        dueDate: '2023-01-20',
        transactions: [{ id: 'txn-001', amount: 200000, date: '2023-01-19' }],
      },
      {
        id: 'pay-002',
        name: 'Kitchen Work Completion',
        amountDue: 350000,
        dueDate: '2023-04-15',
        transactions: [],
      },
    ],
    expenses: [
      { id: 'exp-001', date: '2023-01-18', category: 'Travel', amount: 1500 },
      { id: 'exp-002', date: '2023-02-05', category: 'Supplies', amount: 5000 },
    ],
    progress: [
      {
        id: 'prog-001',
        date: '2023-03-01',
        timeSpentHrs: 5,
        workCompleted: 'Finalized kitchen layout.',
        planForTomorrow: 'Start electrical work.',
      },
    ],
  },
  {
    id: 'proj-002',
    name: 'Corporate Office Renovation',
    clientId: 'cli-002',
    status: 'Completed',
    startDate: '2022-09-01',
    endDate: '2023-02-28',
    proposals: [
      {
        id: 'prop-004',
        vendorId: 'ven-003',
        description: 'Complete office painting',
        vendorProposalAmount: 200000,
        myQuoteAmount: 220000,
        status: 'Approved',
        incentivePayments: [{ id: 'inc-002', amount: 20000, date: '2023-03-05' }],
      },
    ],
    paymentMilestones: [
        {
            id: 'pay-003',
            name: 'Full and Final Payment',
            amountDue: 220000,
            dueDate: '2023-03-01',
            transactions: [{ id: 'txn-002', amount: 220000, date: '2023-03-01' }],
        }
    ],
    expenses: [{ id: 'exp-003', date: '2022-10-10', category: 'Consulting', amount: 25000 }],
    progress: [],
  },
  {
    id: 'proj-003',
    name: 'Retail Store Setup',
    clientId: 'cli-003',
    status: 'On Hold',
    startDate: '2023-05-01',
    proposals: [],
    paymentMilestones: [],
    expenses: [],
    progress: [],
  },
];

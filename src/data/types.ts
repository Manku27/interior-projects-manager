export type ProjectStatus = 'Ongoing' | 'Completed' | 'On Hold' | 'Cancelled';
export type ProposalStatus = 'Draft' | 'Sent to Client' | 'Approved' | 'Rejected';
export type PaymentStatus = 'Upcoming' | 'Due' | 'Paid' | 'Overdue';
export type ExpenseCategory = 'Travel' | 'Supplies' | 'Printing' | 'Consulting' | 'Other';

export interface Vendor {
  id: string;
  name: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
}

export interface Client {
  id: string;
  name:string;
  whatsappNumber: string;
}

export interface IncentivePayment {
  id: string;
  amount: number;
  date: string;
  notes?: string;
}

export interface Proposal {
  id: string;
  vendorId: string;
  description: string;
  vendorProposalAmount: number;
  myQuoteAmount: number;
  status: ProposalStatus;
  incentivePayments: IncentivePayment[];
  clientRejected?: {
    finalVendor: string;
    finalPrice: number;
  };
}

export interface PaymentTransaction {
  id: string;
  amount: number;
  date: string;
}

export interface PaymentMilestone {
  id: string;
  name: string;
  amountDue: number;
  dueDate: string;
  transactions: PaymentTransaction[];
}

export interface Expense {
  id: string;
  date: string;
  category: ExpenseCategory;
  amount: number;
  receiptUrl?: string;
}

export interface DailyProgress {
  id: string;
  date: string;
  timeSpentHrs: number;
  workCompleted: string;
  planForTomorrow: string;
  blockers?: string;
  photoUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  clientId: string;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  proposals: Proposal[];
  paymentMilestones: PaymentMilestone[];
  expenses: Expense[];
  progress: DailyProgress[];
}

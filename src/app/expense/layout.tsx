import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense',
  description: 'Logging and checking personal expenses'
};

export default function ExpenseLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

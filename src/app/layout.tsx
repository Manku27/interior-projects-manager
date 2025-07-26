import classNames from 'classnames';
import type { Metadata } from 'next';

import { geistSans, monsterrat } from '@/basics/fonts';
import '@/basics/global.css';

export const metadata: Metadata = {
  title: 'Interior Projects Manager',
  description: 'Interior Designer Projects Manager'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(monsterrat.variable, geistSans.variable)}>
        {children}
      </body>
    </html>
  );
}

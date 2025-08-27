"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/vendors', label: 'Vendors' },
]

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    Interior PM
                </Link>
            </div>
            <nav className={styles.nav}>
                {navLinks.map(link => {
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href} className={isActive ? styles.activeLink : styles.link}>
                            {link.label}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

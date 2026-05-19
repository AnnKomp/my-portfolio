// components/Header.tsx

import Link from 'next/link';
import styles from '../styles/Header.module.css';

const navLinks = [
  {
    href: '/experience',
    label: 'Expériences',
  },
  {
    href: '/projects',
    label: 'Projets',
  },
  {
    href: '/education',
    label: 'Études',
  },
  {
    href: '/skills',
    label: 'Compétences',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Anna Kompaniets
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
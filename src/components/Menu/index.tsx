'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../Icon';
import IconLink from '../IconLink';
import styles from './Menu.module.css';

interface MenuProps {
  title: string;
  subtitle: string;
}

export default function Menu({ title, subtitle }: MenuProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <table className={styles.header} role="presentation">
        <tbody>
          <tr>
            <td colSpan={2} rowSpan={2} className={styles.widthAuto}>
              <Link
                href="/"
                className={styles.titleLink}
                aria-label={`${title} - Return to homepage`}
              >
                <h1 className={styles.title}>{title}</h1>
              </Link>
              <span className={styles.subtitle}>{subtitle}</span>
            </td>
            <th className={styles.navCell}>
              <Link
                href="/work"
                className={`${styles.navLink} ${pathname === '/work' ? styles.active : ''}`}
                aria-current={pathname === '/work' ? 'page' : undefined}
              >
                Work
              </Link>
            </th>
            <th className={styles.navCell}>
              <IconLink
                href="https://github.com/pdx-daniel"
                label="GitHub"
              >
                <Icon.GitHub />
              </IconLink>
            </th>
          </tr>
          <tr>
            <th className={styles.navCell}>
              <Link
                href="/now"
                className={`${styles.navLink} ${pathname === '/now' ? styles.active : ''}`}
                aria-current={pathname === '/now' ? 'page' : undefined}
              >
                Now
              </Link>
            </th>
            <th className={styles.navCell}>
              <IconLink
                href="https://linkedin.com/in/daniel--demelo"
                label="LinkedIn"
              >
                <Icon.LinkedIn />
              </IconLink>
            </th>
          </tr>
        </tbody>
      </table>
    </nav>
  );
}



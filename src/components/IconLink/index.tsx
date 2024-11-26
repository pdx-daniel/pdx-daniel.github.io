import { ReactElement } from 'react';
import Icon from '../Icon';
import styles from './IconLink.module.css';

// Get union type of all icon components from Icons
type IconComponent = typeof Icon[keyof typeof Icon];

interface IconLinkProps {
  href: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children: ReactElement<IconComponent>;
}

export default function IconLink({
  href,
  label,
  target = '_blank',
  rel = 'noopener noreferrer',
  children
}: IconLinkProps) {
  return (
    <a
      href={href}
      className={styles.iconLink}
      target={target}
      rel={rel}
      aria-label={label}
    >
      {children}
    </a>
  );
} 
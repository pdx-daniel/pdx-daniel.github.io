import Icon from '../Icon';
import IconLink from '../IconLink';
import styles from './Footer.module.css';

// This value should basically never change during runtime. If it does, what are you doing looking at a portfolio site on new years eve?
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterLinks />
      <div className={styles.copyright}>© {currentYear}, Daniel DeMelo</div>
    </footer>
  );
}

export function FooterLinks() {
  return (
    <div className={styles.links}>
      <IconLink
        href="mailto:daniel@demelo.co"
        label="Email"
        target="_self"
      >
        <Icon.Email />
      </IconLink>
      <IconLink
        href="https://github.com/pdx-daniel"
        label="GitHub"
      >
        <Icon.GitHub />
      </IconLink>
      <IconLink
        href="https://linkedin.com/in/daniel--demelo"
        label="LinkedIn"
      >
        <Icon.LinkedIn />
      </IconLink>
    </div>
  );
}
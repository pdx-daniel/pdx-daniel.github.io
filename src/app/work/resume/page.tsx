import ExperienceEntry from '@/components/ExperienceEntry';
import { experiences } from '@/data/experience';
import Link from 'next/link';
import styles from './page.module.css';

/**
 * Resume page component that displays professional experience in a resume format.
 */
export default function Resume() {
  return (
    <div className={styles.main}>
      <h1 id="page-title">Professional Experience</h1>
      <Link
        href="/work"
        className={styles.narrativeLink}
        aria-label="View as narrative format"
      >
        <span aria-hidden="true">←</span>&nbsp;Go back to the narrative resume
      </Link>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Strategic digital transformation leader with proven success building and mentoring diverse technical teams while implementing human-centered technology solutions. Demonstrated track record of developing strategic roadmaps, driving organizational change, and delivering measurable results through clear vision and inclusive stakeholder alignment. Champions accessibility and equity in digital transformation while bringing deep involvement in Portland's public sector, including extensive experience with government compliance requirements, community engagement, and public process modernization.
        </p>
      </section>

      <section aria-label="Work Experience">
        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <ExperienceEntry
            key={index}
            {...experience}
          />
        ))}
      </section>
    </div>
  );
}


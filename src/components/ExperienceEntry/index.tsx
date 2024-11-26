import { ResponsibilityItem } from '@/data/experience';
import styles from './ExperienceEntry.module.css';

interface ExperienceEntryProps {
  title: string;
  company: string;
  startDate: {
    display: string;
    datetime: string;
  };
  endDate: {
    display: string;
    datetime: string;
  };
  location: {
    city: string;
    cityAbbr?: string;
    additional?: string;
  };
  responsibilities: (ResponsibilityItem | string)[];
}

export default function ExperienceEntry({
  title,
  company,
  startDate,
  endDate,
  location,
  responsibilities,
}: ExperienceEntryProps) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.title}>
            <span>{title},</span>&nbsp;
            <span className={styles['company-name']}>{company}</span>
          </h3>
          <p aria-label="Employment Period and Location">
            <span className={styles['employment-period']}>
              <time dateTime={startDate.datetime}>{startDate.display}</time>
              <span aria-hidden="true">&nbsp;-&nbsp;</span>
              <span className="screenreader-only"> to </span>
              <time dateTime={endDate.datetime}>{endDate.display}</time>
            </span>
            <span aria-hidden="true">;&nbsp;</span>
            <span className={styles.location}>
              {location.cityAbbr ? (
                <abbr title={location.city}>{location.cityAbbr}</abbr>
              ) : (
                location.city
              )}
              {location.additional && ` ${location.additional}`}
            </span>
          </p>
        </div>
      </header>

      <ul className={styles.responsibilities} aria-label="Key Responsibilities and Achievements">
        {responsibilities.map((responsibility, index) => (
          <ResponsibilityListItem
            responsibility={responsibility}
            key={index}
          />
        ))}
      </ul>
    </article>
  );
}

/**
 * Renders a list item for a responsibility entry in the experience section.
 * Handles both simple string responsibilities and categorized responsibility items
 * with nested lists. For categorized items, it displays a category header followed
 * by the list of items under that category.
 * 
 * @param responsibility - Either a string for a single responsibility or a
 *                        ResponsibilityItem object containing a category and array of items
 */
function ResponsibilityListItem({ responsibility }: {
  responsibility: ResponsibilityItem | string;
}) {
  if (typeof responsibility === 'string') {
    return (
      <li className={styles.responsibility}>
        {responsibility}
      </li>
    );
  }

  return (
    <li>
      {responsibility.category && (
        <h4 className={styles.category}>{responsibility.category}</h4>
      )}
      <ul aria-label={responsibility.category}>
        {responsibility.items.map((item, itemIndex) => (
          <li
            className={styles.responsibility}
            key={itemIndex}
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
} 
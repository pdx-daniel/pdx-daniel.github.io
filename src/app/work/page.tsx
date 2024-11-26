import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Professional Experience',
  description: 'View my professional experience and work history'
}

export default function Work() {
  return (
    <main
      className={styles.main}
      aria-label="Professional Experience"
    >
      <h1 id="page-title">Professional Experience</h1>
      <Link
        href="/work/resume"
        className={styles.resumeLink}
        aria-label="View as traditional resume format"
      >
        View as traditional resume <span aria-hidden="true">→</span>
      </Link>

      <div
        className={styles.narratives}
        role="list"
        aria-label="Work experience timeline"
      >
        <NarrativeSection title="Leading Frontend at Appfigures" dateRange={{ start: { month: 'January', year: 2019 }, end: { month: 'December', year: 2024 } }}>
          <p>
            I joined Appfigures as a junior engineer and worked my way up to leading their frontend team.
            When I started, we were hitting that classic scaling challenge: a successful product built on
            aging tech infrastructure experiencing growing pains. The codebase was showing its age, our <abbr title="iOS">iOS</abbr>{' '}
            app was struggling with performance, and the engineering team was spending more time fighting
            fires than shipping features.
          </p>
          <p>
            My transition into leadership resulted naturally from finding particular enjoyment in improving
            our developer experience. There's something particularly satisfying about creating a color
            manipulation library or rich text processing engine and watching it become an essential part
            of everyone's workflow.
          </p>
          <p>
            I led our team through the adoption of mature project management practices from Agile and Scrum
            that resulted in more than a 50% improvement to total team productivity. But the real reward was
            seeing junior developers grow into technical leaders themselves, contributing to architecture
            decisions and driving their own initiatives.
          </p>
          <p>
            The role taught me the delicate balance between perfect and shipped, between innovation and
            stability, between leading and doing. When you're serving hundreds of thousands of users including
            government agencies and Fortune 500 companies, you quickly learn that "move fast and break things"
            isn't a luxury you can afford.
          </p>
          <p>
            For a more structured overview of my experience, check out my <Link href="/work/resume">traditional resume</Link>.
          </p>
        </NarrativeSection>
        <NarrativeSection
          title="Digital Publishing and News Leadership at The Cooper Point Journal"
          dateRange={{ start: { month: 'January', year: 2018 }, end: { month: 'December', year: 2019 } }}
        >
          <p>
            My time at the <abbr title="Cooper Point Journal">CPJ</abbr> was was a crash course in taking full responsibility for managing a high-engagement platform. Running a WordPress site for a college newspaper was pretty straightforward, but when something went wrong, it went wrong in front of a real audience. My work included delivery of groundbreaking news coverage, a 50%+ improvement to sitewide accessibility scores, experience working closely with legal compliance issues and countless hours mentoring junior team members.
          </p>
        </NarrativeSection>
        <NarrativeSection title="Public Service" dateRange={{ start: { month: 'January', year: 2022 } }}>
          <p>
            Overseeing community oversight over a $3.5B public budget sounds impressive until you realize it mostly involves a lot of spreadsheets and meetings. But this volunteer role has been a fascinating window into how government actually works - or doesn't. When you're dealing with public money and public meetings, every process improvement navigates layers of compliance requirements and stakeholder concerns. What's particularly striking is how this role has informed my technical work—there's nothing like working with government systems to make you appreciate the importance of accessibility, documentation, and robust error handling. When your users include every member of the public, "edge cases" become surprisingly central to your design thinking.
          </p>
        </NarrativeSection>
      </div>
    </main>
  );
}



type MonthYearRange = {
  start: { month: string; year: number };
  end?: { month: string; year: number };
};

function NarrativeSection({ title, dateRange, children }: {
  title: string;
  dateRange: MonthYearRange;
  children: React.ReactNode;
}) {
  const formatDate = (date: { month: string; year: number }) =>
    `${date.month} ${date.year}`;

  const dateString = dateRange.end
    ? `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`
    : `${formatDate(dateRange.start)} - Present`;

  const sectionId = `narrative-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <section
      className={styles.narrative}
      aria-labelledby={sectionId}
      role="listitem"
      aria-describedby={`${sectionId}-date`}
    >
      <h2
        id={sectionId}
        className={styles.narrativeTitle}
      >
        {title}&nbsp;
        <time
          id={`${sectionId}-date`}
          className={styles.dateRange}
          dateTime={dateRange.end
            ? `${dateRange.start.year}/${dateRange.start.month}/${dateRange.end.year}/${dateRange.end.month}`
            : `${dateRange.start.year}/${dateRange.start.month}`
          }
        >
          ({dateString})
        </time>
      </h2>
      {children}
    </section>
  );
}
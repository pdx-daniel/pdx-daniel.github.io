interface DateInfo {
  display: string;
  datetime: string;
}

interface LocationInfo {
  city: string;
  cityAbbr?: string;
  additional?: string;
}

export interface ResponsibilityItem {
  category?: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  startDate: DateInfo;
  endDate: DateInfo;
  location: LocationInfo;
  responsibilities: (ResponsibilityItem | string)[];
}

/**
 * Work experience entries.
 */
export const experiences: Experience[] = [
  {
    title: "Lead Frontend Developer",
    company: "Appfigures",
    startDate: {
      display: "November 2019",
      datetime: "2019-11"
    },
    endDate: {
      display: "February 2024",
      datetime: "2024-02"
    },
    location: {
      city: "New York City",
      cityAbbr: "NYC",
      additional: "& Remote"
    },
    responsibilities: [
      {
        category: "Technical Leadership & Architecture",
        items: [
          "Architected and implemented large-scale frontend applications serving hundreds of thousands of users across government agencies and Fortune 500 companies using TypeScript, React, and NextJS",
          "Led technical modernization initiatives including TypeScript migration and iOS updates, achieving 50%+ reduction in build times and 80%+ improvement in mobile load times",
          "Maintained 99.9% service uptime during extensive system modernization efforts through careful architecture planning and phased deployment strategies.",
          "Successfully integrated modern React patterns into legacy systems, implementing server-side rendering and static generation strategies to optimize performance."
        ]
      },
      {
        category: "Developer Experience & Tooling",
        items: [
          "Developed significant internal tooling including custom build optimization tools, color manipulation libraries, and rich text processing engines",
          "Implemented comprehensive CI/CD practices using Docker, enhancing deployment frequency and reducing change failure rates",
          "Established automated testing infrastructure incorporating unit, integration, and end-to-end testing, achieving 99%+ test coverage across developing applications",
          "Drove adoption of modern development practices including trunk-based development, feature flags, and progressive enhancement",
          "Created and maintained comprehensive technical documentation and development guidelines"
        ]
      },
      {
        category: "Accessibility & Internationalization",
        items: [
          "Spearheaded implementation of WCAG 2.1 AA compliance across entire platform",
          "Established technical standards for accessibility and localization",
          "Architected scalable solutions for international markets",
          "Ensured seamless user experience for diverse global user base"
        ]
      },
      {
        category: "Team Leadership & Process Improvement",
        items: [
          "Led cross-functional engineering teams using mature Agile and Scrum methodologies",
          "Reduced average engineering time by more than 50% through process improvements and tooling",
          "Established comprehensive standards for code review, testing, and documentation",
          "Mentored junior developers and coordinated across product, design, and architecture teams",
          "Managed technical debt reduction while ensuring continuous delivery of new features"
        ]
      }
    ]
  },
  {
    title: "Webmaster & Technical Lead",
    company: "The Cooper Point Journal",
    startDate: {
      display: "June 2018",
      datetime: "2018-06"
    },
    endDate: {
      display: "June 2019",
      datetime: "2019-06"
    },
    location: {
      city: "Olympia",
      additional: "WA"
    },
    responsibilities: [
      {
        category: "Platform Development",
        items: [
          "Led development and maintenance of high-traffic WordPress platform serving 4,000+ monthly readers",
          "Implemented technical optimizations and modern web development practices using HTML5/CSS3",
          "Architected transition from in-house advertising system to Google AdSense based on detailed traffic pattern analysis",
          "Implemented SEO best practices to capitalize on engagement spikes",
          "Maintained consistent deployment schedule for bi-weekly publications and breaking news coverage"
        ]
      },
      {
        category: "Technical Standards & Security",
        items: [
          "Established comprehensive technical standards and security protocols",
          "Implemented accessibility compliance frameworks, achieving 25-point+ improvement in scoring",
          "Instituted security procedures to protect company accounts, personnel data, and journalistic sources",
        ]
      },
      {
        category: "Team Leadership",
        items: [
          "Managed cross-functional team of junior staff including writers and technical contributors",
          "Mentored junior reporters on technical aspects of digital publishing",
          "Coordinated technical resources for breaking news coverage and investigative reporting",
          "Led technical training sessions for staff on content management systems and security protocols"
        ]
      }
    ]
  },
  {
    title: "Committee Chair",
    company: "Multnomah County Budget Advisory Committees",
    startDate: {
      display: "February 2022",
      datetime: "2022-02"
    },
    endDate: {
      display: "Present",
      datetime: "present"
    },
    location: {
      city: "Portland",
      additional: "OR"
    },
    responsibilities: [
      "Lead strategic oversight of $3.5B public budget, championing data-driven decision making and modernization of legacy processes",
      "Manage stakeholder relationships while ensuring compliance with complex public sector requirements"
    ]
  }
]; 
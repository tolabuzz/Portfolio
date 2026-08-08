export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "reliance-health",
    company: "Reliance Health",
    role: "Chief of Staff",
    start: "September 2025",
    end: "Present",
    current: true,
    achievements: [
      "Partner to the CEO and executive leadership team on enterprise-wide strategic priorities and executive decision support.",
      "Own the executive and board reporting cadence, translating strategy into a clear operating rhythm across the business.",
      "Lead cross-functional strategic projects spanning growth, operations, and organizational effectiveness.",
    ],
  },
  {
    id: "inq-digital",
    company: "inq. Digital Nigeria",
    role: "Technical Lead, Strategy & Operations",
    start: "October 2024",
    end: "September 2025",
    achievements: [
      "Led strategy and operations workstreams supporting commercial performance, pricing, and process improvement.",
      "Partnered with cross-functional teams to translate strategic direction into measurable operational outcomes.",
      "Supported digital transformation initiatives applying automation and analytics to improve efficiency.",
    ],
  },
  {
    id: "pwc-nigeria",
    company: "PwC Nigeria",
    role: "Strategy Consultant",
    start: "May 2021",
    end: "October 2024",
    achievements: [
      "Delivered strategy and transformation engagements for enterprise and public-sector clients across multiple industries.",
      "Supported large-scale organizational transformation programs, including workforce-wide change initiatives.",
      "Applied corporate strategy, market research, and competitive intelligence to guide executive decision-making.",
    ],
  },
  {
    id: "olca",
    company: "Olusola Lanre Coaching Academy",
    role: "Associate Coach",
    start: "February 2020",
    end: "April 2021",
    achievements: [
      "Coached individuals on personal and professional development using structured coaching frameworks.",
      "Contributed to program design and facilitation for coaching cohorts.",
    ],
  },
  {
    id: "cewa",
    company: "Centre for Emotional Wellness Africa",
    role: "Programs Team Coordinator",
    start: "December 2018",
    end: "February 2020",
    achievements: [
      "Coordinated the design and delivery of wellness programs, including logistics, partnerships, and participant engagement.",
      "Supported day-to-day operations for a growing non-profit initiative.",
    ],
  },
];

export type ExpertiseGroup = {
  group: string;
  items: string[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    group: "Strategy",
    items: [
      "Corporate Strategy",
      "Strategic Planning",
      "Growth Strategy",
      "Market Research",
      "Competitive Intelligence",
    ],
  },
  {
    group: "Strategy Execution",
    items: [
      "Performance Management",
      "Strategy Governance",
      "KPI Development",
      "Executive Reporting",
      "Operating Cadence",
    ],
  },
  {
    group: "Transformation",
    items: [
      "Digital Transformation",
      "Business Process Optimization",
      "Change Management",
      "Organizational Transformation",
    ],
  },
  {
    group: "Operations",
    items: [
      "Board Reporting",
      "Investor Reporting",
      "Leadership Operations",
      "Strategic Projects",
      "Executive Decision Support",
    ],
  },
  {
    group: "Analytics",
    items: ["Business Intelligence", "Data Analysis", "Power BI", "Tableau"],
  },
  {
    group: "Project Delivery",
    items: [
      "Program Management",
      "PMO",
      "Cross-functional Delivery",
      "Agile Project Management",
    ],
  },
];

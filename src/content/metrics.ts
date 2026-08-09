export type MetricIcon = "trendUp" | "customers" | "impact" | "growth" | "recovery";

export type Metric = {
  value: string;
  label: string;
  caption: string;
  icon: MetricIcon;
};

// The strongest, verifiable outcomes from across Tola's career — kept to a
// small set so the section stays scannable. Do not add unverified numbers.
export const metrics: Metric[] = [
  {
    value: "₦1.63bn",
    label: "Increase in Annual Recurring Revenue",
    caption: "Delivered through an enterprise pricing transformation across 400+ customers.",
    icon: "trendUp",
  },
  {
    value: "10,000+",
    label: "Employees Impacted",
    caption: "Through a large-scale organizational transformation program.",
    icon: "impact",
  },
  {
    value: "35%",
    label: "Year-over-Year Revenue Growth Supported",
    caption: "Driven by data-led insights and a targeted growth strategy.",
    icon: "growth",
  },
  {
    value: "28%",
    label: "Improvement in Collections",
    caption: "Achieved within two months through a structured recovery strategy.",
    icon: "recovery",
  },
];

export const impactSection = {
  eyebrow: "Impact at a Glance",
  headline: "Driving measurable outcomes that move the needle.",
  description:
    "A track record of solving complex business problems, leading transformation, and delivering results that create real business impact.",
  closingLead: "Across strategy, operations, transformation, and analytics — my focus is simple:",
  closingBold: "solve the right problems, execute with excellence, and deliver measurable impact.",
} as const;

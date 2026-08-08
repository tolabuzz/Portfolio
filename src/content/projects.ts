export type ProjectVisual = {
  label: string;
  kind: "diagram" | "framework" | "screenshot" | "chart";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  outcome?: string;
  context: string;
  challenge: string;
  approach: string[];
  myRole: string;
  keyLessons: string[];
  visuals: ProjectVisual[];
};

// Selected Work — reusable case-study records. Add a new object here to add
// a new project to both the homepage grid and its own /work/[slug] page.
export const projects: Project[] = [
  {
    slug: "enterprise-pricing-transformation",
    title: "Enterprise Pricing Transformation",
    category: "Commercial Strategy / Strategy Execution",
    summary:
      "Led a pricing transformation across 400+ enterprise customers, redesigning pricing structure and governance to better reflect value delivered.",
    outcome: "₦1.63bn increase in annual recurring revenue",
    context:
      "A fast-growing organization with a large enterprise customer base had outgrown its original pricing model, creating inconsistent margins and limited visibility into where value was being left on the table.",
    challenge:
      "Redesign pricing for over 400 enterprise accounts without disrupting existing relationships, while building a governance model the commercial team could sustain going forward.",
    approach: [
      "Segmented the enterprise customer base by usage, value delivered, and commercial risk.",
      "Built a new pricing structure and rollout plan aligned to each segment.",
      "Established pricing governance so future changes stayed disciplined and data-led.",
      "Partnered with sales and account teams to manage customer-by-customer rollout.",
    ],
    myRole:
      "Led the transformation end-to-end — from segmentation and pricing design through governance and rollout — partnering closely with commercial and finance leadership.",
    keyLessons: [
      "Pricing change lands best when it is sequenced by customer segment, not rolled out uniformly.",
      "Governance is what makes a pricing transformation durable rather than a one-time reset.",
    ],
    visuals: [
      { label: "Customer segmentation framework", kind: "framework" },
      { label: "Pricing governance model", kind: "diagram" },
      { label: "ARR impact summary", kind: "chart" },
    ],
  },
  {
    slug: "collections-recovery-strategy",
    title: "Collections Recovery Strategy",
    category: "Strategy & Operations",
    summary:
      "Implemented a structured collections recovery approach combining segmentation, dashboards, escalation, and executive engagement.",
    outcome: "28% improvement in collections within two months",
    context:
      "Outstanding receivables had grown to a level that was affecting cash flow, with no consistent, prioritized way to track or escalate at-risk accounts.",
    challenge:
      "Build a repeatable collections process that the team could run every week, with enough visibility for executives to intervene on the accounts that mattered most.",
    approach: [
      "Segmented outstanding accounts by risk, value, and age of receivable.",
      "Built a live dashboard to track collections performance by segment.",
      "Designed an escalation path that pulled in executive engagement for high-value, high-risk accounts.",
      "Instituted a weekly operating cadence to review progress and unblock stalled accounts.",
    ],
    myRole:
      "Designed the segmentation and escalation model, built the reporting cadence, and ran the weekly review process with cross-functional stakeholders.",
    keyLessons: [
      "A shared, visible dashboard changes behavior faster than policy alone.",
      "Executive escalation works best when it's reserved for a short, well-defined list of accounts.",
    ],
    visuals: [
      { label: "Collections dashboard", kind: "screenshot" },
      { label: "Escalation workflow", kind: "diagram" },
    ],
  },
  {
    slug: "organizational-transformation",
    title: "Organizational Transformation",
    category: "Strategy / Change Management",
    summary:
      "Supported a large-scale transformation program for Nigeria's national tax authority, covering a workforce of more than 10,000 employees.",
    context:
      "A large public-sector institution needed to modernize its operating model and ways of working across a workforce of more than 10,000 people, as part of a broader institutional transformation mandate.",
    challenge:
      "Design and support change management at a scale and pace that a workforce this large could realistically absorb, while keeping day-to-day operations running.",
    approach: [
      "Contributed to the design of the target operating model and transformation roadmap.",
      "Supported stakeholder engagement and change readiness across multiple business units.",
      "Helped structure communication and training plans to support adoption at scale.",
    ],
    myRole:
      "Supported the transformation team on strategy, change management, and program delivery workstreams as part of the broader engagement.",
    keyLessons: [
      "Change at this scale succeeds or fails on middle-management buy-in, not just executive sponsorship.",
      "Sequencing matters more than speed when a workforce this large is affected.",
    ],
    visuals: [
      { label: "Target operating model", kind: "framework" },
      { label: "Change readiness heatmap", kind: "chart" },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    category: "Digital Transformation / Process Optimization",
    summary:
      "Led initiatives involving automation, analytics, and artificial intelligence to improve operational efficiency.",
    context:
      "Manual, disconnected processes were creating bottlenecks and limiting the organization's ability to make timely, data-informed decisions.",
    challenge:
      "Identify where automation and analytics would create the most operational leverage, and deliver it without overburdening already-stretched teams.",
    approach: [
      "Mapped existing processes to identify the highest-friction, highest-value automation opportunities.",
      "Introduced analytics and AI-supported tooling to reduce manual effort and improve decision speed.",
      "Worked with process owners to embed new tools into day-to-day operations.",
    ],
    myRole:
      "Led identification and delivery of automation and analytics initiatives, working closely with technical and operational teams.",
    keyLessons: [
      "The highest-impact automation is usually the least visible process, not the flashiest one.",
      "Adoption depends on designing tools around how teams already work, not the reverse.",
    ],
    visuals: [
      { label: "Process automation map", kind: "diagram" },
      { label: "Efficiency impact summary", kind: "chart" },
    ],
  },
  {
    slug: "revenue-growth-strategy",
    title: "Revenue Growth Strategy",
    category: "Growth Strategy / Analytics",
    summary:
      "Used financial and client analysis to identify high-value opportunities and support a targeted growth strategy.",
    outcome: "35% year-over-year revenue growth",
    context:
      "The business had multiple potential growth levers but limited clarity on which client segments and offerings would deliver the best return on focus.",
    challenge:
      "Cut through a wide set of options to a small number of high-conviction growth bets, backed by financial and client analysis.",
    approach: [
      "Analyzed financial performance and client data to identify the highest-value growth opportunities.",
      "Prioritized a focused set of growth initiatives based on impact and feasibility.",
      "Supported execution and tracking against the resulting growth strategy.",
    ],
    myRole:
      "Led the financial and client analysis, and supported prioritization and execution of the resulting growth strategy.",
    keyLessons: [
      "A small number of well-chosen growth bets outperform a long list of good ideas.",
      "Growth strategy holds up only when it's paired with a way to track progress against it.",
    ],
    visuals: [
      { label: "Growth opportunity matrix", kind: "framework" },
      { label: "Revenue growth trend", kind: "chart" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

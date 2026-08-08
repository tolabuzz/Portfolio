export type Article = {
  slug: string;
  title: string;
  category:
    | "Strategy"
    | "Transformation"
    | "AI & Productivity"
    | "Leadership"
    | "Career"
    | "Business Analysis";
  description: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  body: string[];
};

// Placeholder insights — structured so real articles can replace these
// directly, one object at a time, without touching any component code.
export const articles: Article[] = [
  {
    slug: "strategy-is-a-sequencing-problem",
    title: "Strategy Is Usually a Sequencing Problem",
    category: "Strategy",
    description:
      "Most strategies fail less from bad ideas and more from bad sequencing. Notes on deciding what to do first.",
    date: "2026-01-12",
    readingTime: "5 min read",
    featured: true,
    body: [
      "Executive teams rarely disagree on the big picture. Give a leadership room thirty minutes and a whiteboard, and you'll usually get broad agreement on where the business needs to go. Where strategies actually fall apart is sequencing — deciding what happens first, second, and not-yet.",
      "In pricing transformations, organizational change, and growth strategy alike, the pattern repeats: the highest-conviction move isn't always the right first move. It's the one the organization can actually absorb without breaking something else.",
      "A useful discipline is to separate 'what's correct' from 'what's sequenced correctly.' Almost every strategy document gets the first right. Very few get the second right, and that's usually the difference between a plan that ships and one that stalls in committee.",
    ],
  },
  {
    slug: "change-management-middle-managers",
    title: "Transformation Lives or Dies With Middle Management",
    category: "Transformation",
    description:
      "Executive sponsorship gets transformation programs approved. Middle management gets them adopted.",
    date: "2025-11-03",
    readingTime: "4 min read",
    body: [
      "Large-scale transformation programs tend to over-invest in executive alignment and under-invest in the layer of the organization that actually has to make the change real day to day.",
      "Middle managers are the ones translating a new operating model into what their teams do differently on a Tuesday morning. If they don't understand it, believe in it, or have the tools to explain it, adoption stalls no matter how strong the executive mandate is.",
      "The practical fix is unglamorous: build change readiness and communication plans around middle management as a distinct audience, not an afterthought to the executive rollout.",
    ],
  },
  {
    slug: "ai-productivity-executive-operations",
    title: "Where AI Actually Helps in Executive Operations",
    category: "AI & Productivity",
    description:
      "Not every AI use case in executive operations is worth the effort. A few honestly are.",
    date: "2025-09-20",
    readingTime: "6 min read",
    body: [
      "There's a lot of noise about AI transforming executive operations, and a lot of it doesn't survive contact with a real board reporting cycle. The use cases that hold up tend to be narrower and less exciting than the pitch decks suggest.",
      "Synthesizing first drafts of recurring reports, surfacing anomalies in operating data before a review, and speeding up the first pass of research — these save real time. Replacing judgment on ambiguous, high-stakes decisions is a different matter entirely.",
      "The organizations getting the most value aren't the ones with the most tools. They're the ones that were honest about which parts of the job are repeatable, and automated exactly those.",
    ],
  },
  {
    slug: "career-lessons-consulting-to-operator",
    title: "What Changes When You Move From Consulting to Operator",
    category: "Career",
    description:
      "Moving from advising executives to being one changes what 'good work' looks like.",
    date: "2025-06-14",
    readingTime: "5 min read",
    body: [
      "Consulting rewards a clean, well-argued recommendation. Operating roles reward a recommendation that survives contact with the org chart, the budget cycle, and the people who have to live with it.",
      "The hardest adjustment isn't technical — it's accepting that a slightly worse plan that ships beats a better plan that doesn't. Execution risk becomes a first-class input to the strategy itself, not something handed off to someone else afterward.",
      "The upside is that the work gets more honest. You find out quickly whether an idea was actually good, because you're the one accountable for what happens next.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

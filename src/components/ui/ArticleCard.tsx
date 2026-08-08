import Link from "next/link";
import type { Article } from "@/content/articles";
import { formatDate } from "@/lib/format";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-6 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(197,104,74,0.18)]"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 font-label text-label-caps uppercase tracking-widest text-primary">
        {article.category}
      </span>
      <h3 className="mt-4 font-display text-headline-sm text-primary transition-colors group-hover:text-primary-container">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 font-body text-body-md text-on-surface-variant">
        {article.description}
      </p>
      <p className="mt-6 font-body text-caption text-outline">
        {formatDate(article.date)} · {article.readingTime}
      </p>
    </Link>
  );
}

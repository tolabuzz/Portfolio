import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import { articles } from "@/content/articles";
import { formatDate } from "@/lib/format";

export default function Insights({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const featured = articles.find((article) => article.featured) ?? articles[0];
  const rest = articles.filter((article) => article.slug !== featured.slug);

  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading
          level={headingLevel}
          title="Insights"
          description="Notes on strategy, transformation, and leadership."
        />

        <Link
          href={`/insights/${featured.slug}`}
          className="group grid grid-cols-1 gap-6 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 transition-shadow hover:shadow-[0_10px_30px_rgba(197,104,74,0.18)] md:grid-cols-12 md:gap-gutter md:p-10"
        >
          <div className="md:col-span-8">
            <span className="inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 font-label text-label-caps uppercase tracking-widest text-primary">
              Featured &middot; {featured.category}
            </span>
            <h3 className="mt-4 font-display text-headline-md text-primary transition-colors group-hover:text-primary-container">
              {featured.title}
            </h3>
            <p className="mt-4 font-body text-body-lg text-on-surface-variant">
              {featured.description}
            </p>
            <p className="mt-6 font-body text-caption text-outline">
              {formatDate(featured.date)} &middot; {featured.readingTime}
            </p>
          </div>
        </Link>

        <div className="mt-gutter grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}

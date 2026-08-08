import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { articles, getArticleBySlug } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.description,
      url: `${site.url}/insights/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      images: [{ url: site.ogImage }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="py-16 md:py-[80px]">
      <Container className="max-w-3xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1 font-label text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Insights
        </Link>

        <span className="mt-8 inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 font-label text-label-caps uppercase tracking-widest text-primary">
          {article.category}
        </span>
        <h1 className="mt-4 font-display text-display-lg-mobile text-primary md:text-display-lg">
          {article.title}
        </h1>
        <p className="mt-6 font-body text-caption text-outline">
          {formatDate(article.date)} &middot; {article.readingTime} &middot;{" "}
          {site.name}
        </p>

        <div className="mt-10">
          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-12 font-display text-headline-md text-primary first:mt-0"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={i}
                  className="mt-8 font-display text-headline-sm text-primary"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mt-6 space-y-3">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 font-body text-body-lg leading-relaxed text-on-surface"
                    >
                      <span
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-container"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="mt-6 font-body text-body-lg leading-relaxed text-on-surface first:mt-0"
              >
                {block.text}
              </p>
            );
          })}
        </div>
      </Container>
    </article>
  );
}

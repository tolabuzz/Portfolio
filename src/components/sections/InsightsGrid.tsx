"use client";

import { useState } from "react";
import Link from "next/link";
import ArticleCard from "@/components/ui/ArticleCard";
import { cn } from "@/lib/cn";
import type { Article } from "@/content/articles";
import { formatDate } from "@/lib/format";

export default function InsightsGrid({ articles }: { articles: Article[] }) {
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const featured = articles.find((article) => article.featured) ?? articles[0];
  const filtered = activeCategory
    ? articles.filter((article) => article.category === activeCategory)
    : articles;
  const showFeatured = !activeCategory;
  const gridArticles = showFeatured
    ? filtered.filter((article) => article.slug !== featured.slug)
    : filtered;

  return (
    <>
      <div
        role="group"
        aria-label="Filter insights by category"
        className="mt-10 flex flex-wrap gap-3"
      >
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={cn(
            "rounded-full px-5 py-2 font-label text-label-caps uppercase tracking-widest transition-colors",
            activeCategory === null
              ? "bg-primary text-on-primary"
              : "border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-5 py-2 font-label text-label-caps uppercase tracking-widest transition-colors",
              activeCategory === category
                ? "bg-primary text-on-primary"
                : "border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {showFeatured && (
        <Link
          href={`/insights/${featured.slug}`}
          className="group mt-gutter grid grid-cols-1 gap-6 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-8 transition-shadow hover:shadow-[0_10px_30px_rgba(197,104,74,0.18)] md:grid-cols-12 md:gap-gutter md:p-10"
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
      )}

      {gridArticles.length > 0 ? (
        <div className="mt-gutter grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-gutter font-body text-body-lg text-on-surface-variant">
          No articles in this category yet.
        </p>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
      images: [{ url: site.ogImage }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="py-16 md:py-[80px]">
      <Container className="max-w-4xl">
        <Link
          href="/work"
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
          Back to Selected Work
        </Link>

        <p className="mt-8 font-label text-label-caps uppercase tracking-widest text-secondary">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-display-lg-mobile text-primary md:text-display-lg">
          {project.title}
        </h1>
        <p className="mt-6 font-body text-body-lg text-on-surface-variant">
          {project.summary}
        </p>

        {project.outcome && (
          <div className="mt-8 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-6">
            <p className="font-label text-label-caps uppercase tracking-widest text-on-surface-variant">
              Outcome
            </p>
            <p className="mt-2 font-display text-headline-sm text-primary">
              {project.outcome}
            </p>
          </div>
        )}

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="font-display text-headline-md text-primary">
              Context
            </h2>
            <p className="mt-4 font-body text-body-md leading-relaxed text-on-surface-variant">
              {project.context}
            </p>
          </section>

          <section>
            <h2 className="font-display text-headline-md text-primary">
              Challenge
            </h2>
            <p className="mt-4 font-body text-body-md leading-relaxed text-on-surface-variant">
              {project.challenge}
            </p>
          </section>

          <section>
            <h2 className="font-display text-headline-md text-primary">
              Approach
            </h2>
            <ul className="mt-4 space-y-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 font-display text-headline-sm leading-none text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-body-md leading-relaxed text-on-surface-variant">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-headline-md text-primary">
              My Role
            </h2>
            <p className="mt-4 font-body text-body-md leading-relaxed text-on-surface-variant">
              {project.myRole}
            </p>
          </section>

          <section>
            <h2 className="font-display text-headline-md text-primary">
              Key Lessons
            </h2>
            <ul className="mt-4 space-y-3">
              {project.keyLessons.map((lesson, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-body-md leading-relaxed text-on-surface-variant"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-container"
                    aria-hidden="true"
                  />
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-outline-variant/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-body-md text-on-surface-variant">
            Interested in similar work?
          </p>
          <Button href={`mailto:${site.email}`} variant="primary">
            Get in touch
          </Button>
        </div>
      </Container>
    </article>
  );
}

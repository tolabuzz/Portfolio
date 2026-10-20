import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free guides, affirmations, and a Christian devotional by Tola Oladiji on emotional wellbeing, personal growth, and faith.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <section className="bg-surface-container-lowest py-16 md:py-[80px]">
      <Container>
        <SectionHeading
          level="h1"
          eyebrow="Wellness & Faith"
          title="Resources"
          description="Resources I’ve written to help you reflect, nurture your emotional wellbeing, and grow in faith. Read online or download a free copy to keep."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.slug}
              className="flex flex-col overflow-hidden rounded-lg border border-outline-variant/30 bg-background shadow-sm"
            >
              <div className="relative h-80 bg-surface-container-low p-6">
                <Image
                  src={`/resources/${resource.slug}.jpg`}
                  alt={`Cover of ${resource.title} by Tola Oladiji`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="font-label text-label-caps uppercase tracking-widest text-secondary">
                  {resource.category}
                </p>
                <h2 className="mt-3 font-display text-headline-sm text-primary">
                  {resource.title}
                </h2>
                <p className="mt-4 flex-1 font-body text-body-md text-on-surface-variant">
                  {resource.description}
                </p>
                <p className="mt-6 font-body text-caption text-on-surface-variant">
                  PDF · {resource.pages} pages · {resource.size}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-5">
                  <a
                    href={`/resources/${resource.slug}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${resource.title} (PDF, opens in a new tab)`}
                    className="inline-flex rounded-full bg-primary px-5 py-3 font-label text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Read PDF <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={`/resources/${resource.slug}.pdf`}
                    download={`${resource.slug}.pdf`}
                    aria-label={`Download ${resource.title} (PDF)`}
                    className="rounded-sm font-label text-label-caps uppercase text-primary underline underline-offset-4 hover:text-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

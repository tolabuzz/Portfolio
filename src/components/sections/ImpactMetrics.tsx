import Container from "@/components/layout/Container";
import { metrics, impactSection, type MetricIcon } from "@/content/metrics";

const icons: Record<MetricIcon, React.ReactNode> = {
  trendUp: (
    <>
      <polyline points="1 18 8.5 10.5 13.5 15.5 23 6" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  customers: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  impact: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  growth: (
    <>
      <line x1="6" y1="20" x2="6" y2="16" />
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
    </>
  ),
  recovery: (
    <>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </>
  ),
};

export default function ImpactMetrics({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <p className="mb-3 font-label text-label-caps uppercase tracking-widest text-secondary">
          {impactSection.eyebrow}
        </p>
        <Heading className="max-w-3xl font-display text-display-lg-mobile text-primary md:text-display-lg">
          {impactSection.headline}
        </Heading>
        <p className="mt-4 max-w-2xl font-body text-body-lg text-on-surface-variant">
          {impactSection.description}
        </p>

        <div className="mt-12 grid grid-cols-1 divide-y divide-outline-variant/20 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:divide-y-0 lg:grid-cols-4 lg:gap-x-0 lg:divide-x">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-2 py-8 first:pt-0 sm:px-0 sm:py-0 lg:px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[metric.icon]}
                </svg>
              </div>

              <p className="mt-5 font-display text-[42px] leading-[48px] tracking-[-0.01em] text-primary">
                {metric.value}
              </p>
              <p className="mt-2 font-label text-label-caps uppercase tracking-widest text-on-surface">
                {metric.label}
              </p>

              <span className="mt-4 block h-0.5 w-6 bg-secondary-container" aria-hidden="true" />

              <p className="mt-4 font-body text-caption leading-relaxed text-on-surface-variant">
                {metric.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-4 border-t border-outline-variant/20 pt-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p className="font-body text-body-md text-on-surface-variant">
            {impactSection.closingLead}{" "}
            <span className="font-medium text-on-surface">
              {impactSection.closingBold}
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}

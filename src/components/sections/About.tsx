import Container from "@/components/layout/Container";

export default function About({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="py-16 md:py-[80px]">
      <Container className="max-w-3xl">
        <Heading className="font-display text-display-lg-mobile text-primary md:text-display-lg">
          About
        </Heading>
        <p className="mt-6 font-body text-body-lg text-on-surface-variant">
          I&apos;m a strategy and transformation professional with a track
          record of helping organizations move from complexity to clarity.
          Over the past few years, I&apos;ve led strategy development,
          business transformation, and execution planning across consulting
          and industry—working with executives, cross-functional teams, and
          government stakeholders to deliver results that matter.
        </p>
        <p className="mt-6 font-body text-body-lg leading-relaxed text-on-surface-variant">
          My background spans strategy formulation, project execution, data
          analytics, performance improvement, and digital transformation.
          I&apos;ve supported in designing national reform programs, advised
          tax authorities on data harmonization, led commercial recovery
          efforts, and driven process improvements that unlocked revenue and
          reduced costs.
        </p>
        <p className="mt-6 font-body text-body-lg leading-relaxed text-on-surface-variant">
          Beyond the numbers, I actually care about building systems that
          help organizations unlock revenue and maximize shareholder value.
        </p>
        <p className="mt-6 font-body text-body-lg leading-relaxed text-on-surface-variant">
          Let&apos;s connect if you&apos;re building something ambitious, or
          just enjoy a good conversation about strategy, leadership, or
          career growth.
        </p>
      </Container>
    </section>
  );
}

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
        <p className="mt-6 font-body text-body-lg text-on-surface">
          I help executive teams turn complex, ambiguous problems into
          strategy that actually gets executed — and operations that hold up
          once the plan meets reality.
        </p>
        <p className="mt-6 font-body text-body-md leading-relaxed text-on-surface-variant">
          My work sits at the intersection of strategy, transformation, and
          operations, built on a foundation of consulting rigor from PwC
          Nigeria and applied directly inside fast-moving technology,
          healthcare, and financial services organizations. I&apos;ve led
          pricing and growth strategy, supported organization-wide
          transformation programs, and served as Chief of Staff to a CEO —
          and now lead strategy and PMO for an insurance business, turning
          strategic priorities into a disciplined portfolio of execution.
          Across every engagement, I bring the same combination of
          analytical rigor, clear communication, and a bias toward execution
          — backed by hands-on experience in analytics and organizational
          change.
        </p>
      </Container>
    </section>
  );
}

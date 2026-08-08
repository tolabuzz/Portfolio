import Container from "@/components/layout/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function About({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="py-16 md:py-[80px]">
      <Container className="grid grid-cols-4 items-center gap-gutter md:grid-cols-12">
        <div className="col-span-4 md:col-span-6 md:pr-12">
          <Heading className="font-display text-display-lg-mobile text-primary md:text-display-lg">
            About
          </Heading>
          <p className="mt-6 font-body text-body-lg text-on-surface">
            I help executive teams turn complex, ambiguous problems into
            strategy that actually gets executed — and operations that hold
            up once the plan meets reality.
          </p>
          <p className="mt-6 font-body text-body-md leading-relaxed text-on-surface-variant">
            My work sits at the intersection of strategy, transformation, and
            operations, built on a foundation of consulting rigor
            from PwC Nigeria and applied directly inside fast-moving
            technology, healthcare, and financial services organizations.
            I&apos;ve led pricing and growth strategy, supported
            organization-wide transformation programs, and served as Chief
            of Staff to a CEO — and now lead strategy and PMO for an
            insurance business, turning strategic priorities into a
            disciplined portfolio of execution. Across every engagement, I
            bring the same combination of analytical rigor, clear
            communication, and a bias toward execution — backed by hands-on
            experience in analytics and organizational change.
          </p>
        </div>

        <div className="relative col-span-4 mt-12 md:col-span-6 md:mt-0">
          <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-blob bg-secondary-container/50" />
          <ImagePlaceholder
            label="Workspace or environment photo"
            kind="photo"
            aspect="aspect-video"
            className="w-full shadow-md"
          />
        </div>
      </Container>
    </section>
  );
}

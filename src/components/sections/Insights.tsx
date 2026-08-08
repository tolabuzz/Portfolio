import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import InsightsGrid from "@/components/sections/InsightsGrid";
import { articles } from "@/content/articles";

export default function Insights({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  return (
    <section className="py-16 md:py-[80px]">
      <Container>
        <SectionHeading
          level={headingLevel}
          title="Insights"
          description="Notes on strategy, leadership, career growth, and the habits that make work better."
        />

        <InsightsGrid articles={articles} />
      </Container>
    </section>
  );
}

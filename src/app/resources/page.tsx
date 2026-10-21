import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ResourceLibrary from "@/components/resources/ResourceLibrary";
import BookACall from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free guides, affirmations, and a Christian devotional by Tola Oladiji on emotional wellbeing, personal growth, and faith.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-surface-container-lowest py-16 md:py-[80px]">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="Wellness & Faith"
            title="Resources"
            description="Resources I’ve written to help you reflect, nurture your emotional wellbeing, and grow in faith. Share your details to download a free copy to keep."
          />
          <ResourceLibrary />
        </Container>
      </section>
      <BookACall />
    </>
  );
}

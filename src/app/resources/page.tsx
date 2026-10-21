import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ResourceLibrary from "@/components/resources/ResourceLibrary";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore books, guides, and other resources by Tola Oladiji across a range of topics.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-surface-container-lowest py-16 md:py-[80px]">
        <Container>
          <SectionHeading
            level="h1"
            eyebrow="The Library"
            title="Resources"
            description="A collection of my books, guides, and resources across a range of topics. Browse the collection and download a copy to keep."
          />
          <ResourceLibrary />
        </Container>
      </section>
    </>
  );
}

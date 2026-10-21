import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import Expertise from "@/components/sections/Expertise";

export const metadata: Metadata = {
  title: "What I Do",
  description: "Explore Tola Oladiji’s experience, selected work, and expertise in strategy, transformation, and operations.",
  alternates: { canonical: "/what-i-do" },
};

export default function WhatIDoPage() {
  return (
    <>
      <Container className="pt-16 md:pt-[80px]">
        <SectionHeading level="h1" title="What I Do" description="My experience, the work I’ve delivered, and the expertise I bring to complex business challenges." />
      </Container>
      <Experience />
      <SelectedWork />
      <Expertise />
    </>
  );
}

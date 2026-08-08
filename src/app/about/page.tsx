import type { Metadata } from "next";
import About from "@/components/sections/About";
import BeyondWork from "@/components/sections/BeyondWork";

export const metadata: Metadata = {
  title: "About",
  description:
    "A concise introduction to Tola Oladiji's background across strategy, transformation, executive operations, consulting, technology, and healthcare.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About headingLevel="h1" />
      <BeyondWork />
    </>
  );
}

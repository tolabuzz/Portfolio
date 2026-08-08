import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tola Oladiji by email or LinkedIn to discuss strategy, transformation, and executive operations roles or engagements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact headingLevel="h1" />;
}

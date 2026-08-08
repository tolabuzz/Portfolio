import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Tola Oladiji on email, LinkedIn, Instagram, or X to discuss strategy, transformation, and operations roles or engagements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact headingLevel="h1" />;
}

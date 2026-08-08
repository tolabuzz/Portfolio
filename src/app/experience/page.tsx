import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Tola Oladiji's career history across Reliance Health, inq. Digital Nigeria, PwC Nigeria, and earlier roles in coaching and program coordination.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <Experience headingLevel="h1" />;
}

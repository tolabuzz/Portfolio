import type { Metadata } from "next";
import Expertise from "@/components/sections/Expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Capabilities across strategy, strategy execution, transformation, executive operations, analytics, and project delivery.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return <Expertise headingLevel="h1" />;
}

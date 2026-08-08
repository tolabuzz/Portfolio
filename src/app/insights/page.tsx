import type { Metadata } from "next";
import Insights from "@/components/sections/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on strategy, transformation, AI and productivity, leadership, and career, from Tola Oladiji.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return <Insights headingLevel="h1" />;
}

import type { Metadata } from "next";
import Insights from "@/components/sections/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on strategy, leadership, career growth, and productivity, from Tola Oladiji.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return <Insights headingLevel="h1" />;
}

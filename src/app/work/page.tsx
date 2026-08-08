import type { Metadata } from "next";
import SelectedWork from "@/components/sections/SelectedWork";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies in pricing transformation, collections recovery, organizational transformation, digital transformation, and growth strategy.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <SelectedWork headingLevel="h1" />;
}

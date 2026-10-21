import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CallForm from "@/components/booking/CallForm";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: "Tell Tola Oladiji what you need help with and enquire about a strategy call.",
  alternates: { canonical: "/book-a-call/strategy" },
};

export default function StrategyCallPage() {
  return (
    <Container className="max-w-3xl py-16 md:py-[80px]">
      <SectionHeading level="h1" title="Book a Strategy Call" description="Tell me what you need help with, and I’ll be in touch to arrange a call." />
      <CallForm kind="strategy" />
    </Container>
  );
}

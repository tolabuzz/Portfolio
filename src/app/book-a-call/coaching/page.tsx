import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CoachingCallForm from "@/components/booking/CoachingCallForm";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Book a Coaching Call",
  description: "Tell Tola Oladiji what you need help with and enquire about a coaching call.",
  alternates: { canonical: "/book-a-call/coaching" },
};

export default function CoachingCallPage() {
  return (
    <Container className="max-w-3xl py-16 md:py-[80px]">
      <SectionHeading level="h1" title="Get Coaching and Therapy Today!" description="Get support with anxiety, self-esteem, and relationship challenges." />
      <p className="mb-6 font-body text-body-lg text-on-surface-variant">Sign up for one cycle of integrative coaching and therapy.</p>
      <p className="mb-6 font-body text-body-md font-medium text-primary">Sessions are NOT free.</p>
      <div className="mb-12"><Button href="#coaching-form">Sign Up</Button></div>
      <CoachingCallForm />
    </Container>
  );
}

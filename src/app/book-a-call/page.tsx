import type { Metadata } from "next";
import BookACall from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Book a coaching call or enquire about a strategy call with Tola Oladiji.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return <BookACall />;
}

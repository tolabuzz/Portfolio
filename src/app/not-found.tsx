import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <p className="font-label text-label-caps uppercase tracking-widest text-secondary">
          404
        </p>
        <h1 className="mt-4 font-display text-display-lg-mobile text-primary md:text-display-lg">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-body-lg text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-label text-label-caps uppercase text-on-primary shadow-sm transition-colors hover:bg-primary-container"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}

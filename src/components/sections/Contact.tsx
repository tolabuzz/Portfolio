import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-[80px]">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl font-display text-display-lg-mobile text-primary md:text-display-lg">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-body-lg text-on-surface-variant">
          Open to conversations about strategy, transformation, and executive
          operations roles or engagements. The fastest way to reach me is
          email.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${site.email}`} variant="primary">
            {site.email}
          </Button>
          <Button href={site.linkedin} variant="secondary" external>
            Connect on LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}

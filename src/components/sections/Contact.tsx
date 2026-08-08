import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

const icons = {
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
  ),
  instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  ),
  twitter: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
};

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: keyof typeof icons;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/40 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {icons[icon]}
      </svg>
    </a>
  );
}

export default function Contact({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="py-16 md:py-[80px]">
      <Container className="text-center">
        <Heading className="mx-auto max-w-2xl font-display text-display-lg-mobile text-primary md:text-display-lg">
          Connect With Me
        </Heading>
        <p className="mx-auto mt-6 max-w-xl font-body text-body-lg text-on-surface-variant">
          Open to conversations about strategy, transformation, and
          operations roles or engagements. The fastest way to reach me is
          email.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`mailto:${site.email}`} variant="primary">
            Email Me
          </Button>
          <Button href={site.linkedin} variant="secondary" external>
            Connect on LinkedIn
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <SocialIcon href={site.linkedin} label="LinkedIn" icon="linkedin" />
          <SocialIcon href={site.instagram} label="Instagram" icon="instagram" />
          <SocialIcon href={site.twitter} label="X (Twitter)" icon="twitter" />
        </div>
      </Container>
    </section>
  );
}

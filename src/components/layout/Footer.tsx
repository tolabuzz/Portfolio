import Container from "./Container";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low">
      <Container className="flex flex-col items-center gap-4 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="font-display text-headline-sm text-primary">
          {site.name}
        </div>

        <p className="font-body text-caption text-on-surface-variant">
          © {year} {site.name}. All rights reserved. Strategy &amp; Operations.
        </p>
      </Container>
    </footer>
  );
}

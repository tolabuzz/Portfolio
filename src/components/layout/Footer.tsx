import Container from "./Container";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low">
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="font-display text-headline-sm text-primary">
          {site.name}
        </div>

        <p className="text-center font-body text-caption text-on-surface-variant md:text-left">
          © {year} {site.name}. All rights reserved. Strategy &amp; Executive
          Operations.
        </p>

        <ul className="flex gap-6 font-label text-label-caps uppercase tracking-widest">
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-primary-container"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-primary transition-colors hover:text-primary-container"
            >
              Email
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

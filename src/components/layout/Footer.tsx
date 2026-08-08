import Container from "./Container";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low">
      <Container className="py-10 text-center">
        <p className="font-body text-caption text-on-surface-variant">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-background/90 backdrop-blur-sm transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <Container as="nav" className="relative flex items-center justify-between gap-4 py-5 md:py-6">
        <button
          type="button"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-primary md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <Link
          href="/"
          className="mx-auto shrink-0 whitespace-nowrap font-display text-headline-sm text-primary transition-opacity hover:opacity-80 md:mx-0 lg:text-headline-md"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-4 font-label text-label-caps uppercase tracking-widest md:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            const linkClassName = cn(
              "border-b-2 pb-1 transition-colors",
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-on-surface-variant hover:text-primary"
            );
            return (
              <li key={link.href}>
                {"zone" in link && link.zone ? (
                  <a href={link.href} className={linkClassName}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 md:block">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-primary px-5 py-3 font-label text-label-caps uppercase text-on-primary shadow-sm transition-colors hover:bg-primary-container lg:px-6"
          >
            Contact
          </Link>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-outline-variant/30 bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const mobileClassName = cn(
                "rounded-md px-2 py-3 font-label text-label-caps uppercase tracking-widest transition-colors hover:bg-surface-container-low hover:text-primary",
                isActiveLink(link.href) ? "text-primary" : "text-on-surface-variant"
              );
              return "zone" in link && link.zone ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={mobileClassName}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={mobileClassName}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center font-label text-label-caps uppercase text-on-primary"
            >
              Contact
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

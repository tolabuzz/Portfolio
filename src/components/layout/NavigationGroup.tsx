"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export default function NavigationGroup({
  label,
  links,
  mobile = false,
  onNavigate,
}: {
  label: string;
  links: readonly { label: string; href: string }[];
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const groupActive = links.some((link) => isActive(link.href));

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!detailsRef.current?.contains(event.target as Node)) {
        detailsRef.current?.removeAttribute("open");
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        const hadFocus = detailsRef.current.contains(document.activeElement);
        detailsRef.current.removeAttribute("open");
        if (hadFocus) summaryRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      className="group relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.removeAttribute("open");
        }
      }}
    >
      <summary
        ref={summaryRef}
        className={cn(
          "flex cursor-pointer list-none items-center gap-2 font-label text-label-caps uppercase tracking-widest transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden",
          mobile ? "rounded-md px-2 py-3" : "border-b-2 pb-1",
          groupActive
            ? "border-primary text-primary"
            : "border-transparent text-on-surface-variant"
        )}
      >
        {label}
        <svg className="h-3 w-3 transition-transform group-open:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="m2 4 4 4 4-4" />
        </svg>
      </summary>
      <ul
        className={cn(
          "font-label text-label-caps uppercase tracking-widest",
          mobile
            ? "ml-4 border-l border-outline-variant/30 pl-3"
            : "absolute left-0 top-full z-50 mt-3 min-w-48 rounded-lg border border-outline-variant/30 bg-background p-2 shadow-lg"
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "block rounded-md px-3 py-3 transition-colors hover:bg-surface-container-low hover:text-primary focus-visible:outline-2 focus-visible:outline-primary",
                isActive(link.href) ? "text-primary" : "text-on-surface-variant"
              )}
              onClick={() => {
                detailsRef.current?.removeAttribute("open");
                onNavigate?.();
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

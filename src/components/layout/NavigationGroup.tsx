"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export default function NavigationGroup({
  label,
  links,
  href,
  mobile = false,
  onNavigate,
}: {
  label: string;
  href: string;
  links: readonly { label: string; href: string }[];
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const submenuId = useId();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const groupActive = isActive(href) || links.some((link) => isActive(link.href));

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  function navigate() {
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className={cn("flex items-center", mobile ? "justify-between" : "gap-1")}>
        <Link
          href={href}
          onClick={navigate}
          aria-current={pathname === href ? "page" : undefined}
          className={cn(
            "font-label text-label-caps uppercase tracking-widest transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
            mobile ? "flex-1 rounded-md px-2 py-3" : "border-b-2 pb-1",
            groupActive ? "border-primary text-primary" : "border-transparent text-on-surface-variant"
          )}
        >
          {label}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-label={`${open ? "Close" : "Open"} ${label} submenu`}
          aria-expanded={open}
          aria-controls={submenuId}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-primary hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-primary"
        >
          <svg className={cn("h-4 w-4 transition-transform", open && "rotate-180")} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m2 4 4 4 4-4" />
          </svg>
        </button>
      </div>
      <ul
        id={submenuId}
        hidden={!open}
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
              onClick={navigate}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

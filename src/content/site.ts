export const site = {
  name: "Tola Oladiji",
  title: "Tola Oladiji | Strategy, Transformation & Operations",
  description:
    "Tola Oladiji is a Strategy, Transformation, and Operations professional who partners with executive teams to turn complex organizational challenges into measurable, sustainable outcomes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tolaoladiji.xyz",
  ogImage: "/images/tola-oladiji-portrait.jpg",
  email: "tolaoladiji@outlook.com",
  linkedin: "https://www.linkedin.com/in/tolaoladiji",
  instagram: "https://www.instagram.com/tolaoladiji",
  twitter: "https://x.com/tolaoladiji",
  roles: ["Strategy", "Transformation", "Operations"],
  positioningStatement:
    "I partner with executive teams to turn complex organizational challenges into clear strategy, disciplined execution, and measurable results — across consulting, technology, and healthcare.",
  heroPhoto: {
    src: "/images/tola-oladiji-portrait.jpg",
    alt: "Portrait of Tola Oladiji",
    credit: "Ifedayo.x",
  },
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Insights", href: "/insights" },
  // Zone boundary: this path is proxied via next.config.ts's rewrites() to a
  // separate Next.js app, so it's rendered as a plain <a> (see Header.tsx)
  // rather than next/link — crossing zones needs a full page load, not a
  // client-side soft navigation.
  { label: "Strategy Toolkit", href: "/strategy-toolkit", zone: true },
] as const;

export const socialLinks = {
  linkedin: site.linkedin,
  instagram: site.instagram,
  twitter: site.twitter,
  email: `mailto:${site.email}`,
} as const;

export const site = {
  name: "Tola Oladiji",
  title: "Tola Oladiji | Strategy, Transformation & Executive Operations",
  description:
    "Tola Oladiji is a Strategy, Transformation, and Executive Operations professional who partners with executive teams to turn complex organizational challenges into measurable, sustainable outcomes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tolaoladiji.vercel.app",
  ogImage: "/images/tola-oladiji-portrait.jpg",
  email: "tolaoladiji@outlook.com",
  linkedin: "https://www.linkedin.com/in/tolaoladiji",
  roles: ["Strategy", "Transformation", "Executive Operations"],
  positioningStatement:
    "I partner with executive teams to turn complex organizational challenges into clear strategy, disciplined execution, and measurable results — across consulting, technology, and healthcare.",
  heroPhoto: {
    src: "/images/tola-oladiji-portrait.jpg",
    alt: "Portrait of Tola Oladiji",
    credit: "Ifedayo.x",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Insights", href: "#insights" },
] as const;

export const socialLinks = {
  linkedin: site.linkedin,
  email: `mailto:${site.email}`,
} as const;

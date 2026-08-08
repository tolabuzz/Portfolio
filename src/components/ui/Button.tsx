import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-label text-label-caps uppercase transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-primary text-on-primary shadow-sm hover:bg-primary-container",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary/5 py-[14px]",
  text: "text-primary underline underline-offset-4 hover:text-primary-container px-0 py-0",
};

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  external,
}: ButtonAsLink) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

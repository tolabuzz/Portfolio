import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-label text-label-caps uppercase tracking-widest text-secondary">
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-display-lg-mobile text-primary md:text-display-lg">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 font-body text-body-lg text-on-surface-variant",
            align === "left" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

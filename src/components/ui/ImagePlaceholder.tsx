import { cn } from "@/lib/cn";

const icons = {
  diagram: (
    <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />
  ),
  framework: (
    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" strokeLinejoin="round" />
  ),
  screenshot: (
    <path
      d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5zM3 9h18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  chart: (
    <path d="M5 19V9M12 19V5M19 19v-7" strokeLinecap="round" />
  ),
  photo: (
    <>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
      <path d="m4 17 4.5-5 3.5 3.5 3-3.5L20 17" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="9" r="1.5" />
    </>
  ),
};

export default function ImagePlaceholder({
  label,
  kind = "photo",
  className,
  aspect = "aspect-video",
}: {
  label: string;
  kind?: keyof typeof icons;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-blob border border-dashed border-outline-variant bg-surface-container-low p-8 text-center",
        aspect,
        className
      )}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <svg
        className="h-8 w-8 text-outline"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        {icons[kind]}
      </svg>
      <p className="font-label text-label-caps uppercase tracking-widest text-on-surface-variant">
        {label}
      </p>
      <p className="font-body text-caption text-outline">Coming soon</p>
    </div>
  );
}

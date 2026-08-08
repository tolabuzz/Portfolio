import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-margin-mobile lg:px-margin-desktop",
        className
      )}
    >
      {children}
    </Tag>
  );
}

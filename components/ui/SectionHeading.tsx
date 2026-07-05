import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-deep">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-3xl font-medium leading-[1.15] text-ink md:text-4xl lg:text-[2.75rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}

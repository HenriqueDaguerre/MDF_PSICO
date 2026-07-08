import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const EYEBROW_TONES = {
  olive: "bg-olive/15 text-olive-deep",
  caramel: "bg-earth/20 text-earth",
  purple: "bg-ink/10 text-ink",
  lime: "bg-lime/45 text-olive-deep",
} as const;

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowTone?: keyof typeof EYEBROW_TONES;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = "olive",
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
        <span
          className={cn(
            "mb-4 inline-block rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em]",
            EYEBROW_TONES[eyebrowTone]
          )}
        >
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

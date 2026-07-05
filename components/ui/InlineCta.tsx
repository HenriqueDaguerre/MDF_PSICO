import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface InlineCtaProps {
  text: string;
  ctaLabel?: string;
  className?: string;
}

export function InlineCta({
  text,
  ctaLabel = "Agendar uma conversa",
  className,
}: InlineCtaProps) {
  return (
    <RevealOnScroll
      className={cn(
        "mx-auto mt-20 max-w-lg border-t border-border pt-12 text-center md:mt-24",
        className
      )}
    >
      <p className="text-pretty font-display text-xl italic leading-relaxed text-ink-soft md:text-2xl">
        {text}
      </p>
      <Button asChild size="md" variant="primary" className="mt-7">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          {ctaLabel}
        </a>
      </Button>
    </RevealOnScroll>
  );
}

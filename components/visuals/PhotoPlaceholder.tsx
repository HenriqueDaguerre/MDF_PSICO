import { Aperture } from "lucide-react";
import { cn } from "@/lib/utils";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";

interface PhotoPlaceholderProps {
  label: string;
  caption?: string;
  className?: string;
  tone?: "olive" | "earth" | "moss";
}

/**
 * Área reservada, elegante e claramente demarcada, para uma fotografia real
 * que será adicionada futuramente (retrato, ambiente do consultório etc.).
 * Nunca deve parecer uma imagem quebrada.
 */
export function PhotoPlaceholder({
  label,
  caption,
  className,
  tone = "olive",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-border/80 bg-gradient-to-br from-canvas-soft via-canvas to-canvas-deep",
        className
      )}
    >
      <OrganicBlob
        tone={tone}
        className="-left-10 -top-10 h-64 w-64"
      />
      <OrganicBlob
        tone="gold"
        animate={false}
        className="-bottom-16 -right-8 h-56 w-56"
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
        <Aperture
          className="h-6 w-6 text-muted"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <p className="max-w-[22ch] font-display text-base italic text-ink-soft">
          {label}
        </p>
        {caption ? (
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

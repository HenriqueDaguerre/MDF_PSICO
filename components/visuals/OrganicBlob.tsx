import { cn } from "@/lib/utils";

const TONES = {
  olive: ["#7c8560", "#5c6446"],
  earth: ["#a9895f", "#8a6c46"],
  gold: ["#e4d3a4", "#c6a664"],
  moss: ["#6b7a5a", "#454f3a"],
} as const;

interface OrganicBlobProps {
  className?: string;
  tone?: keyof typeof TONES;
  animate?: boolean;
}

/**
 * Forma orgânica desfocada usada como textura de fundo — substitui
 * fotografia por composição vetorial no espírito Aesop/Calm.
 */
export function OrganicBlob({
  className,
  tone = "olive",
  animate = true,
}: OrganicBlobProps) {
  const [from, to] = TONES[tone];
  const id = `blob-${tone}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={cn(
        "pointer-events-none absolute opacity-[0.16] blur-2xl",
        animate && "animate-drift",
        className
      )}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M45.4,-58.4C58.5,-49.7,68.4,-35.1,72.6,-18.9C76.8,-2.7,75.3,15.1,67.5,29.6C59.7,44.1,45.5,55.3,29.9,62.2C14.3,69.1,-2.7,71.7,-19.4,68.4C-36.1,65.1,-52.5,55.9,-62.6,42C-72.7,28.1,-76.5,9.5,-73.9,-7.7C-71.3,-24.9,-62.3,-40.7,-49.4,-49.6C-36.5,-58.5,-19.7,-60.5,-1.8,-57.9C16.1,-55.3,32.3,-67.1,45.4,-58.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

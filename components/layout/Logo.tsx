import { cn } from "@/lib/utils";

/**
 * Marca minimalista: um ponto de luz sobre uma linha que se ramifica —
 * síntese abstrata de luz + árvore, sem recorrer a clichês figurativos.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="8" r="3.2" fill="currentColor" opacity="0.9" />
      <path
        d="M16 12.5V21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 21C16 21 10.5 21.5 8 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M16 21C16 21 21.5 21.5 24 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M16 17C16 17 12.5 17.3 11 20.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M16 17C16 17 19.5 17.3 21 20.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

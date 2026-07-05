import { cn } from "@/lib/utils";

interface TreeSilhouetteProps {
  className?: string;
  variant?: "canopy" | "roots";
}

/**
 * Ilustração vetorial abstrata e minimalista de galhos/raízes — linha fina,
 * nunca ilustração literal ou infantil. Usada como elemento de transição
 * entre seções e como metáfora discreta de crescimento.
 */
export function TreeSilhouette({
  className,
  variant = "canopy",
}: TreeSilhouetteProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 260"
      fill="none"
      className={cn(
        "pointer-events-none",
        variant === "roots" && "-scale-y-100",
        className
      )}
    >
      <path
        d="M200 260 C200 205 192 178 172 158 C152 138 122 128 88 108"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M200 260 C200 200 208 170 232 150 C256 130 282 122 314 96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M172 158 C160 150 146 146 128 148"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M172 158 C168 144 168 130 178 114"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M232 150 C246 144 258 144 272 152"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M232 150 C230 134 234 120 248 106"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M200 260 C199 224 199 196 200 168"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

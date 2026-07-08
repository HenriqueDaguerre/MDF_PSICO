import { cn } from "@/lib/utils";

interface LightRaysProps {
  className?: string;
  tone?: "gold" | "moss";
  intensity?: "soft" | "strong";
}

/**
 * Feixes de luz gerados via gradiente cônico + blur — substitui fotografia
 * de "raios atravessando árvores" por uma composição inteiramente vetorial.
 */
export function LightRays({
  className,
  tone = "gold",
  intensity = "soft",
}: LightRaysProps) {
  const color = tone === "gold" ? "var(--color-gold-soft)" : "var(--color-olive)";
  const alpha = intensity === "strong" ? "4d" : "2e";
  const alphaSoft = intensity === "strong" ? "33" : "1e";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute left-1/2 top-[-15%] h-[130%] w-[85%] -translate-x-1/2 animate-flicker"
        style={{
          background: `conic-gradient(from 205deg at 50% 0%, transparent 0deg, ${color}${alpha} 6deg, transparent 16deg, transparent 150deg, ${color}${alphaSoft} 164deg, transparent 178deg, transparent 360deg)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[70%] w-[45%] -translate-x-1/2 rounded-full animate-drift"
        style={{
          background: `radial-gradient(closest-side, ${color}${alphaSoft}, transparent 72%)`,
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}

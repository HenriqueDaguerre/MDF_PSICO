import { cn } from "@/lib/utils";

// Posições determinísticas (não Math.random) para evitar divergência SSR/CSR.
const PARTICLES = [
  { left: "8%", bottom: "10%", size: 3, delay: "0s", duration: "13s" },
  { left: "18%", bottom: "30%", size: 2, delay: "2.2s", duration: "16s" },
  { left: "27%", bottom: "5%", size: 4, delay: "4.1s", duration: "11s" },
  { left: "38%", bottom: "22%", size: 2, delay: "1.2s", duration: "15s" },
  { left: "49%", bottom: "8%", size: 3, delay: "6s", duration: "12s" },
  { left: "58%", bottom: "34%", size: 2, delay: "3.4s", duration: "17s" },
  { left: "68%", bottom: "14%", size: 3, delay: "0.6s", duration: "14s" },
  { left: "77%", bottom: "26%", size: 2, delay: "5.2s", duration: "13s" },
  { left: "86%", bottom: "6%", size: 4, delay: "2.8s", duration: "16s" },
  { left: "93%", bottom: "32%", size: 2, delay: "4.6s", duration: "12s" },
] as const;

interface LightParticlesProps {
  className?: string;
  count?: number;
}

/**
 * Poucas partículas de luz flutuando lentamente — usar com moderação
 * (hero e CTA final).
 */
export function LightParticles({ className, count = 10 }: LightParticlesProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {PARTICLES.slice(0, count).map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-rise"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, var(--color-gold-soft) 0%, transparent 75%)",
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

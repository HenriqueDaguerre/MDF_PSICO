import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { LightRays } from "@/components/visuals/LightRays";
import { LightParticles } from "@/components/visuals/LightParticles";
import { TreeSilhouette } from "@/components/visuals/TreeSilhouette";
import { HERO } from "@/content/site";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-canvas pt-24"
    >
      <LightRays tone="gold" intensity="soft" />
      <LightParticles count={8} className="opacity-70" />
      <TreeSilhouette
        variant="roots"
        className="absolute bottom-0 left-1/2 h-40 w-[520px] -translate-x-1/2 text-olive-deep/25 md:h-56 md:w-[720px]"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <RevealOnScroll delay={0.1}>
            <span className="mb-6 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-deep">
              {HERO.eyebrow}
            </span>
          </RevealOnScroll>

          <RevealText
            as="h1"
            text={HERO.headline}
            delay={0.2}
            className="text-balance font-display text-4xl font-medium leading-[1.12] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]"
          />

          <RevealOnScroll delay={1.1}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft md:text-xl">
              {HERO.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1.35}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" variant="primary">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  {HERO.ctaPrimary}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#sobre">{HERO.ctaSecondary}</a>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Container>

      <RevealOnScroll
        delay={1.8}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#escuridao"
          aria-label="Rolar para a próxima seção"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.2em]">
            Continuar
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
        </a>
      </RevealOnScroll>
    </section>
  );
}

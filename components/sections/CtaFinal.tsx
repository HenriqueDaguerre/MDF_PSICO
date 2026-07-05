import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { LightRays } from "@/components/visuals/LightRays";
import { LightParticles } from "@/components/visuals/LightParticles";
import { TreeSilhouette } from "@/components/visuals/TreeSilhouette";
import { CTA_FINAL } from "@/content/site";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-canvas-soft via-canvas to-[#f3e6c8] py-32 md:py-44">
      <LightRays tone="gold" intensity="strong" />
      <LightParticles count={10} />
      <TreeSilhouette
        variant="roots"
        className="absolute bottom-0 left-1/2 h-48 w-[640px] -translate-x-1/2 text-olive-deep/15 md:h-64 md:w-[860px]"
      />

      <Container className="relative text-center">
        <RevealOnScroll>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-medium leading-[1.12] text-ink md:text-5xl lg:text-6xl">
            {CTA_FINAL.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-pretty text-lg text-ink-soft">
            {CTA_FINAL.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4} className="mt-10">
          <Button asChild size="lg" variant="primary">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              {CTA_FINAL.cta}
            </a>
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

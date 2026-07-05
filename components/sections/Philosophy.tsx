import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { PHILOSOPHY } from "@/content/site";

export function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden bg-canvas-soft py-28 md:py-36"
    >
      <OrganicBlob tone="gold" className="left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2" />

      <Container className="relative mx-auto max-w-3xl text-center">
        <RevealOnScroll>
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-deep">
            {PHILOSOPHY.eyebrow}
          </span>
          <h2 className="text-balance font-display text-3xl font-medium leading-[1.15] text-ink md:text-4xl lg:text-[2.75rem]">
            {PHILOSOPHY.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll stagger delay={0.2} className="mt-14 space-y-7">
          {PHILOSOPHY.statements.map((s, i) => (
            <RevealItem key={i}>
              <p className="text-pretty font-display text-xl italic leading-relaxed text-ink-soft md:text-2xl">
                {s}
              </p>
            </RevealItem>
          ))}
        </RevealOnScroll>

        <RevealOnScroll delay={0.3} className="mx-auto mt-14 max-w-xl">
          <div className="mx-auto mb-7 h-px w-12 bg-gold/50" />
          <p className="text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
            {PHILOSOPHY.closing}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

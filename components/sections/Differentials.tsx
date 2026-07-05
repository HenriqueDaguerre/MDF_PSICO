import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { TreeSilhouette } from "@/components/visuals/TreeSilhouette";
import { DIFFERENTIALS_INTRO, DIFFERENTIALS } from "@/content/site";

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <TreeSilhouette
        variant="canopy"
        className="absolute left-1/2 top-0 h-[26rem] w-[34rem] -translate-x-1/2 text-olive/10"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={DIFFERENTIALS_INTRO.eyebrow}
          title={DIFFERENTIALS_INTRO.title}
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll
          stagger
          delay={0.15}
          className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-12 sm:grid-cols-2"
        >
          {DIFFERENTIALS.map((d, i) => (
            <RevealItem key={d.title} className="flex gap-5">
              <span className="font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">{d.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                  {d.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

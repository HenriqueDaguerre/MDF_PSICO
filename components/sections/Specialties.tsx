import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { SPECIALTIES_INTRO } from "@/content/site";
import { SPECIALTIES } from "@/content/specialties";

export function Specialties() {
  return (
    <section id="especialidades" className="relative bg-canvas py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow={SPECIALTIES_INTRO.eyebrow}
          title={SPECIALTIES_INTRO.title}
          description={SPECIALTIES_INTRO.description}
        />

        <RevealOnScroll
          stagger
          delay={0.15}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SPECIALTIES.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.title}>
                <div className="group h-full rounded-3xl border border-border bg-canvas-soft/60 p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/50 hover:bg-canvas-soft hover:shadow-[0_24px_60px_-32px_rgba(90,74,42,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-canvas-deep transition-colors duration-500 group-hover:bg-gold-soft/60">
                    <Icon
                      className="h-5 w-5 text-olive-deep"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
                    {s.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { InlineCta } from "@/components/ui/InlineCta";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { SPECIALTIES_INTRO, INLINE_CTAS } from "@/content/site";
import { SPECIALTIES } from "@/content/specialties";

const ICON_TONES = [
  "bg-olive/20 text-olive-deep",
  "bg-earth/25 text-earth",
  "bg-ink/12 text-ink",
  "bg-lime/50 text-olive-deep",
] as const;

export function Specialties() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-canvas-soft py-28 md:py-36">
      <OrganicBlob
        tone="olive"
        opacity="soft"
        className="left-[-10%] bottom-[-15%] h-96 w-96"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={SPECIALTIES_INTRO.eyebrow}
          eyebrowTone="caramel"
          title={SPECIALTIES_INTRO.title}
          description={SPECIALTIES_INTRO.description}
        />

        <RevealOnScroll
          stagger
          delay={0.15}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SPECIALTIES.map((s, i) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.title}>
                <div className="group h-full rounded-3xl border border-border bg-canvas p-8 shadow-[0_18px_40px_-28px_rgba(62,23,61,0.3)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_60px_-24px_rgba(62,23,61,0.4)]">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110",
                      ICON_TONES[i % ICON_TONES.length]
                    )}
                  >
                    <Icon
                      className="h-5 w-5"
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

        <InlineCta text={INLINE_CTAS.specialties} ctaLabel="Falar com a Mônica" />
      </Container>
    </section>
  );
}

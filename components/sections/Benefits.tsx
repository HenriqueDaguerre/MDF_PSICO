import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { BENEFITS_INTRO, BENEFITS } from "@/content/benefits";

const ICON_TONES = [
  "bg-lime/50 text-olive-deep",
  "bg-ink/12 text-ink",
  "bg-earth/25 text-earth",
  "bg-olive/20 text-olive-deep",
] as const;

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <OrganicBlob
        tone="gold"
        opacity="soft"
        className="right-[-8%] top-[-15%] h-80 w-80"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={BENEFITS_INTRO.eyebrow}
          eyebrowTone="lime"
          title={BENEFITS_INTRO.title}
          description={BENEFITS_INTRO.description}
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll
          stagger
          delay={0.15}
          className="mx-auto mt-16 grid max-w-4xl gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <RevealItem key={b.title} className="text-center">
                <div
                  className={cn(
                    "mx-auto flex h-12 w-12 items-center justify-center rounded-full",
                    ICON_TONES[i % ICON_TONES.length]
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                  {b.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

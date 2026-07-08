import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { TreeSilhouette } from "@/components/visuals/TreeSilhouette";
import { PhotoPlaceholder } from "@/components/visuals/PhotoPlaceholder";
import { DIFFERENTIALS_INTRO, DIFFERENTIALS } from "@/content/site";

const NUMBER_TONES = [
  "text-olive-deep",
  "text-earth",
  "text-ink",
  "text-olive",
  "text-earth",
  "text-ink",
] as const;

export function Differentials() {
  return (
    <section className="relative overflow-hidden bg-canvas-soft py-28 md:py-36">
      <TreeSilhouette
        variant="canopy"
        className="absolute left-1/2 top-0 h-[26rem] w-[34rem] -translate-x-1/2 text-olive/10"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={DIFFERENTIALS_INTRO.eyebrow}
          eyebrowTone="purple"
          title={DIFFERENTIALS_INTRO.title}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center lg:gap-16">
          <RevealOnScroll delay={0.1}>
            <PhotoPlaceholder
              label={DIFFERENTIALS_INTRO.photoLabel}
              caption={DIFFERENTIALS_INTRO.photoCaption}
              tone="earth"
              className="aspect-[4/5] w-full"
            />
          </RevealOnScroll>

          <RevealOnScroll
            stagger
            delay={0.2}
            className="grid gap-x-10 gap-y-10 sm:grid-cols-2"
          >
            {DIFFERENTIALS.map((d, i) => (
              <RevealItem key={d.title} className="flex gap-5">
                <span
                  className={cn(
                    "font-display text-2xl",
                    NUMBER_TONES[i % NUMBER_TONES.length]
                  )}
                >
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
        </div>
      </Container>
    </section>
  );
}

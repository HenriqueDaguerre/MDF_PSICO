import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { InlineCta } from "@/components/ui/InlineCta";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { PhotoPlaceholder } from "@/components/visuals/PhotoPlaceholder";
import { TreeSilhouette } from "@/components/visuals/TreeSilhouette";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { ABOUT, INLINE_CTAS } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-canvas-soft py-28 md:py-36">
      <OrganicBlob
        tone="olive"
        opacity="soft"
        className="left-[-10%] bottom-[-10%] h-96 w-96"
      />
      <TreeSilhouette
        variant="canopy"
        className="absolute -top-4 right-0 h-56 w-72 text-olive/20 md:h-72 md:w-96"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              eyebrowTone="olive"
              title={ABOUT.title}
              className="max-w-xl"
            />

            <RevealOnScroll stagger delay={0.15} className="mt-8 space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <RevealItem key={i}>
                  <p className="text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
                    {p}
                  </p>
                </RevealItem>
              ))}
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <PhotoPlaceholder
              label={ABOUT.photoLabel}
              caption={ABOUT.photoCaption}
              tone="earth"
              className="aspect-[4/5] w-full"
            />
          </RevealOnScroll>
        </div>

        <InlineCta text={INLINE_CTAS.about} />
      </Container>
    </section>
  );
}

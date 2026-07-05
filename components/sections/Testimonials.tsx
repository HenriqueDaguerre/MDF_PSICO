import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { TESTIMONIALS_INTRO } from "@/content/site";
import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="relative bg-canvas-soft py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow={TESTIMONIALS_INTRO.eyebrow}
          title={TESTIMONIALS_INTRO.title}
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll
          stagger
          delay={0.15}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <RevealItem key={i}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-canvas p-8">
                <Quote
                  className="h-6 w-6 text-gold"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1 text-pretty font-display text-lg italic leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.14em] text-muted">
                  {t.context}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

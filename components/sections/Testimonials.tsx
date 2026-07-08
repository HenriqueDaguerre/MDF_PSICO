import { Quote, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { TESTIMONIALS_INTRO } from "@/content/site";
import { TESTIMONIALS } from "@/content/testimonials";

const AVATAR_TONES = [
  "bg-olive/20 text-olive-deep",
  "bg-earth/25 text-earth",
  "bg-ink/12 text-ink",
] as const;

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <OrganicBlob
        tone="earth"
        opacity="soft"
        className="right-[-10%] top-[-10%] h-96 w-96"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={TESTIMONIALS_INTRO.eyebrow}
          eyebrowTone="lime"
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
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-canvas-soft p-8 shadow-[0_18px_40px_-28px_rgba(62,23,61,0.3)]">
                <Quote
                  className="h-6 w-6 text-gold"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1 text-pretty font-display text-lg italic leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    )}
                    aria-hidden="true"
                  >
                    <UserRound className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted">
                    {t.context}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealOnScroll>
      </Container>
    </section>
  );
}

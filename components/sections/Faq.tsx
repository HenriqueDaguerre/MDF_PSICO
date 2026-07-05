import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { FAQ_INTRO, INLINE_CTAS } from "@/content/site";
import { FAQ_ITEMS } from "@/content/faq";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="relative bg-canvas py-28 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <RevealOnScroll className="lg:sticky lg:top-32 lg:self-start">
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-deep">
            {FAQ_INTRO.eyebrow}
          </span>
          <h2 className="text-balance font-display text-3xl font-medium leading-[1.15] text-ink md:text-4xl">
            {FAQ_INTRO.title}
          </h2>

          <p className="mt-6 text-pretty text-base leading-relaxed text-ink-soft">
            {INLINE_CTAS.faq.text}
          </p>
          <Button asChild size="md" variant="ghost" className="mt-5">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              {INLINE_CTAS.faq.ctaLabel}
            </a>
          </Button>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

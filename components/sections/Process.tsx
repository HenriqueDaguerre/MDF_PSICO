import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { InlineCta } from "@/components/ui/InlineCta";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PROCESS_INTRO, INLINE_CTAS } from "@/content/site";
import { PROCESS_STEPS, type ProcessStep } from "@/content/process";

export function Process() {
  return (
    <section id="processo" className="relative bg-canvas-soft py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow={PROCESS_INTRO.eyebrow}
          title={PROCESS_INTRO.title}
          description={PROCESS_INTRO.description}
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <RevealOnScroll
              variant="lineGrow"
              className="h-full w-px origin-top bg-gradient-to-b from-gold via-olive-deep to-transparent"
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {PROCESS_STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={step.number}
                  className="relative grid grid-cols-[2rem_1fr] items-center gap-6 md:grid-cols-[1fr_2rem_1fr] md:gap-10"
                >
                  <RevealOnScroll className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-canvas font-display text-xs text-olive-deep md:col-start-2 md:row-start-1">
                    {step.number}
                  </RevealOnScroll>

                  <StepCard
                    step={step}
                    align={isEven ? "right" : "left"}
                    className={cn(
                      "md:row-start-1",
                      isEven ? "md:col-start-1" : "md:col-start-3"
                    )}
                  />
                </li>
              );
            })}
          </ol>
        </div>

        <InlineCta text={INLINE_CTAS.process} />
      </Container>
    </section>
  );
}

function StepCard({
  step,
  align,
  className,
}: {
  step: ProcessStep;
  align: "left" | "right";
  className?: string;
}) {
  return (
    <RevealOnScroll className={cn(align === "right" && "md:text-right", className)}>
      <h3 className="font-display text-xl text-ink md:text-2xl">
        {step.title}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft md:text-base">
        {step.description}
      </p>
    </RevealOnScroll>
  );
}

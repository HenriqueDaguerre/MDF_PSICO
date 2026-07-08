import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { InlineCta } from "@/components/ui/InlineCta";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { PROCESS_INTRO, INLINE_CTAS } from "@/content/site";
import { PROCESS_STEPS, type ProcessStep } from "@/content/process";

const NODE_TONES = [
  "bg-olive text-canvas",
  "bg-earth text-canvas",
  "bg-ink text-canvas",
  "bg-lime text-ink",
  "bg-olive-deep text-canvas",
] as const;

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-canvas py-28 md:py-36">
      <OrganicBlob
        tone="earth"
        opacity="soft"
        className="left-1/2 top-[-10%] h-[28rem] w-[28rem] -translate-x-1/2"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow={PROCESS_INTRO.eyebrow}
          eyebrowTone="olive"
          title={PROCESS_INTRO.title}
          description={PROCESS_INTRO.description}
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <RevealOnScroll
              variant="lineGrow"
              className="h-full w-px origin-top bg-gradient-to-b from-olive via-ink to-transparent"
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
                  <RevealOnScroll
                    className={cn(
                      "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-xs shadow-[0_8px_20px_-8px_rgba(62,23,61,0.45)] md:col-start-2 md:row-start-1",
                      NODE_TONES[i % NODE_TONES.length]
                    )}
                  >
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

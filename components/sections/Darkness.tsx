import { Container } from "@/components/ui/Container";
import { RevealOnScroll, RevealItem } from "@/components/ui/RevealOnScroll";
import { LightRays } from "@/components/visuals/LightRays";
import { OrganicBlob } from "@/components/visuals/OrganicBlob";
import { DARKNESS } from "@/content/site";

export function Darkness() {
  return (
    <section
      id="escuridao"
      className="relative overflow-hidden bg-[#26101f] py-28 md:py-36"
    >
      <OrganicBlob tone="moss" className="left-[-10%] top-[-10%] h-96 w-96" />
      <OrganicBlob
        tone="earth"
        animate={false}
        className="bottom-[-15%] right-[-5%] h-80 w-80"
      />

      <Container className="relative">
        <RevealOnScroll stagger className="mx-auto max-w-2xl text-center">
          {DARKNESS.lines.map((line, i) => (
            <RevealItem key={i}>
              <p className="text-pretty font-display text-xl italic leading-relaxed text-canvas/80 md:text-2xl">
                {line}
              </p>
              {i < DARKNESS.lines.length - 1 ? (
                <div className="mx-auto my-5 h-px w-10 bg-canvas/20" />
              ) : null}
            </RevealItem>
          ))}
        </RevealOnScroll>

        <RevealOnScroll delay={0.3} className="mt-14 text-center">
          <p className="font-display text-2xl font-medium text-canvas md:text-3xl">
            {DARKNESS.closing}
          </p>
        </RevealOnScroll>
      </Container>

      <LightRays
        tone="gold"
        intensity="soft"
        className="opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black)]"
      />

      <RevealOnScroll delay={0.15} className="relative mt-6 text-center">
        <p className="mx-auto max-w-md text-pretty text-sm uppercase tracking-[0.14em] text-gold-soft">
          {DARKNESS.bridge}
        </p>
      </RevealOnScroll>
    </section>
  );
}

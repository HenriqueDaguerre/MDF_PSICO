import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Darkness } from "@/components/sections/Darkness";
import { About } from "@/components/sections/About";
import { Philosophy } from "@/components/sections/Philosophy";
import { Specialties } from "@/components/sections/Specialties";
import { Process } from "@/components/sections/Process";
import { Differentials } from "@/components/sections/Differentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Darkness />
        <About />
        <Philosophy />
        <Specialties />
        <Process />
        <Differentials />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

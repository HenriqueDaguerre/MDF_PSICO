"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS } from "@/content/site";
import { WHATSAPP_LINK } from "@/lib/constants";
import { EASE_ORGANIC } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-border/70 bg-canvas/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-ink transition-opacity hover:opacity-70"
          >
            <Logo className="text-olive-deep" />
            <span className="font-display text-lg tracking-tight">
              Mônica Daguerre
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="md" variant="primary">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar uma conversa
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_ORGANIC }}
            className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-b border-border/70 bg-canvas backdrop-blur-md lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-ink-soft transition-colors hover:bg-canvas-soft hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="md" variant="primary" className="mt-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar uma conversa
                </a>
              </Button>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

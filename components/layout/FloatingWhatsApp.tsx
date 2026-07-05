"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { EASE_ORGANIC } from "@/lib/motion";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 700);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar uma conversa pelo WhatsApp"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.5, ease: EASE_ORGANIC }}
          whileHover={{ scale: 1.06 }}
          className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-canvas shadow-[0_16px_40px_-12px_rgba(43,38,32,0.45)] transition-colors duration-300 hover:bg-olive-deep md:bottom-8 md:right-8"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs text-canvas opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Agendar uma conversa
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}

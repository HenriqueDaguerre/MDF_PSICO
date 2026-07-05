"use client";

import { motion } from "framer-motion";
import { EASE_ORGANIC } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p";
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
};

const word = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_ORGANIC },
  },
};

/**
 * Reveal palavra-a-palavra para headlines emocionais — usar com moderação
 * (hero e CTA final).
 */
export function RevealText({
  text,
  className,
  delay = 0,
  as = "h1",
}: RevealTextProps) {
  const Comp = motion[as];
  const words = text.split(" ");

  return (
    <Comp
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="show"
      custom={delay}
      variants={container}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="mr-[0.28em] inline-block will-change-transform"
        >
          {w}
        </motion.span>
      ))}
    </Comp>
  );
}

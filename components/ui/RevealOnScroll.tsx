"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, lineGrow, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const VARIANTS = { fadeUp, fadeIn, scaleIn, lineGrow };

type VariantName = keyof typeof VARIANTS;

interface RevealOnScrollProps {
  children?: React.ReactNode;
  className?: string;
  variant?: VariantName;
  delay?: number;
  stagger?: boolean;
}

// Nota: as animações recebem apenas um nome de variant (string), nunca o
// objeto de variants em si — passar funções como props de Server para
// Client Component quebra a serialização do React Server Components.
export function RevealOnScroll({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  stagger = false,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger ? staggerContainer(0.14, delay) : VARIANTS[variant]}
      custom={stagger ? undefined : delay}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "fadeUp",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: VariantName;
}) {
  return (
    <motion.div className={cn(className)} variants={VARIANTS[variant]}>
      {children}
    </motion.div>
  );
}

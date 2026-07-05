import type { Variants } from "framer-motion";

export const EASE_ORGANIC = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_ORGANIC, delay },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.4, ease: EASE_ORGANIC, delay },
  }),
};

export const staggerContainer = (
  stagger = 0.14,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: EASE_ORGANIC, delay },
  }),
};

export const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  show: (delay = 0) => ({
    scaleY: 1,
    transition: { duration: 1.6, ease: EASE_ORGANIC, delay },
  }),
};

export const viewportOnce = { once: true, margin: "-15% 0px -15% 0px" };

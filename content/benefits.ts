import type { LucideIcon } from "lucide-react";
import { Sun, Eye, HeartHandshake, Layers } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS_INTRO = {
  eyebrow: "O que a terapia proporciona",
  title: "O que muda quando você decide começar.",
  description:
    "Os efeitos de um processo terapêutico raramente aparecem de uma vez — eles se acumulam, sessão após sessão.",
};

export const BENEFITS: Benefit[] = [
  {
    icon: Sun,
    title: "Clareza emocional",
    description:
      "Entender o que sente, e por quê, em vez de apenas reagir ao que sente.",
  },
  {
    icon: Eye,
    title: "Autoconhecimento",
    description:
      "Reconhecer padrões próprios de pensamento e comportamento com mais lucidez.",
  },
  {
    icon: HeartHandshake,
    title: "Apoio psicológico",
    description:
      "Um espaço constante para atravessar decisões, crises e transições sem estar sozinho.",
  },
  {
    icon: Layers,
    title: "Organização interna",
    description:
      "Menos ruído mental, mais critério para escolher o que fazer com o que sente.",
  },
];

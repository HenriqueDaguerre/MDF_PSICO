import type { LucideIcon } from "lucide-react";
import { Wind, CloudFog, Compass, Feather, Users, Sprout } from "lucide-react";

export interface Specialty {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    icon: Wind,
    title: "Ansiedade",
    description:
      "Compreender o que dispara a inquietação constante e encontrar recursos reais para atravessá-la.",
  },
  {
    icon: CloudFog,
    title: "Depressão",
    description:
      "Um espaço sem julgamentos para nomear o peso, entender sua origem e reencontrar sentido, aos poucos.",
  },
  {
    icon: Feather,
    title: "Luto",
    description:
      "Elaborar perdas — de pessoas, vínculos ou fases da vida — respeitando o tempo de cada despedida.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description:
      "Olhar para padrões afetivos, familiares e de casal que se repetem, e construir formas mais saudáveis de se relacionar.",
  },
  {
    icon: Compass,
    title: "Autoconhecimento",
    description:
      "Entender com clareza quem você é hoje — e o que, na sua história, ainda pede compreensão.",
  },
  {
    icon: Sprout,
    title: "Desenvolvimento pessoal",
    description:
      "Fortalecer recursos internos para atravessar transições, decisões e novos ciclos com mais segurança.",
  },
];

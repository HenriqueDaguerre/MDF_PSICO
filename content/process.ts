export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "Uma conversa breve, sem compromisso, para entender o que te trouxe até aqui e esclarecer como funciona o atendimento.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    description:
      "O momento de contar sua história com calma — sem roteiros, sem pressa para chegar a lugar nenhum.",
  },
  {
    number: "03",
    title: "Construção do vínculo",
    description:
      "A confiança se constrói sessão após sessão. É nela que a terapia realmente começa a acontecer.",
  },
  {
    number: "04",
    title: "Processo terapêutico",
    description:
      "Um espaço contínuo para compreender padrões, sentimentos e escolhas — com ciência guiando cada passo.",
  },
  {
    number: "05",
    title: "Evolução",
    description:
      "Clareza que se transforma em novos caminhos, decisões mais conscientes e uma relação mais serena consigo mesmo.",
  },
];

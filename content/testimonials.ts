export interface Testimonial {
  quote: string;
  context: string;
}

/**
 * Placeholders sofisticados — substituir por depoimentos reais, com
 * autorização explícita de cada paciente, antes da publicação.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Este espaço está reservado para a história de quem, em breve, encontrará aqui as próprias palavras.",
    context: "Depoimento a ser adicionado",
  },
  {
    quote:
      "Cada processo terapêutico constrói uma história própria — e a sua também terá espaço aqui.",
    context: "Depoimento a ser adicionado",
  },
  {
    quote:
      "Em breve, quem caminhou por este processo poderá contar, com as próprias palavras, o que mudou.",
    context: "Depoimento a ser adicionado",
  },
];

export interface ProcessStep {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
}

export const processSteps: ProcessStep[] = [
  {
    id: "conversation",
    title: "Conversación",
    titleEn: "Conversation",
    description:
      "Me cuentas qué necesitas, para quién es y qué quieres lograr. Con eso evalúo si puedo ayudarte.",
    descriptionEn:
      "You tell me what you need, who it is for and what you want to achieve. From that I assess whether I can help.",
  },
  {
    id: "proposal",
    title: "Propuesta",
    titleEn: "Proposal",
    description:
      "Recibes el alcance, las tecnologías y los tiempos estimados antes de empezar, para decidir con todo claro.",
    descriptionEn:
      "You receive the scope, the technologies and the estimated timeline before we start, so you can decide with full clarity.",
  },
  {
    id: "development",
    title: "Desarrollo",
    titleEn: "Development",
    description:
      "Construyo por etapas y te muestro el avance, para que puedas corregir el rumbo a tiempo.",
    descriptionEn:
      "I build in stages and show you the progress, so you can correct course early.",
  },
  {
    id: "delivery",
    title: "Entrega",
    titleEn: "Delivery",
    description:
      "Te entrego el proyecto funcionando y el código explicado para que puedas mantenerlo o seguir ampliándolo.",
    descriptionEn:
      "I hand over the working project and the explained code so you can maintain it or keep extending it.",
  },
]

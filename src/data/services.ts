export interface Service {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  stack: string[]
}

export const services: Service[] = [
  {
    id: "react-apps",
    title: "Aplicaciones web y dashboards a medida",
    titleEn: "Custom web applications and dashboards",
    description:
      "Aplicaciones web a medida para gestionar catálogos, pedidos, datos o procesos internos, conectadas a tus APIs y fáciles de seguir ampliando.",
    descriptionEn:
      "Custom web applications to manage catalogs, orders, data or internal processes, connected to your APIs and easy to keep extending.",
    stack: ["React", "TypeScript", "Zustand", "REST APIs"],
  },
  {
    id: "refactor",
    title: "Mejora y optimización de apps existentes",
    titleEn: "Improvement and optimization of existing apps",
    description:
      "Ordeno el código con arquitectura modular y TypeScript y mejoro el rendimiento para que tu app cargue y responda mejor, sin reescribirla desde cero.",
    descriptionEn:
      "I tidy up the code with a modular architecture and TypeScript and improve performance so your app loads and responds better, without rewriting it from scratch.",
    stack: ["TypeScript", "React", "React Native", "Zustand"],
  },
  {
    id: "next-sites",
    title: "Sitios web y landing pages",
    titleEn: "Websites and landing pages",
    description:
      "Un sitio rápido, que se ve bien en celular y en computadora, pensado para presentar tu negocio y que te contacten. Lo entrego con una base ordenada para añadir secciones más adelante.",
    descriptionEn:
      "A fast site that looks good on mobile and desktop, built to present your business and get people to contact you. Delivered with a tidy codebase so sections can be added later.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

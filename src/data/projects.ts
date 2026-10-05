export interface Project {
  id: string
  title: string
  description: string
  descriptionEn?: string
  stack: string[]
  featured: boolean
  demo?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "nozen",
    title: "Nozen",
    description:
      "Para quien pierde el foco entre tareas dispersas: organiza el día y sus prioridades en un solo lugar.",
    descriptionEn:
      "For those who lose focus between scattered tasks: organizes the day and its priorities in one place.",
    stack: ["React", "State Management"],
    featured: true,
    demo: "https://nozen-coral.vercel.app/",
    github: "https://github.com/minn09/nozen",
  },
  {
    id: "subscription-manager",
    title: "Subscription Manager",
    description:
      "Centraliza los gastos recurrentes que se te escapan: ves cuánto pagas cada mes en suscripciones y decides cuáles cancelar.",
    descriptionEn:
      "Centralizes the recurring expenses you overlook: see how much you pay monthly in subscriptions and decide what to cancel.",
    stack: ["React", "Node.js", "Express"],
    featured: true,
    // TODO: add the demo URL (deploy it or point to a staging build).
    github: "https://github.com/minn09/subscription-manager",
  },
  {
    id: "tiba",
    title: "Tiba",
    description:
      "Convierte un hábito en algo que puedes ver: registras tu avance diario y detectas en qué días lo sostienes y en cuáles no.",
    descriptionEn:
      "Turns a habit into something you can see: you log your daily progress and spot the days you keep it and the ones you don't.",
    stack: ["TypeScript", "Vite"],
    featured: true,
    // TODO: add the demo URL (deploy it or point to a staging build).
    github: "https://github.com/minn09/tiba",
  },
  {
    id: "finance-pilot",
    title: "Finance Pilot",
    description:
      "Dashboard de gestión financiera personal con control de flujos y divisas.",
    descriptionEn:
      "Personal finance management dashboard with cash flow and currency control.",
    stack: ["Next.js", "Shadcn", "TypeScript"],
    featured: false,
    // TODO: re-enable in the featured list when a demo URL exists.
    github: "https://github.com/minn09/finance",
  },
  {
    id: "lumie",
    title: "Lumie",
    description:
      "Gestor de tareas y productividad con un enfoque en diseño minimalista.",
    descriptionEn:
      "Task and productivity manager with a minimalist design focus.",
    stack: ["React", "Tailwind CSS"],
    featured: false,
    // TODO: re-enable in the featured list when a demo URL exists.
    github: "https://github.com/minn09/lumie",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

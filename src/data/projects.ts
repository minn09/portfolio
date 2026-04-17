export interface Project {
  id: string
  title: string
  description: string
  descriptionEn?: string
  stack: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "nozen",
    title: "Nozen",
    description:
      "Herramienta de productividad para optimizar la organización diaria y el enfoque.",
    descriptionEn:
      "Productivity tool to optimize daily organization and focus.",
    stack: ["React", "State Management"],
    link: "https://nozen-coral.vercel.app/",
    github: "https://github.com/minn09/nozen",
  },
  {
    id: "finance-pilot",
    title: "Finance Pilot",
    description:
      "Dashboard de gestión financiera personal con control de flujos y divisas.",
    descriptionEn:
      "Personal finance management dashboard with cash flow and currency control.",
    stack: ["Next.js", "Shadcn", "TypeScript"],
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
    github: "https://github.com/minn09/lumie",
  },
  {
    id: "tiba",
    title: "Tiba",
    description:
      "Solución para el seguimiento de hábitos, desarrollada para explorar arquitecturas frontend avanzadas.",
    descriptionEn:
      "Solution for habit tracking, developed to explore advanced frontend architectures.",
    stack: ["TypeScript", "Vite"],
    github: "https://github.com/minn09/tiba",
  },
  {
    id: "subscription-manager",
    title: "Subscription Manager",
    description:
      "Administrador de gastos recurrentes diseñado para centralizar el control de suscripciones.",
    descriptionEn:
      "Recurring expenses manager designed to centralize subscription control.",
    stack: ["React", "Node.js", "Express"],
    github: "https://github.com/minn09/subscription-manager",
  },
]

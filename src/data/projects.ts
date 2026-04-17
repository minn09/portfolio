export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "finance-pilot",
    title: "Finance Pilot",
    description:
      "Dashboard de gestión financiera personal con control de flujos y divisas.",
    stack: ["Next.js", "Shadcn", "TypeScript"],
    github: "https://github.com/minn09/finance",
  },
  {
    id: "lumie",
    title: "Lumie",
    description:
      "Gestor de tareas y productividad con un enfoque en diseño minimalista.",
    stack: ["React", "Tailwind CSS"],
    github: "https://github.com/minn09/lumie",
  },
  {
    id: "nozen",
    title: "Nozen",
    description:
      "Herramienta de productividad para optimizar la organización diaria y el enfoque.",
    stack: ["React", "State Management"],
    link: "https://nozen-coral.vercel.app/",
    github: "https://github.com/minn09/nozen",
  },
  {
    id: "tiba",
    title: "Tiba",
    description:
      "Solución para el seguimiento de hábitos, desarrollada para explorar arquitecturas frontend avanzadas.",
    stack: ["TypeScript", "Vite"],
    github: "https://github.com/minn09/tiba",
  },
  {
    id: "subscription-manager",
    title: "Subscription Manager",
    description:
      "Administrador de gastos recurrentes diseñado para centralizar el control de suscripciones.",
    stack: ["React", "Node.js", "Express"],
    github: "https://github.com/minn09/subscription-manager",
  },
]

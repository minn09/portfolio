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
      "Plataforma de gestión financiera personal con control de flujos y divisas.",
    stack: ["Next.js", "Shadcn", "TypeScript"],
    link: "https://financepilot.app",
    github: "https://github.com/minn09/finance-pilot",
  },
  {
    id: "lumie",
    title: "Lumie",
    description:
      "Dashboard y componentes con enfoque en diseño minimalista y moderno.",
    stack: ["React", "Tailwind CSS"],
    github: "https://github.com/minn09/lumie",
  },
  {
    id: "daily-agenda",
    title: "Daily Agenda",
    description:
      "Herramienta de productividad para organización diaria y enfoque.",
    stack: ["React", "State Management"],
    github: "https://github.com/minn09/daily-agenda",
  },
  {
    id: "tiba",
    title: "Tiba",
    description: "Exploración de nuevas tecnologías y arquitecturas frontend.",
    stack: ["TypeScript", "Vite"],
    github: "https://github.com/minn09/tiba",
  },
  {
    id: "subscription-manager",
    title: "Subscription Manager",
    description:
      "Gestor para el control de gastos recurrentes y suscripciones.",
    stack: ["Node.js", "Express"],
    github: "https://github.com/minn09/subscription-manager",
  },
]

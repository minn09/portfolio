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
    id: "daily-agenda",
    title: "Daily Agenda",
    description:
      "Aplicación fullstack con App Router, estado global en Zustand y motor de búsqueda full-text. Zen Mode, atajos de teclado, temas claro/oscuro y exportación de datos. TypeScript estricto y Biome para mantener la calidad del código. Interfaz minimalista, responsive y con animaciones fluidas.",
    descriptionEn:
      "Fullstack application with App Router, global state in Zustand, and a full-text search engine. Zen Mode, keyboard shortcuts, light/dark themes, and data export. Strict TypeScript and Biome to maintain code quality. Minimalist, responsive interface with fluid animations.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS 4",
      "shadcn/ui",
    ],
    featured: true,
    demo: "https://nozen-coral.vercel.app/",
  },
  {
    id: "subscription-manager",
    title: "Subscription Manager",
    description:
      "Aplicación para gestionar y rastrear suscripciones personales, con panel de control de gastos mensuales y anuales. La publicación del proyecto en LinkedIn superó las 22 mil impresiones.",
    descriptionEn:
      "Application to manage and track personal subscriptions, with a monthly and annual expense dashboard. The project's LinkedIn post surpassed 22 thousand impressions.",
    stack: [
      "TypeScript",
      "React 19",
      "Vite 7",
      "Express 5",
      "Drizzle ORM",
      "PostgreSQL 17",
      "Tailwind CSS 4",
      "shadcn/ui",
    ],
    featured: true,
    demo: "https://subscription-manager-minn09s-projects.vercel.app/subscriptions",
  },
  {
    id: "finance-pilot",
    title: "Finance Pilot",
    description:
      "Aplicación de gestión de finanzas personales con panel de transacciones y resumen de gastos.",
    descriptionEn:
      "Personal finance management application with a transaction panel and expense summary.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand 5",
      "Tailwind CSS 4",
      "shadcn/ui",
    ],
    featured: true,
    demo: "https://finance-vert-seven.vercel.app/",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

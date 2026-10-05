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
    id: "next-sites",
    title: "Landing pages y sitios web con Next.js",
    titleEn: "Landing pages and websites with Next.js",
    description:
      "Un sitio rápido y responsive que representa bien tu negocio, con una base de código lista para seguir añadiendo secciones y contenido.",
    descriptionEn:
      "A fast, responsive site that represents your business well, with a codebase ready to keep adding sections and content.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "react-apps",
    title: "Aplicaciones web y dashboards con React",
    titleEn: "Web applications and dashboards with React",
    description:
      "Interfaces con estado global, datos conectados a APIs y componentes accesibles, estructuradas para que el equipo pueda seguir ampliándolas.",
    descriptionEn:
      "Interfaces with global state, data connected to APIs and accessible components, structured so the team can keep extending them.",
    stack: ["React", "Zustand", "TanStack Query", "shadcn/ui"],
  },
  {
    id: "refactor",
    title: "Refactorización y optimización de apps existentes",
    titleEn: "Refactoring and optimization of existing apps",
    description:
      "Aplico arquitectura modular y TypeScript para ordenar el código y reduzco los tiempos de carga sin reescribir el proyecto desde cero.",
    descriptionEn:
      "I apply modular architecture and TypeScript to tidy up the code and reduce load times without rewriting the project from scratch.",
    stack: ["TypeScript", "React", "Zustand", "React Native"],
  },
]

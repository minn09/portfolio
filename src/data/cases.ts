export interface CaseStudy {
  id: string
  title: string
  titleEn: string
  problem: string
  problemEn: string
  action: string
  actionEn: string
  result: string
  resultEn: string
  stack: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "react-performance",
    title: "Rendimiento de una app React",
    titleEn: "Performance of a React app",
    problem:
      "Una aplicación React y React Native se quedaba corta en rendimiento: interfaces lentas y difíciles de extender.",
    problemEn:
      "A React and React Native application was falling short on performance: slow interfaces that were hard to extend.",
    action:
      "Optimicé el renderizado, implementé gestión de estado global con Zustand y estructuré el proyecto con arquitectura modular y patrón MVC.",
    actionEn:
      "I optimized rendering, implemented global state management with Zustand and structured the project with a modular architecture and MVC pattern.",
    result: "Rendimiento mejorado un 40%.",
    resultEn: "Performance improved by 40%.",
    stack: ["React", "React Native", "Zustand", "TypeScript"],
    // TODO: add the baseline metric behind the 40% (load time, interaction
    // latency, device class) and the measurement window. The source experience
    // entry only states "mejoré el rendimiento en un 40%".
    // TODO: confirm whether the client can be named publicly.
  },
  {
    id: "catalog-platform",
    title: "Catálogos PDF → plataforma web",
    titleEn: "PDF catalogs → web platform",
    problem:
      "El producto se comunicaba en catálogos PDF: documentos estáticos, que no se podían actualizar con agilidad y que el usuario debía descargar.",
    problemEn:
      "The product was communicated through PDF catalogs: static documents that could not be updated easily and that the user had to download.",
    action:
      "Desarrollé una aplicación web en React que reemplazó los catálogos en PDF por una plataforma interactiva y dinámica, integrando APIs REST.",
    actionEn:
      "I developed a React web application that replaced the PDF catalogs with a dynamic interactive platform, integrating REST APIs.",
    result:
      "El contenido pasó de un PDF descargable a una experiencia web interactiva y siempre actualizada.",
    resultEn:
      "The content went from a downloadable PDF to an interactive, always up-to-date web experience.",
    stack: ["React", "REST APIs", "TypeScript"],
    // TODO: add adoption metrics (users, downloads before/after, time to
    // publish a catalog update). Not present in the source experience entry.
    // TODO: confirm the industry/sector and whether the client can be named.
  },
]

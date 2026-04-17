export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  description: string[]
  roleEn?: string
  companyEn?: string
  locationEn?: string
  periodEn?: string
  descriptionEn?: string[]
}

export const experience: Experience[] = [
  {
    id: "best-sytel-frontend",
    company: "Best Sytel S.A.C.",
    role: "Desarrollador Frontend",
    roleEn: "Frontend Developer",
    companyEn: "Best Sytel S.A.C.",
    location: "Lima, Perú",
    locationEn: "Lima, Peru",
    period: "Mayo 2025 - Noviembre 2025",
    periodEn: "May 2025 - November 2025",
    description: [
      "Refactoricé aplicaciones en React y React Native utilizando TypeScript, mejorando la mantenibilidad y reduciendo errores en desarrollo.",
      "Implementé arquitectura modular y patrón MVC, separando responsabilidades en capas claras.",
      "Mejoré el rendimiento de la aplicación en un 40% mediante optimización de renderizado y gestión eficiente del estado.",
      "Implementé gestión de estado global con Zustand para mejorar escalabilidad y organización del frontend.",
      "Desarrollé una aplicación web en React que reemplazó catálogos PDF por una plataforma interactiva dinámica.",
      "Integré APIs REST y colaboré en el diseño de endpoints con el equipo backend.",
      "Participé en revisiones de código y aplicación de buenas prácticas.",
    ],
    descriptionEn: [
      "Refactored React and React Native applications using TypeScript, improving maintainability and reducing development errors.",
      "Implemented modular architecture and MVC pattern, separating responsibilities in clear layers.",
      "Improved application performance by 40% through rendering optimization and efficient state management.",
      "Implemented global state management with Zustand to improve scalability and frontend organization.",
      "Developed a React web application that replaced PDF catalogs with a dynamic interactive platform.",
      "Integrated REST APIs and collaborated with backend team on endpoint design.",
      "Participated in code reviews and application of best practices.",
    ],
  },
  {
    id: "best-sytel-practicante",
    company: "Best Sytel S.A.C.",
    role: "Practicante en Ingeniería de Software",
    roleEn: "Software Engineering Intern",
    companyEn: "Best Sytel S.A.C.",
    location: "Lima, Perú",
    locationEn: "Lima, Peru",
    period: "Diciembre 2023 - Abril 2025",
    periodEn: "December 2023 - April 2025",
    description: [
      "Desarrollé y mantuve funcionalidades en aplicaciones usando React y React Native.",
      "Participé en la migración hacia arquitectura modular.",
      "Resolví bugs y ejecuté actualizaciones críticas.",
      "Colaboré en integración de APIs REST y pruebas funcionales.",
    ],
    descriptionEn: [
      "Developed and maintained functionalities in applications using React and React Native.",
      "Participated in migration towards modular architecture.",
      "Fixed bugs and executed critical updates.",
      "Collaborated on REST APIs integration and functional testing.",
    ],
  },
]

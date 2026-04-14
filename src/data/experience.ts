export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  description: string[]
}

export const experience: Experience[] = [
  {
    id: "best-sytel-frontend",
    company: "Best Sytel S.A.C.",
    role: "Desarrollador Frontend",
    location: "Lima, Perú",
    period: "Mayo 2025 - Noviembre 2025",
    description: [
      "Refactoricé aplicaciones en React y React Native utilizando TypeScript, mejorando la mantenibilidad y reduciendo errores en desarrollo.",
      "Implementé arquitectura modular y patrón MVC, separando responsabilidades en capas claras.",
      "Mejoré el rendimiento de la aplicación en un 40% mediante optimización de renderizado y gestión eficiente del estado.",
      "Implementé gestión de estado global con Zustand para mejorar escalabilidad y organización del frontend.",
      "Desarrollé una aplicación web en React que reemplazó catálogos PDF por una plataforma interactiva dinámica.",
      "Integré APIs REST y colaboré en el diseño de endpoints con el equipo backend.",
      "Participé en revisiones de código y aplicación de buenas prácticas.",
    ],
  },
  {
    id: "best-sytel-practicante",
    company: "Best Sytel S.A.C.",
    role: "Practicante en Ingeniería de Software",
    location: "Lima, Perú",
    period: "Diciembre 2023 - Abril 2025",
    description: [
      "Desarrollé y mantuve funcionalidades en aplicaciones usando React y React Native.",
      "Participé en la migración hacia arquitectura modular.",
      "Resolví bugs y ejecuté actualizaciones críticas.",
      "Colaboré en integración de APIs REST y pruebas funcionales.",
    ],
  },
]

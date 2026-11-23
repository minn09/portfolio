export interface CaseStudy {
  id: string
  title: string
  titleEn: string
  /** Where the work happened and with whom. These are team achievements from
   *  the company the portfolio owner worked at, never solo work. */
  context: string
  contextEn: string
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
    title: "Rendimiento de una app móvil",
    titleEn: "Performance of a mobile app",
    context:
      "Logro del equipo en Best Sytel S.A.C.: optimizamos esta aplicación junto a mis compañeros.",
    contextEn:
      "Team achievement at Best Sytel S.A.C.: we optimized this application together with my teammates.",
    problem:
      "Una aplicación móvil en React Native se sentía lenta al iniciar y sus pantallas no eran fluidas, además de ser difícil de extender.",
    problemEn:
      "A React Native mobile application felt slow on startup and its screens were not smooth, and it was hard to extend.",
    action:
      "Optimicé el renderizado, implementé gestión de estado global con Zustand y estructuré el proyecto con arquitectura modular y patrón MVC.",
    actionEn:
      "I optimized rendering, implemented global state management with Zustand and structured the project with a modular architecture and MVC pattern.",
    result:
      "El inicio de la app pasó de unos 5 s a unos 2 s y la navegación entre vistas se volvió más fluida (tiempos aproximados, medidos en pruebas internas del equipo).",
    resultEn:
      "App startup went from about 5 s to about 2 s and navigation between views became smoother (approximate times, measured in internal team testing).",
    stack: ["React Native", "Zustand", "TypeScript"],
  },
  {
    id: "catalog-platform",
    title: "Catálogos PDF → plataforma web",
    titleEn: "PDF catalogs → web platform",
    context:
      "Logro del equipo en Best Sytel S.A.C. (venta de motos, repuestos y accesorios): construimos la plataforma junto a mis compañeros y al equipo de backend.",
    contextEn:
      "Team achievement at Best Sytel S.A.C. (motorcycle, parts and accessories sales): we built the platform together with my teammates and the backend team.",
    problem:
      "El catálogo se enviaba a los clientes en PDF por WhatsApp. Cada cambio de precio, imagen o descripción obligaba a recrear el PDF y volver a enviarlo, y el equipo de ventas no veía qué estaba interesando a cada cliente.",
    problemEn:
      "The catalog was sent to customers as a PDF over WhatsApp. Every change to a price, image or description meant recreating the PDF and sending it again, and the sales team had no visibility into what each customer was interested in.",
    action:
      "Desarrollé una aplicación web en React, integrando APIs REST, donde el equipo de ventas edita precios, imágenes, descripciones detalladas, secciones de cada moto y stock. Los clientes eligen del catálogo, simulan su compra y arman su carrito.",
    actionEn:
      "I developed a React web application, integrating REST APIs, where the sales team edits prices, images, detailed descriptions, sections of each motorcycle and stock. Customers pick from the catalog, simulate their purchase and build their cart.",
    result:
      "Los 4 empleados de ventas dejaron de recrear y reenviar PDFs: ahora actualizan todo desde la web y ven los pedidos en curso con los datos del cliente, lo que facilita negociar con él.",
    resultEn:
      "The 4 sales employees stopped recreating and resending PDFs: they now update everything from the web and see orders in progress with the customer's data, which makes negotiating with them easier.",
    stack: ["React", "REST APIs", "TypeScript"],
  },
]

import en from "./en.json"
import es from "./es.json"

export type Locale = "en" | "es"

export interface Translations {
  nav: {
    about: string
    projects: string
    blog: string
    contact: string
  }
  hero: {
    greeting: string
    tagline: string
    role: string
    viewProjects: string
    contactMe: string
  }
  about: {
    title: string
    description: string
    bio: string
  }
  experience: {
    title: string
  }
  projects: {
    title: string
    viewCode: string
    live: string
  }
  skills: {
    title: string
    frontend: string
    backend: string
    tools: string
  }
  contact: {
    title: string
    email: string
    message: string
    send: string
    or: string
  }
  footer: {
    copyright: string
    dedication: string
    bio: string
    contactTitle: string
    featuredProjects: string
    viewAllProjects: string
  }
}

export const translations: Record<Locale, Translations> = { en, es }

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

export const defaultLocale: Locale = "es"

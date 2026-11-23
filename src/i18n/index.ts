import en from "./en.json"
import es from "./es.json"

export type Locale = "en" | "es"

export interface Translations {
  nav: {
    about: string
    cases: string
    projects: string
    skills: string
    cta: string
    blog: string
    contact: string
  }
  common: {
    roleTitle: string
    basedIn: string
  }
  hero: {
    greeting: string
    headline: string
    primaryCta: string
    secondaryCta: string
    scroll: string
  }
  about: {
    title: string
    lead: string
    values: {
      performanceTitle: string
      performanceText: string
      architectureTitle: string
      architectureText: string
      collaborationTitle: string
      collaborationText: string
    }
  }
  cases: {
    title: string
    subtitle: string
    problem: string
    action: string
    result: string
  }
  experience: {
    title: string
    seeAll: string
  }
  projects: {
    title: string
    demo: string
    viewCode: string
    viewMoreOnGithub: string
  }
  skills: {
    title: string
    frontend: string
    backend: string
    tools: string
  }
  contact: {
    title: string
    intro: string
    email: string
    message: string
    messageHint: string
    send: string
    or: string
    emailSubject: string
    sending: string
    success: string
    successFallback: string
    invalidEmail: string
    emptyMessage: string
  }
  meta: {
    title: string
    description: string
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

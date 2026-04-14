import en from "./en.json"
import es from "./es.json"

export type Locale = "en" | "es"

export const translations = { en, es }

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export const defaultLocale: Locale = "es"

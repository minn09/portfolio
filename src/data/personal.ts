export interface PersonalInfo {
  name: string
  fullName: string
  location: string
  email: string
  linkedin: string
  github: string
}

export const personalInfo: PersonalInfo = {
  name: "Jonathan Huertas",
  fullName: "Jonathan Huertas Contreras",
  location: "Lima, Perú",
  email: "jonathan.huertas.contreras@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonathan-huertas-contreras/",
  github: "https://github.com/minn09",
  // TODO: add `whatsapp` (number in E.164 format) here if you want a WhatsApp
  // shortcut in the contact section and the footer.
}

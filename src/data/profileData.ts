export interface Profile {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  catchphrase: string;
  description: string;
}

export const profileData: Profile = {
  name: "César Arana",
  role: "Pasante Técnico en Easymetering | Ciencias de la Computación, ESPOL",
  phone: import.meta.env.PUBLIC_PHONE || "", 
  email: import.meta.env.PUBLIC_EMAIL || "",
  image: "src/images/foto.jpg",
  catchphrase: "Conectando el hardware embebido con el poder de los LLMs.",
  description: "Enfocado en la arquitectura de soluciones tecnológicas y el despliegue de modelos de IA en el edge. Priorizo la calidad técnica, la integración eficiente de sistemas y el desarrollo en entornos estructurados."
};
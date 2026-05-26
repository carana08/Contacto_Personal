import miFoto from '../images/foto.jpg';

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
  name: "César Alejandro Arana Castro",
  role: "Estudiante de Ciencias de la Computación, ESPOL",
  phone: import.meta.env.PUBLIC_PHONE || "", 
  email: import.meta.env.PUBLIC_EMAIL || "",
  image: miFoto.src,
  catchphrase: "Conectando el hardware embebido con el poder de los LLMs.",
  description: "Apasionado por diseñar programas que brinden soluciones"
};

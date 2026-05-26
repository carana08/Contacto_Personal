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
  catchphrase: "Intersado en poder diseñar programas que brinden soluciones.",
  description: "Apasionado de la tecnología con el propósito de poder diseñar soluciones útiles que aporten valor a los demás. Me entusiasma el proceso de aprender nuevas cosas, llegar a colaborar y compartir con otros. Para mantener el equilibrio, valoro mucho los espacios tranquilos; al desconectarme, suelo relajarme inmerso en una buena novela de fantasía, viendo un partido de fútbol o disfrutando de los videojuegos."
};

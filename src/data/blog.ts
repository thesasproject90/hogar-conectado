export interface Post {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  imagen: string;
  contenido: string;
}

export const posts: Post[] = [
  {
    id: "guia-audio-alta-fidelidad",
    titulo: "Guía: ¿Merece la pena el audio Hi-Res en 2026?",
    resumen: "Analizamos si los nuevos sistemas acústicos como el del SteelSeries Nova Pro realmente marcan la diferencia para un usuario medio.",
    fecha: "3 Mayo, 2026",
    imagen: "https://m.media-amazon.com/images/I/712X4tzCUrL._AC_SL1500_.jpg",
    contenido: "El audio de alta resolución ha dejado de ser algo exclusivo de audiófilos con presupuestos de miles de euros..."
  }
];

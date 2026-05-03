export interface Post {
  id: string;
  titulo: string;
  extracto: string;
  fecha: string;
  imagenUrl: string;
  categoria: string;
  contenido?: string;
}

export const blogPosts: Post[] = [
  {
    id: 'silencio-productivo-sony-xm5',
    titulo: 'Silencio Productivo: El Rol de los Sony WH-1000XM5 en el Hogar Moderno',
    extracto: 'Analizamos cómo la cancelación de ruido se ha convertido en la herramienta de productividad más importante para quienes trabajan desde casa.',
    fecha: '03 Mayo, 2026',
    imagenUrl: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1200&auto=format&fit=crop',
    categoria: 'Análisis',
    contenido: 'Trabajar desde casa ofrece libertad, pero también distracciones sonoras constantes. Los Sony WH-1000XM5 no son solo auriculares; son una barrera arquitectónica contra el caos. Con su procesador V1, logran crear una burbuja de silencio absoluto, permitiendo que el estado de "flow" llegue antes y dure más.'
  }
];

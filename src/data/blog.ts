export interface Post {
  id: string;
  titulo: string;
  extracto: string;
  fecha: string;
  imagenUrl: string;
  categoria: string;
}

export const blogPosts: Post[] = [
  {
    id: 'sony-xm5-analisis',
    titulo: 'Análisis: Sony WH-1000XM5 en el Setup',
    extracto: '¿Vale la pena la inversión para el teletrabajo?',
    fecha: '2026-05-03',
    imagenUrl: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=800',
    categoria: 'Análisis'
  }
];

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
  linkOpiniones: string;
  categoria: 'trabajo' | 'salon' | 'cocina';
  rating: number;
}

export const productos: Producto[] = [
  {
    id: 'sony-wh-1000xm5',
    nombre: 'Sony WH-1000XM5',
    descripcion: 'Líderes en cancelación de ruido. Bloquean cualquier sonido doméstico con una calidad de audio sin precedentes y una comodidad excepcional para largas jornadas de trabajo.',
    precio: '298,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61fxPWFu6aL._AC_UF1000,1000_QL80_FMwebp_.jpg',
    linkAmazon: 'https://www.amazon.es/dp/B09Y2MYL5C',
    linkOpiniones: 'https://www.amazon.es/dp/B09Y2MYL5C#customerReviews',
    categoria: 'trabajo',
    rating: 4.8
  },
  {
    id: 'elgato-stream-deck-mk2',
    nombre: 'Elgato Stream Deck MK.2',
    descripcion: 'Controlador con 15 teclas LCD totalmente personalizables. Automatiza flujos de trabajo, controla aplicaciones y gestiona tu entorno de trabajo con un solo toque.',
    precio: '149,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61kmUcPNlBL._AC_UF894,1000_QL80_FMwebp_.jpg',
    linkAmazon: 'https://www.amazon.es/dp/B09738CV2G',
    linkOpiniones: 'https://www.amazon.es/dp/B09738CV2G#customerReviews',
    categoria: 'trabajo',
    rating: 4.7
  }
];

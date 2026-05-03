export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
  linkOpiniones: string;
  categoria: 'trabajo' | 'salon' | 'cocina';
  rating: number; // Añadimos esto para que no de error
}

export const productos: Producto[] = [
  {
    id: 'steelseries-arctis-nova-pro',
    nombre: 'SteelSeries Arctis Nova Pro Wireless',
    descripcion: 'El estándar de oro en audio inalámbrico para entusiastas. Cancelación de ruido activa, sistema de batería dual intercambiable y una fidelidad sonora que redefine el juego y la productividad.',
    precio: '349,99€',
    imagenUrl: 'https://m.media-amazon.com/images/I/712X4tzCUrL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/4bcLqgW',
    linkOpiniones: 'https://amzn.to/4bcLqgW',
    categoria: 'trabajo',
    rating: 5 // Nota máxima
  }
  // Si tienes más productos, asegúrate de ponerles un rating (ej: 4.5 o 5)
];

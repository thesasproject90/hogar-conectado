export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
  linkOpiniones: string;
  categoria: 'trabajo' | 'salon' | 'cocina';
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
    categoria: 'trabajo'
  },
  // Añade aquí más productos y asígnales una categoría
];

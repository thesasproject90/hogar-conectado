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
    id: 'steelseries-arctis-nova-pro',
    nombre: 'SteelSeries Arctis Nova Pro Wireless',
    descripcion: 'El estándar de oro en audio inalámbrico para entusiastas. Cancelación de ruido activa y sistema de batería dual.',
    precio: '349,99€',
    imagenUrl: 'https://m.media-amazon.com/images/I/712X4tzCUrL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/4bcLqgW',
    linkOpiniones: 'https://amzn.to/4bcLqgW',
    categoria: 'trabajo',
    rating: 5
  },
  {
    id: 'logitech-mx-master-3s',
    nombre: 'Logitech MX Master 3S',
    descripcion: 'El ratón definitivo para la productividad. Silencioso, ergonómico y con un sensor de 8000 DPI que funciona sobre cristal.',
    precio: '99,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3UEPqX0',
    linkOpiniones: 'https://amzn.to/3UEPqX0',
    categoria: 'trabajo',
    rating: 4.8
  }
];

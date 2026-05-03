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
    id: 'mx-master-3s',
    nombre: 'Logitech MX Master 3S',
    descripcion: 'El estándar de oro en productividad. Sensor de 8000 DPI que funciona sobre cualquier superficie, incluso cristal, y clics un 90% más silenciosos.',
    precio: '102,00€',
    imagenUrl: 'https://resource.logitech.com/w_600,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png',
    linkAmazon: 'https://www.amazon.es/dp/B09W9S7XN5',
    linkOpiniones: 'https://www.amazon.es/dp/B09W9S7XN5#customerReviews',
    categoria: 'trabajo',
    rating: 5
  },
  {
    id: 'sony-wh1000xm5',
    nombre: 'Sony WH-1000XM5',
    descripcion: 'Los mejores auriculares con cancelación de ruido del mercado para trabajar concentrado. 30 horas de autonomía y una calidad de llamada cristalina.',
    precio: '298,00€',
    imagenUrl: 'https://www.sony.es/image/61453240b6a09e0839e30a91636886e0?fmt=pjpeg&wid=600&qlt=85',
    linkAmazon: 'https://www.amazon.es/dp/B09Y2MYL5C',
    linkOpiniones: 'https://www.amazon.es/dp/B09Y2MYL5C#customerReviews',
    categoria: 'trabajo',
    rating: 4.8
  },
  {
    id: 'benq-screenbar-halo',
    nombre: 'BenQ ScreenBar Halo',
    descripcion: 'Luz de monitor con control inalámbrico. Mejora la fatiga visual sin ocupar espacio en el escritorio ni crear reflejos en la pantalla.',
    precio: '179,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61f9S2eBslL._AC_SL1500_.jpg',
    linkAmazon: 'https://www.amazon.es/dp/B09995S1CH',
    linkOpiniones: 'https://www.amazon.es/dp/B09995S1CH#customerReviews',
    categoria: 'trabajo',
    rating: 4.9
  },
  {
    id: 'elgato-stream-deck-mk2',
    nombre: 'Elgato Stream Deck MK.2',
    descripcion: 'Controlador con 15 teclas LCD personalizables. Permite lanzar aplicaciones, silenciar el micro o controlar luces con un solo toque.',
    precio: '149,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/618xL6pY6FL._AC_SL1500_.jpg',
    linkAmazon: 'https://www.amazon.es/dp/B09738CV2G',
    linkOpiniones: 'https://www.amazon.es/dp/B09738CV2G#customerReviews',
    categoria: 'trabajo',
    rating: 4.7
  },
  {
    id: 'apple-magic-keyboard-touchid',
    nombre: 'Apple Magic Keyboard (Touch ID)',
    descripcion: 'Escritura increíblemente precisa y cómoda. Incluye sensor Touch ID para desbloqueos y pagos seguros al instante.',
    precio: '151,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/41-lS5m4mFL._AC_SL1024_.jpg',
    linkAmazon: 'https://www.amazon.es/dp/B09BRC3S78',
    linkOpiniones: 'https://www.amazon.es/dp/B09BRC3S78#customerReviews',
    categoria: 'trabajo',
    rating: 4.6
  }
];

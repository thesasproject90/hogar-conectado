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
    id: 'logitech-mx-master-3s',
    nombre: 'Logitech MX Master 3S',
    descripcion: 'El ratón ergonómico definitivo. Con clics silenciosos y sensor de 8000 DPI que funciona sobre cristal. Es la herramienta de precisión para cualquier profesional del diseño o la gestión.',
    precio: '109,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3UEPqX0',
    linkOpiniones: 'https://amzn.to/3UEPqX0',
    categoria: 'trabajo',
    rating: 5
  },
  {
    id: 'apple-magic-keyboard-touch-id',
    nombre: 'Apple Magic Keyboard',
    descripcion: 'Minimalismo y eficiencia. La versión con Touch ID ofrece una experiencia de escritura precisa y segura, ideal para un setup de escritorio limpio y sin cables.',
    precio: '159,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/41-lS5m4mFL._AC_SL1024_.jpg',
    linkAmazon: 'https://amzn.to/4bcLqgW',
    linkOpiniones: 'https://amzn.to/4bcLqgW',
    categoria: 'trabajo',
    rating: 4.5
  },
  {
    id: 'benq-screenbar-halo',
    nombre: 'BenQ ScreenBar Halo',
    descripcion: 'Iluminación asimétrica inteligente que elimina el reflejo en pantalla. Incluye un controlador inalámbrico industrial para ajustar temperatura y brillo.',
    precio: '179,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61f9S2eBslL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3vXY8qW',
    linkOpiniones: 'https://amzn.to/3vXY8qW',
    categoria: 'trabajo',
    rating: 4.9
  },
  {
    id: 'sony-wh-1000xm5',
    nombre: 'Sony WH-1000XM5',
    descripcion: 'Líderes en cancelación de ruido. Esenciales para concentrarse en casa, bloqueando cualquier sonido doméstico con una calidad de audio sin precedentes.',
    precio: '329,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61QUi7atpKL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/495IeWn',
    linkOpiniones: 'https://amzn.to/495IeWn',
    categoria: 'trabajo',
    rating: 4.8
  },
  {
    id: 'elgato-stream-deck-mk2',
    nombre: 'Elgato Stream Deck MK.2',
    descripcion: 'No solo para streamers. Automatiza flujos de trabajo, controla domótica o lanza aplicaciones con un solo toque en sus teclas LCD personalizables.',
    precio: '149,99€',
    imagenUrl: 'https://m.media-amazon.com/images/I/618xL6pY6FL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3UEPqX0',
    linkOpiniones: 'https://amzn.to/3UEPqX0',
    categoria: 'trabajo',
    rating: 4.7
  },
  {
    id: 'belkin-boost-charge-pro',
    nombre: 'Belkin MagSafe 3-en-1',
    descripcion: 'Base de carga inalámbrica rápida para iPhone, Apple Watch y AirPods. Diseño arquitectónico que ahorra espacio y reduce el desorden de cables.',
    precio: '125,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/51rR57p0l6L._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/4bcLqgW',
    linkOpiniones: 'https://amzn.to/4bcLqgW',
    categoria: 'trabajo',
    rating: 4.6
  },
  {
    id: 'lg-ultrafine-5k',
    nombre: 'LG UltraFine 5K Display',
    descripcion: 'La mejor opción para usuarios de Mac. Una resolución impecable y una integración perfecta con macOS para un entorno de trabajo visualmente superior.',
    precio: '1.199,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/81fH4H8Y9SL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3vXY8qW',
    linkOpiniones: 'https://amzn.to/3vXY8qW',
    categoria: 'trabajo',
    rating: 4.4
  },
  {
    id: 'orbitkey-desk-mat',
    nombre: 'Orbitkey Desk Mat',
    descripcion: 'Alfombrilla de escritorio de cuero vegano con una barra de herramientas integrada y un sistema para ocultar cables. Elegancia pura bajo tus manos.',
    precio: '89,90€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61xM-fR3D8L._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/495IeWn',
    linkOpiniones: 'https://amzn.to/495IeWn',
    categoria: 'trabajo',
    rating: 4.5
  },
  {
    id: 'steelcase-gesture',
    nombre: 'Steelcase Gesture Chair',
    descripcion: 'La silla ergonómica más premiada. Diseñada para adaptarse a todas nuestras posturas tecnológicas modernas, ofreciendo soporte lumbar dinámico.',
    precio: '1.050,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/71u9vYwW4SL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/4bcLqgW',
    linkOpiniones: 'https://amzn.to/4bcLqgW',
    categoria: 'trabajo',
    rating: 4.9
  },
  {
    id: 'philips-hue-play-bar',
    nombre: 'Philips Hue Play Bar',
    descripcion: 'Crea ambientes de iluminación inmersivos detrás de tu monitor. Sincronizable con el contenido de tu pantalla para reducir la fatiga visual.',
    precio: '135,00€',
    imagenUrl: 'https://m.media-amazon.com/images/I/61X-uOsqEPL._AC_SL1500_.jpg',
    linkAmazon: 'https://amzn.to/3UEPqX0',
    linkOpiniones: 'https://amzn.to/3UEPqX0',
    categoria: 'trabajo',
    rating: 4.7
  }
];

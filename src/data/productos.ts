export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
  rating: number;
  opiniones: number;
  esTop: boolean;
}

export const productos: Producto[] = [
  {
    id: "echo-dot-5",
    nombre: "Echo Dot (5.ª generación, modelo de 2022)",
    descripcion: "Altavoz inteligente con Alexa. Sonido potente, voces nítidas y graves intensos. Controla tu hogar con la voz.",
    precio: "64,99 €",
    imagenUrl: "https://m.media-amazon.com/images/I/71Y6G67fSXL._AC_SL1500_.jpg",
    linkAmazon: "https://www.amazon.es/dp/B09B8W5FW7/?tag=hogarcon00-21",
    rating: 4.8, opiniones: 25421, esTop: true
  },
  {
    id: "tp-link-c200",
    nombre: "TP-Link TAPO C200 - Cámara WiFi",
    descripcion: "Cámara de vigilancia 360º, 1080p, Visión Nocturna, Detección de Movimiento, Audio de dos vías.",
    precio: "29,90 €",
    imagenUrl: "https://m.media-amazon.com/images/I/31S7rE9nSLL._AC_SL1000_.jpg",
    linkAmazon: "https://www.amazon.es/dp/B07XLML2YS/?tag=hogarcon00-21",
    rating: 4.7, opiniones: 95400, esTop: true
  },
  {
    id: "fire-tv-stick",
    nombre: "Fire TV Stick con mando Alexa",
    descripcion: "Reproducción en streaming rápida y con calidad Full HD. Incluye mando por voz Alexa con controles para el televisor.",
    precio: "44,99 €",
    imagenUrl: "https://m.media-amazon.com/images/I/51AaAn3m8yL._AC_SL1000_.jpg",
    linkAmazon: "https://www.amazon.es/dp/B08C1W5L87/?tag=hogarcon00-21",
    rating: 4.7, opiniones: 58000, esTop: true
  }
];

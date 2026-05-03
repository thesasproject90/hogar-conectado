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
    nombre: "Echo Dot (5.ª generación)",
    descripcion: "Nuestro altavoz inteligente con Alexa más vendido. Ofrece voces nítidas y graves intensos para un sonido potente en cualquier habitación.",
    precio: "64,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop", 
    linkAmazon: "https://www.amazon.es/dp/B09B8W5FW7?tag=TU_TAG-21",
    rating: 4.8,
    opiniones: 15420,
    esTop: true
  },
  {
    id: "enchufe-tapo-p100",
    nombre: "TP-Link Tapo P100",
    descripcion: "Enchufe inteligente mini para controlar tus dispositivos desde cualquier lugar. Programación, temporizador y control por voz con Alexa.",
    precio: "12,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B07Z59S8S8?tag=TU_TAG-21",
    rating: 4.6,
    opiniones: 8940,
    esTop: false
  }
];

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagenUrl: string;
  linkAmazon: string;
}

export const productos: Producto[] = [
  {
    id: "echo-dot-5",
    nombre: "Echo Dot (5.ª generación)",
    descripcion: "El altavoz inteligente más popular.",
    precio: "64,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop", 
    linkAmazon: "https://www.amazon.es/dp/B09B8W5FW7?tag=TU_TAG-21"
  },
  {
    id: "bombilla-philips",
    nombre: "Philips Hue Bombilla",
    descripcion: "Controla las luces desde tu móvil.",
    precio: "49,99 €",
    imagenUrl: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop",
    linkAmazon: "https://www.amazon.es/dp/B088CS6G99?tag=TU_TAG-21"
  }
];

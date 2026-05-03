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
    descripcion: "El Echo Dot con mejor calidad de sonido hasta la fecha: disfruta de un audio potente con voces más nítidas y graves más intensos en cualquier habitación. Controla tu música y podcast favoritos en toda tu casa.",
    precio: "64,99 €",
    // Esta es la URL de la imagen oficial del servidor de Amazon
    imagenUrl: "https://m.media-amazon.com/images/I/71Y6G67fSXL._AC_SL1500_.jpg",
    // Enlace real directo al producto en Amazon.es
    linkAmazon: "https://www.amazon.es/dp/B09B8W5FW7/",
    rating: 4.8,
    opiniones: 25421,
    esTop: true
  }
];

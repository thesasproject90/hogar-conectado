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
    id: "steelseries-arctis-nova-pro",
    nombre: "SteelSeries Arctis Nova Pro Wireless",
    descripcion: "Sistema acústico Nova Pro con transductores premium de alta fidelidad. Cancelación activa de ruido (ANC) y sistema de doble batería intercambiable para jugar sin límites.",
    precio: "Consultar precio", // <--- Cambiamos el precio fijo por esto
    imagenUrl: "https://m.media-amazon.com/images/I/712X4tzCUrL._AC_SL1500_.jpg",
    linkAmazon: "https://www.amazon.es/dp/B09ZLS8LB3/",
    rating: 4.5,
    opiniones: 3850,
    esTop: true
  }
];

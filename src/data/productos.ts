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

export const productos: Producto[] = [];

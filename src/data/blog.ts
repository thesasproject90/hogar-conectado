export interface Post {
  id: string;
  titulo: string;
  extracto: string;
  fecha: string;
  imagenUrl: string;
  categoria: string;
}
export const blogPosts: Post[] = [];

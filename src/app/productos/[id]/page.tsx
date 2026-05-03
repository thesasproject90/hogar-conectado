import { productos } from '../../../data/productos';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProductoDetalle({ params }: { params: { id: string } }) {
  const producto = productos.find((p) => p.id === params.id);

  if (!producto) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Volver al catálogo
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={producto.imagenUrl} alt={producto.nombre} className="w-full h-auto object-cover" />
          </div>

          {/* Información */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{producto.nombre}</h1>
            <p className="text-2xl font-extrabold text-blue-600 mb-6">{producto.precio}</p>
            <div className="prose prose-blue text-gray-600 mb-8">
              <p>{producto.descripcion}</p>
            </div>
            
            <a 
              href={producto.linkAmazon} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
            >
              Ver disponibilidad en Amazon
            </a>
            <p className="text-xs text-center text-gray-400 mt-4 italic">
              * El precio y la disponibilidad pueden variar.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

import { productos } from '../../../../src/data/productos';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = productos.find((prod) => prod.id === id);

  if (!p) notFound();

  // Filtrar 3 productos relacionados (que no sean el actual)
  const relacionados = productos
    .filter((prod) => prod.id !== id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors mb-6 inline-flex items-center gap-2 text-sm font-medium">
          <span>←</span> Volver al catálogo
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-12">
          {/* Lado Imagen */}
          <div className="relative bg-gray-100 p-8 flex items-center justify-center">
            {p.esTop && (
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Más vendido
              </span>
            )}
            <img src={p.imagenUrl} alt={p.nombre} className="rounded-xl shadow-2xl max-h-96 object-cover" />
          </div>

          {/* Lado Texto */}
          <div className="p-8 md:p-12 flex flex-col">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{p.nombre}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(Math.floor(p.rating))}{"☆".repeat(5 - Math.floor(p.rating))}
              </div>
              <span className="text-sm font-medium text-gray-500">({p.opiniones} valoraciones)</span>
            </div>

            <div className="text-4xl font-black text-blue-600 mb-6">
              {p.precio}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-800 text-sm italic leading-relaxed">
                {p.descripcion}
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href={p.linkAmazon} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-center font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95"
              >
                Ver precio en Amazon
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-green-600 font-bold">
                <span className="bg-blue-600 text-white px-1 rounded">Prime</span>
                Envío gratuito y devoluciones fáciles
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Productos Relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">También te puede interesar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relacionados.map((rel) => (
                <Link key={rel.id} href={`/productos/${rel.id}`} className="group bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src={rel.imagenUrl} alt={rel.nombre} className="w-full h-40 object-cover rounded-xl mb-4 group-hover:opacity-90" />
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{rel.nombre}</h4>
                  <p className="text-blue-600 font-bold text-sm mt-1">{rel.precio}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

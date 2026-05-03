import { productos } from '../data/productos';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <header className="bg-white shadow-sm pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hogar <span className="text-blue-600">Conectado</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La mejor selección de domótica para tu hogar inteligente.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <Link href={`/productos/${p.id}`}>
                <img src={p.imagenUrl} alt={p.nombre} className="w-full h-56 object-cover cursor-pointer hover:opacity-90 transition-opacity" />
              </Link>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{p.nombre}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{p.descripcion}</p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-extrabold text-gray-900">{p.precio}</span>
                  <Link 
                    href={`/productos/${p.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

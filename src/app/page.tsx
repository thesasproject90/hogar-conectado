import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
            Tu casa, más <span className="text-brand">inteligente.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 px-4">
            La mejor selección de dispositivos conectados para 2026.
          </p>
          <Link href="/#productos" className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      {/* Grid de Productos */}
      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col hover:shadow-md transition-shadow">
              <div className="aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden">
                <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 leading-tight mb-2">{p.nombre}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">{p.descripcion}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-black text-lg">{p.precio}</span>
                <Link href={`/productos/${p.id}`} className="text-brand font-bold text-sm">Analísis →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

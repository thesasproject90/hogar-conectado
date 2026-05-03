import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-4">
            Tu casa, más <span className="text-brand">inteligente.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">La mejor selección de dispositivos para 2026.</p>
          <Link href="/#productos" className="inline-block bg-brand text-white px-8 py-3 rounded-full font-bold shadow-lg">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div key={p.id} className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col hover:shadow-xl transition-all">
              {/* Imagen con Zoom */}
              <Link href={`/productos/${p.id}`} className="aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden block">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-125" 
                />
              </Link>
              
              {/* Nombre vinculado */}
              <Link href={`/productos/${p.id}`}>
                <h3 className="font-bold text-lg text-slate-900 hover:text-brand transition-colors mb-2">
                  {p.nombre}
                </h3>
              </Link>
              
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">{p.descripcion}</p>
              
              <div className="mt-auto flex items-center justify-between gap-4">
                <span className="font-black text-lg">{p.precio}</span>
                {/* Botón de precio vinculado a Amazon */}
                <a href={p.linkAmazon} target="_blank" className="text-xs bg-slate-900 text-white px-3 py-2 rounded-lg font-bold hover:bg-brand transition-colors">
                  Consultar Precio
                </a>
              </div>
              <Link href={`/productos/${p.id}`} className="mt-4 text-brand font-bold text-sm text-center border-t pt-4">
                Leer Análisis Completo →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

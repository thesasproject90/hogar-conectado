import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-slate-50 border-b border-gray-100 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
          Hogar <span className="text-brand">Conectado</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">Análisis independientes de tecnología útil.</p>
        <Link href="/#productos" className="bg-brand text-white px-8 py-3 rounded-full font-bold inline-block">Ver Catálogo</Link>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div key={p.id} className="group border border-gray-100 rounded-2xl p-4 flex flex-col">
              {/* Imagen con LINK y ZOOM */}
              <Link href={`/productos/${p.id}`} className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 block">
                <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-125" />
              </Link>
              
              {/* Nombre con LINK */}
              <Link href={`/productos/${p.id}`}>
                <h3 className="font-bold text-xl text-slate-900 hover:text-brand transition-colors mb-2">{p.nombre}</h3>
              </Link>

              <p className="text-slate-500 text-sm line-clamp-2 mb-4">{p.descripcion}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-black text-lg">{p.precio}</span>
                {/* Botón con LINK a AMAZON */}
                <a href={p.linkAmazon} target="_blank" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand">Consultar Precio</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-10 text-center border-t border-gray-100 text-slate-400 text-sm">© 2026 Hogar Conectado</footer>
    </main>
  );
}

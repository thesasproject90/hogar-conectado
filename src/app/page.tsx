import { productos } from '../data/productos';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6 inline-block">
            Tecnología Seleccionada
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Mejora tu <br />
            <span className="text-blue-600">estilo de vida</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Analizamos los mejores dispositivos del mercado para que solo tengas que elegir el que más te guste.
          </p>
        </div>
      </section>
      <section id="productos" className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productos.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gray-50 mb-6 border border-gray-100 group-hover:shadow-2xl group-hover:shadow-blue-100 transition-all duration-500 relative">
                <Link href={`/productos/${p.id}`}>
                  <img src={p.imagenUrl} alt={p.nombre} className="h-full w-full object-contain p-10 group-hover:scale-110 transition-transform duration-700" />
                </Link>
                {p.esTop && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Destacado</p>
                  </div>
                )}
              </div>
              <div className="px-2">
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <a href={p.linkAmazon} target="_blank" rel="noopener noreferrer" className="text-lg font-black text-blue-600 hover:underline flex items-center gap-1">
                    {p.precio}
                  </a>
                  <Link href={`/productos/${p.id}`} className="text-xs font-bold text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors">
                    Detalles
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="py-20 border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-[0.3em]">Hogar Conectado 2026</p>
        </div>
      </footer>
    </main>
  );
}

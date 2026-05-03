import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Editorial */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter font-light">
            Essential <br/>
            <span className="font-black text-brand italic">Technology.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-xl text-slate-500 font-medium">
            Una selección curada de objetos que definen el hogar del futuro. Sin ruido, solo excelencia.
          </p>
        </div>
      </section>

      {/* Grid de Productos */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {productos.map((p) => (
            <article key={p.id} className="group relative">
              {/* Imagen con Zoom y Link */}
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f3f3f3] overflow-hidden relative">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Botón que se revela al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="reveal-button bg-white text-black px-6 py-3 font-bold text-sm tracking-widest uppercase">
                    Ver Análisis
                  </div>
                </div>
              </Link>

              {/* Info del Producto */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <Link href={`/productos/${p.id}`}>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-brand transition-colors">
                      {p.nombre}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-400 mt-1 uppercase tracking-widest font-medium">Curated Object</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black">{p.precio}</p>
                  <a 
                    href={p.linkAmazon} 
                    target="_blank" 
                    className="text-[10px] font-black uppercase tracking-tighter border-b-2 border-brand hover:text-brand"
                  >
                    Adquirir Ahora
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-slate-100 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 text-center">
        © 2026 Hogar Conectado — Design & Tech Journal
      </footer>
    </main>
  );
}

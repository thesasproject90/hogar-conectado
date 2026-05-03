import { productos } from '../data/productos';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Ultra-Minimalista */}
      <section className="relative pt-44 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Tendencias 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-gray-900 mb-8 leading-[0.9]">
              El futuro es <br />
              <span className="font-black text-gradient italic">conectado.</span>
            </h1>
            
            <p className="max-w-xl text-lg text-gray-400 font-light leading-relaxed mb-12">
              Curamos piezas tecnológicas que no solo funcionan, sino que elevan la estética de tu espacio personal.
            </p>
            
            <a href="#productos" className="group flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-blue-600 transition-colors">Explorar Colección</span>
              <div className="w-px h-12 bg-gray-200 group-hover:h-16 group-hover:bg-blue-600 transition-all duration-500" />
            </a>
          </div>
        </div>
      </section>
      {/* Colección de Productos */}
      <section id="productos" className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {productos.map((p) => (
            <article key={p.id} className="group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-gray-50 border border-white shadow-sm group-hover:shadow-2xl group-hover:shadow-blue-100/50 transition-all duration-700">
                <Link href={`/productos/${p.id}`}>
                  <img 
                    src={p.imagenUrl} 
                    alt={p.nombre} 
                    className="h-full w-full object-contain p-12 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  />
                </Link>
                
                <div className="absolute top-8 left-8">
                  {p.esTop && (
                    <span className="glass-card px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                      Essential
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-white via-white/80 to-transparent">
                  <a href={p.linkAmazon} target="_blank" className="w-full bg-gray-900 text-white text-center block py-4 rounded-2xl font-bold text-xs uppercase tracking-widest">
                    Adquirir ahora
                  </a>
                </div>
              </div>
              
              <div className="mt-8 px-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                    <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
                  </h3>
                </div>
                <p className="text-gray-400 text-sm font-medium">{p.precio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">Hogar Conectado © 2026</p>
          <div className="flex gap-8">
             <Link href="/blog" className="text-[10px] font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest">Journal</Link>
             <Link href="/aviso-legal" className="text-[10px] font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest">Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

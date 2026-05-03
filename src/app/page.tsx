import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 1. HERO EDITORIAL */}
      <section className="pt-44 pb-24 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light">
            Essential <br/>
            <span className="font-black text-brand italic">Technology.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="text-xl md:text-2xl max-w-xl text-slate-500 font-medium leading-tight">
              Una selección curada de objetos que definen el hogar del futuro. Sin ruido, solo excelencia.
            </p>
            <div className="flex gap-4 mb-2">
              <div className="text-right">
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Edición Actual</span>
                <span className="font-bold">MAY 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN MANIFIESTO (Estilo Landing) */}
      <section className="py-24 px-6 bg-brand text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            No buscamos gadgets.<br/>Buscamos soluciones.
          </h2>
          <div className="space-y-6 text-blue-100 text-lg">
            <p>En un mundo saturado de pantallas y cables, filtramos la tecnología que realmente aporta valor a tu espacio vital.</p>
            <p>Cada objeto en nuestra lista ha pasado por un riguroso proceso de análisis estético, funcional y de durabilidad.</p>
          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO PRINCIPAL */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20 flex justify-between items-baseline border-b border-slate-100 pb-8">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">The Selection</h2>
          <span className="text-sm font-medium italic text-slate-400">{productos.length} Objects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {productos.map((p) => (
            <article key={p.id} className="group relative">
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative rounded-sm">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="reveal-button bg-white text-black px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase shadow-2xl">
                    Full Analysis
                  </div>
                </div>
              </Link>

              <div className="mt-8 flex justify-between items-start">
                <div className="max-w-[70%]">
                  <Link href={`/productos/${p.id}`}>
                    <h3 className="text-2xl font-bold tracking-tighter group-hover:text-brand transition-colors leading-none">
                      {p.nombre}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black tracking-tighter">{p.precio}</p>
                  <a 
                    href={p.linkAmazon} 
                    target="_blank" 
                    className="inline-block mt-2 text-[9px] font-black uppercase tracking-widest text-brand border-b-2 border-brand pb-1 hover:text-black hover:border-black transition-all"
                  >
                    Check Offer
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. BLOQUE DE CIERRE / NEWSLETTER */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">¿Quieres estar al día?</h2>
          <p className="text-slate-500 mb-10 text-lg">Únete a nuestra lista de correo para recibir análisis exclusivos y lanzamientos antes que nadie.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input type="email" placeholder="tu@email.com" className="px-6 py-4 bg-white border border-slate-200 rounded-sm w-full sm:w-80 focus:outline-none focus:border-brand" />
            <button className="bg-brand text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-black transition-colors">Suscribirme</button>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
            © 2026 Hogar Conectado — Design & Tech Journal
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="/blog" className="hover:text-brand">Journal</Link>
            <Link href="/aviso-legal" className="hover:text-brand">Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

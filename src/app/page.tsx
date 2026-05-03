import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  // Tomamos el primer producto para la sección destacada
  const destacado = productos[0];

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
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DESTACADA (FEATURED FOCUS) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[70vh] w-full overflow-hidden rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" 
              alt="Hogar minimalista" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 md:p-16">
              <span className="text-white text-xs font-black uppercase tracking-[0.4em] mb-4">Interior Focus</span>
              <h2 className="text-white text-4xl md:text-6xl font-light tracking-tighter max-w-2xl">
                La armonía perfecta entre <span className="font-black italic">estética y función.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFIESTO AZUL */}
      <section className="py-32 px-6 bg-brand text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
            01<br/>No buscamos gadgets.<br/>Buscamos soluciones.
          </h2>
          <div className="space-y-8 text-blue-100 text-xl font-light leading-relaxed">
            <p>Filtramos la tecnología que realmente aporta valor a tu espacio vital. Analizamos la arquitectura del software y la pureza del hardware.</p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-blue-400/30">
              <div>
                <span className="block font-black text-white text-3xl italic tracking-tighter">+500</span>
                <span className="text-sm uppercase font-bold tracking-widest text-blue-200">Horas de Test</span>
              </div>
              <div>
                <span className="block font-black text-white text-3xl italic tracking-tighter">100%</span>
                <span className="text-sm uppercase font-bold tracking-widest text-blue-200">Independencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SELECTION (PRODUCTOS) */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20 flex justify-between items-baseline border-b border-slate-100 pb-8">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">The 2026 Collection</h2>
          <span className="text-sm font-medium italic text-slate-400">Available Analyses</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {productos.map((p) => (
            <article key={p.id} className="group">
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative rounded-sm">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="reveal-button bg-white text-black px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase shadow-2xl">
                    View Object
                  </div>
                </div>
              </Link>

              <div className="mt-8">
                <div className="flex justify-between items-start mb-4">
                  <Link href={`/productos/${p.id}`}>
                    <h3 className="text-3xl font-bold tracking-tighter group-hover:text-brand transition-colors">
                      {p.nombre}
                    </h3>
                  </Link>
                  <span className="text-xl font-black tracking-tighter text-slate-300">/0{p.id}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {p.descripcion}
                </p>
                <div className="flex items-center gap-6">
                  <a href={p.linkAmazon} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-brand border-b-2 border-brand pb-1">
                    Check Price
                  </a>
                  <Link href={`/productos/${p.id}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-black">
                    Full Review
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER EDITORIAL */}
      <section className="py-40 px-6 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand font-bold uppercase tracking-[0.4em] text-[10px]">The Journal</span>
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter mt-8 mb-12">
            Suscríbete a la <br/><span className="font-black italic">curación semanal.</span>
          </h2>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-b border-slate-700 px-4 py-4 w-full md:w-96 focus:outline-none focus:border-brand text-center uppercase text-xs tracking-widest"
            />
            <button className="bg-white text-black px-12 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-brand hover:text-white transition-all">
              Join
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
            Hogar Conectado © 2026
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link href="/" className="hover:text-white">Index</Link>
            <Link href="/blog" className="hover:text-white">Journal</Link>
            <Link href="/aviso-legal" className="hover:text-white">Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

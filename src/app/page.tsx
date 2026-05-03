import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';

export default function Home() {
  const categorias = [
    { name: 'Workplace', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Living Room', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Kitchen', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* HERO EDITORIAL */}
      <section className="pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light">
            Essential <br/>
            <span className="font-black text-brand italic">Technology.</span>
          </h1>
        </div>
      </section>

      {/* 1. CATEGORÍAS (AMBIFORMAS) */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <div key={cat.name} className="group relative h-64 overflow-hidden rounded-sm cursor-pointer">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE SELECTION (PRODUCTOS) */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {productos.map((p, index) => (
            <article key={p.id} className="group">
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative">
                <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-black px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase">Analizar</div>
                </div>
              </Link>
              <div className="mt-6 flex justify-between items-start">
                <h3 className="text-xl font-bold tracking-tighter uppercase">{p.nombre}</h3>
                <span className="text-slate-300 font-black italic">/0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. COMPARATIVA RÁPIDA (Simplificada) */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase italic">Top vs Entry Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
            <div className="bg-slate-900 p-12">
              <span className="text-brand font-bold uppercase tracking-widest text-[10px]">Best Performance</span>
              <h4 className="text-2xl font-bold mt-4">Arctis Nova Pro</h4>
              <p className="text-slate-400 mt-4 text-sm">La cumbre del audio inalámbrico. Sin latencia, sin compromisos.</p>
            </div>
            <div className="bg-slate-900 p-12 text-slate-300">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Best Value</span>
              <h4 className="text-2xl font-bold mt-4">Logitech MX Master</h4>
              <p className="text-slate-500 mt-4 text-sm">Ergonomía perfecta para jornadas interminables de trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ (PREGUNTAS) */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-32">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-12 text-center">Common Questions</h2>
        <div className="space-y-12">
          <div>
            <h4 className="font-bold text-lg mb-2 tracking-tight">¿Son análisis pagados?</h4>
            <p className="text-slate-500 text-sm italic">No. Compramos o solicitamos unidades de prueba sin compromiso editorial. Nuestra opinión es libre.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 tracking-tight">¿Cómo funcionan los enlaces?</h4>
            <p className="text-slate-500 text-sm italic">Al comprar desde nuestros links, recibimos una pequeña comisión de Amazon que ayuda a mantener este Journal vivo.</p>
          </div>
        </div>
      </section>

      <Newsletter />

      <footer className="py-20 px-6 bg-white border-t border-slate-100 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Hogar Conectado Journal © 2026</div>
      </footer>
    </main>
  );
}

import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';

export default function Home() {
  const categorias = [
    { name: 'Zona de Trabajo', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Salón', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Cocina', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-44 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light">
            Tecnología <br/>
            <span className="font-black text-brand italic">Esencial.</span>
          </h1>
        </div>
      </section>

      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <div key={cat.name} className="group relative h-64 overflow-hidden rounded-sm">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 border-b border-slate-100 pb-8 flex justify-between items-end">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Colección 2026</h2>
          <span className="italic text-slate-400 text-sm">{productos.length} Objetos analizados</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {productos.map((p, index) => (
            <article key={p.id} className="group">
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative">
                <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-black px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase shadow-xl">Ver Análisis</div>
                </div>
              </Link>
              <div className="mt-6 flex justify-between items-start">
                <h3 className="text-xl font-bold tracking-tighter uppercase text-slate-900">{p.nombre}</h3>
                <span className="text-slate-200 font-black italic text-2xl">/0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase italic">Comparativa de Nivel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
            <div className="bg-slate-900 p-12">
              <span className="text-brand font-bold uppercase tracking-widest text-[10px]">Máximo Rendimiento</span>
              <h4 className="text-2xl font-bold mt-4">Arctis Nova Pro</h4>
              <p className="text-slate-400 mt-4 text-sm leading-relaxed text-balance">La cumbre del audio inalámbrico. Sin latencia, diseñado para la perfección.</p>
            </div>
            <div className="bg-slate-900 p-12">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Mejor Relación Calidad/Precio</span>
              <h4 className="text-2xl font-bold mt-4">Logitech MX Master</h4>
              <p className="text-slate-400 mt-4 text-sm leading-relaxed text-balance">Ergonomía superior para profesionales que no aceptan menos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 py-32 text-slate-900">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-16 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-16">
          <div>
            <h4 className="font-bold text-xl mb-4 tracking-tight">¿Son análisis pagados?</h4>
            <p className="text-slate-500 leading-relaxed">No. Nuestra independencia es lo más valioso. Compramos o solicitamos unidades sin compromisos de opinión.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4 tracking-tight">¿Cómo funcionan los enlaces?</h4>
            <p className="text-slate-500 leading-relaxed">Al usar nuestros enlaces de Amazon, recibimos una pequeña comisión que nos ayuda a mantener este proyecto sin publicidad invasiva.</p>
          </div>
        </div>
      </section>

      <Newsletter />

      <footer className="py-20 px-6 bg-white border-t border-slate-100 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Hogar Conectado © 2026 — Edición Journal</div>
      </footer>
    </main>
  );
}

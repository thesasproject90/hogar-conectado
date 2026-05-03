import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Comparativa from '../components/Comparativa';
import Link from 'next/link';

export default function Home() {
  const categorias = [
    { name: 'Zona de Trabajo', slug: 'trabajo', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Salón', slug: 'salon', img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Cocina', slug: 'cocina', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light">
          Tecnología <br/><span className="font-black text-brand italic">Esencial.</span>
        </h1>
      </section>

      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <Link key={cat.slug} href={`/categorias/${cat.slug}`} className="group relative h-64 overflow-hidden rounded-sm block bg-slate-100">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center border border-white/10">
                <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Comparativa />

      <section id="productos" className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-100">
        <div className="mb-20 flex justify-between items-baseline">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Selección Journal</h2>
          <span className="text-xs italic text-slate-400">{productos.length} Objetos</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {productos.map((p, index) => (
            <article key={p.id} className="group">
              <Link href={`/productos/${p.id}`} className="block aspect-square bg-[#F9F9F9] border border-slate-50 overflow-hidden relative">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-16 mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" 
                />
              </Link>
              <div className="mt-8 flex justify-between items-end">
                <div>
                   <span className="text-[10px] font-black text-brand uppercase tracking-widest">{p.categoria}</span>
                   <h3 className="text-2xl font-bold tracking-tighter uppercase mt-2">{p.nombre}</h3>
                </div>
                <span className="text-slate-200 font-black italic text-4xl leading-none">/0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}

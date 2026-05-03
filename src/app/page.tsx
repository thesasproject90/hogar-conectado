import { productos } from '../data/productos';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
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
      
      {/* HERO */}
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light">
          Tecnología <br/><span className="font-black text-brand italic">Esencial.</span>
        </h1>
      </section>

      {/* SECCIÓN AMBIENTES - CORREGIDA */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/categorias/${cat.slug}`} 
              className="group relative h-64 overflow-hidden rounded-sm block bg-slate-100"
            >
              {/* Imagen de fondo */}
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
              {/* Capa de texto - Usamos pointer-events-none para que el clic pase a través al Link si fuera necesario, 
                  aunque al estar dentro del Link, ahora todo el bloque es clickeable */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <h3 className="text-white font-black uppercase tracking-[0.3em] text-xs pointer-events-none">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATÁLOGO COMPLETO */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-32 border-t border-slate-100">
        <div className="mb-20 flex justify-between items-baseline">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 text-center">La Selección Completa</h2>
          <span className="text-xs italic text-slate-400">{productos.length} Objetos</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {productos.map((p, index) => (
            <article key={p.id} className="group">
              <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-black px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase">Ver Análisis</div>
                </div>
              </Link>
              <div className="mt-8 flex justify-between items-start">
                <h3 className="text-xl font-bold tracking-tighter uppercase leading-none">{p.nombre}</h3>
                <span className="text-slate-200 font-black italic text-2xl leading-none">/0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />

      <footer className="py-20 px-6 bg-white border-t border-slate-100 text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Hogar Conectado © 2026 — Edición Journal</div>
      </footer>
    </main>
  );
}

import { productos } from '../data/productos';
import Link from 'next/link';

export default function Comparativa() {
  const topProductos = productos
    .filter(p => p.categoria === 'trabajo')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 2);

  if (topProductos.length < 2) return null;

  return (
    <section className="py-20 md:py-32 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Análisis Comparativo</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 uppercase italic text-slate-900 text-balance">
            Duelo de <br className="md:hidden" /> Titanes.
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-12 items-center relative">
          
          {/* El "VS" - Ahora visible y centrado en móvil también */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-brand text-white border-4 border-white rounded-full flex items-center justify-center shadow-xl">
              <span className="font-black italic text-sm md:text-xl">VS</span>
            </div>
          </div>

          {topProductos.map((p, index) => (
            <div 
              key={p.id} 
              className={`w-full bg-white p-10 md:p-12 border border-slate-100 transition-all relative
                ${index === 0 ? 'rounded-t-sm md:rounded-sm md:text-right pb-16 md:pb-12' : 'rounded-b-sm md:rounded-sm pt-16 md:pt-12'}
              `}
            >
              <div className={`flex flex-col ${index === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <span className="text-[9px] font-black text-brand uppercase tracking-[0.2em] mb-4 bg-brand/5 px-3 py-1 rounded-full inline-block">
                  {index === 0 ? 'Nuestra Elección' : 'La Alternativa'}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-slate-900 leading-none">
                  {p.nombre}
                </h3>
                <div className="flex gap-0.5 mb-6 text-yellow-400">
                  {"★".repeat(Math.floor(p.rating))}
                </div>
                <p className={`text-slate-500 text-xs leading-relaxed mb-8 max-w-xs ${index === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  {p.descripcion.substring(0, 80)}...
                </p>
                <Link 
                  href={`/productos/${p.id}`} 
                  className="bg-slate-900 text-white md:bg-transparent md:text-slate-900 md:border-b-2 md:border-brand px-6 py-3 md:px-0 md:py-1 font-black text-[10px] uppercase tracking-widest hover:bg-brand transition-all text-center"
                >
                  Ver Análisis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

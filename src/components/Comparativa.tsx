import { productos } from '../data/productos';
import Link from 'next/link';

export default function Comparativa() {
  // Filtramos los dos mejores productos (puedes cambiar 'trabajo' por lo que quieras)
  const topProductos = productos
    .filter(p => p.categoria === 'trabajo')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 2);

  if (topProductos.length < 2) return null;

  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">El Duelo</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 uppercase italic text-slate-900">Head to Head.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* El "VS" decorativo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-2xl">
              <span className="font-black italic text-brand text-xl">VS</span>
            </div>
          </div>

          {topProductos.map((p, index) => (
            <div key={p.id} className={`bg-white p-12 rounded-sm border border-slate-100 transition-all hover:shadow-xl ${index === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                {index === 0 ? 'Opción Elite' : 'Alternativa Pro'}
              </span>
              <h3 className="text-3xl font-black mt-4 mb-6 uppercase tracking-tighter">{p.nombre}</h3>
              <div className="flex gap-1 mb-8 md:justify-end lg:justify-start">
                {"★".repeat(Math.floor(p.rating))}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm ml-auto mr-auto md:ml-auto md:mr-0">
                {p.descripcion.substring(0, 100)}...
              </p>
              <Link href={`/productos/${p.id}`} className="inline-block border-b-2 border-brand pb-1 font-black text-[10px] uppercase tracking-widest hover:text-brand transition-colors">
                Ver Análisis Completo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { productos } from '../data/productos';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
            Mejora tu estilo de vida <br/> <span className="text-[#0052FF]">conectado.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Analizamos la mejor tecnología para tu hogar. Curación experta de dispositivos inteligentes para el 2026.
          </p>
          <Link href="/#productos" className="btn-primary">
            Ver Productos Destacados
          </Link>
        </div>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-slate-900">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div key={p.id} className="group bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all">
              <Link href={`/productos/${p.id}`}>
                <div className="aspect-square mb-6 overflow-hidden rounded-2xl bg-gray-50">
                  <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0052FF]">{p.nombre}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{p.descripcion}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-black">{p.precio}</span>
                  <span className="text-[#0052FF] font-bold text-sm">Ver análisis →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

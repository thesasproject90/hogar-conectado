import { productos } from '../data/productos';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
            Domótica y Tecnología
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Tu casa, ahora <br />
            <span className="text-blue-600 underline decoration-blue-200">más inteligente</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Analizamos y seleccionamos los mejores dispositivos para tu hogar. Calidad garantizada y los precios más bajos de Amazon.
          </p>
        </div>
      </section>

      {/* Grid de Productos */}
      <section id="productos" className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Productos Destacados</h2>
          <div className="h-px flex-1 bg-gray-100 mx-8 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productos.map((p) => (
            <article key={p.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-3xl bg-gray-100 mb-6 border border-gray-50 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Link href={`/productos/${p.id}`}>
                  <img 
                    src={p.imagenUrl} 
                    alt={p.nombre} 
                    className="h-full w-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" 
                  />
                </Link>
                {p.esTop && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-full">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Top Ventas</p>
                  </div>
                )}
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
                  </h3>
                  <p className="font-black text-gray-900">{p.precio}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-4">
                  {"★".repeat(Math.floor(p.rating))}
                  <span className="text-gray-400 ml-1 font-medium">({p.opiniones})</span>
                </div>
                <Link 
                  href={`/productos/${p.id}`}
                  className="block w-full text-center bg-gray-50 group-hover:bg-blue-600 group-hover:text-white text-gray-900 font-bold py-3 rounded-2xl transition-all border border-gray-100 group-hover:border-blue-600"
                >
                  Ver Detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 HogarConectado. Participamos en el Programa de Afiliados de Amazon.</p>
        </div>
      </footer>
    </main>
  );
}

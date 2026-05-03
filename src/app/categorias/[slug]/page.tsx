import { productos } from '../../../data/productos';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Mapeo de nombres para el título
  const nombres: Record<string, string> = {
    'trabajo': 'Zona de Trabajo',
    'salon': 'Salón y Estar',
    'cocina': 'Cocina Inteligente'
  };

  const titulo = nombres[slug] || slug;
  const productosFiltrados = productos.filter(p => p.categoria === slug);

  if (productosFiltrados.length === 0 && !nombres[slug]) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
        <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">Categoría#</span>
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter font-light mb-20 uppercase">
          {titulo.split(' ')[0]} <br/>
          <span className="font-black text-brand italic">{titulo.split(' ').slice(1).join(' ')}.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {productosFiltrados.map((p) => (
            <Link href={`/productos/${p.id}`} key={p.id} className="group">
              <div className="aspect-square bg-[#F9F9F9] border border-slate-50 flex items-center justify-center p-12 mb-6 overflow-hidden">
                <img 
                  src={p.imagenUrl} 
                  alt={p.nombre} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter">{p.nombre}</h3>
              <p className="text-slate-500 text-sm mt-2 line-clamp-2 font-light">{p.descripcion}</p>
              <div className="mt-4 inline-block border-b border-slate-900 pb-1 text-[10px] font-black uppercase tracking-widest">
                Explorar objeto
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

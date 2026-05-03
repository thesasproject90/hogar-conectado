import { productos } from '../../../data/productos';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const nombresCategorias: Record<string, string> = {
    trabajo: 'Zona de Trabajo',
    salon: 'El Salón',
    cocina: 'Cocina Inteligente'
  };

  const titulo = nombresCategorias[slug];
  if (!titulo) notFound();

  const filtrados = productos.filter(p => p.categoria === slug);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand">Categoría</span>
        <h1 className="text-[10vw] font-black tracking-tighter leading-none uppercase italic mb-20">{titulo}.</h1>
        
        {filtrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtrados.map((p) => (
              <article key={p.id} className="group">
                <Link href={`/productos/${p.id}`} className="block aspect-[4/5] bg-[#f5f5f5] overflow-hidden relative">
                  <img src={p.imagenUrl} alt={p.nombre} className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110" />
                </Link>
                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tighter uppercase">{p.nombre}</h3>
                  <p className="text-sm text-slate-400 mt-2">{p.precio}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 italic">Próximamente añadiremos objetos a esta selección.</p>
        )}
      </section>
    </main>
  );
}

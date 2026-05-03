import { productos } from '../../../data/productos';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default async function ProductoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = productos.find((x) => x.id === id);
  if (!p) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand">← Volver</Link>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-50 p-12 rounded-sm overflow-hidden group">
            <img src={p.imagenUrl} alt={p.nombre} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-6">
               <span className="text-brand font-bold uppercase tracking-widest text-[10px]">{p.categoria}</span>
               <div className="flex text-yellow-400 text-sm">
                 {"★".repeat(Math.floor(p.rating))}
                 {p.rating % 1 !== 0 && "½"}
               </div>
            </div>
            
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-6">{p.nombre}</h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 font-light">{p.descripcion}</p>
            
            <div className="flex flex-col gap-4">
              <a href={p.linkAmazon} target="_blank" className="bg-brand text-white text-center py-5 font-black uppercase tracking-widest text-xs hover:bg-black transition-all">
                Comprar por {p.precio}
              </a>
              <a href={p.linkOpiniones} target="_blank" className="border border-slate-200 text-center py-5 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                Leer opiniones certificadas
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

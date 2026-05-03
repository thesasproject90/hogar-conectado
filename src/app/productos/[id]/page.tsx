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
          <div className="bg-[#F9F9F9] p-8 md:p-20 border border-slate-50">
            <img src={p.imagenUrl} alt={p.nombre} className="w-full h-auto mix-blend-multiply" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">{p.nombre}</h1>
            <p className="text-lg text-slate-500 mb-12 font-light">{p.descripcion}</p>
            <a href={p.linkAmazon} target="_blank" className="block bg-slate-900 text-white text-center py-6 font-black uppercase tracking-widest text-xs hover:bg-brand">
              Ver en Amazon
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

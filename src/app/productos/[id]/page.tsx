'use client';
import { productos } from '../../../../src/data/productos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState, use } from 'react';
import Navbar from '../../../../src/components/Navbar';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const p = productos.find((prod) => prod.id === id);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!p) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {isZoomed && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsZoomed(false)}>
          <img src={p.imagenUrl} alt={p.nombre} className="max-w-full max-h-full object-contain" />
        </div>
      )}

      <div className="max-w-6xl mx-auto pt-28 pb-20 px-4">
        <Link href="/" className="text-gray-400 hover:text-blue-600 transition-colors mb-8 inline-flex items-center gap-2 text-sm">
          ← Volver al catálogo
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative group cursor-zoom-in" onClick={() => setIsZoomed(true)}>
            <div className="bg-gray-50 rounded-[2rem] p-8 flex items-center justify-center border border-gray-100 overflow-hidden">
              <img src={p.imagenUrl} alt={p.nombre} className="max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">{p.nombre}</h1>
            
            <a href={p.linkOpiniones} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-6 group/stars">
              <div className="flex text-yellow-400 group-hover/stars:scale-110 transition-transform">
                {"★".repeat(Math.floor(p.rating))}
                {p.rating % 1 !== 0 && "½"}
              </div>
              <span className="text-sm font-bold text-gray-400 group-hover/stars:text-blue-600 transition-colors underline decoration-gray-200">
                {p.opiniones.toLocaleString()} Opiniones
              </span>
            </a>

            <a href={p.linkAmazon} target="_blank" rel="noopener noreferrer" className="text-4xl font-black text-blue-600 mb-8 hover:text-blue-700 transition-colors inline-block">
              {p.precio} <span className="text-lg font-normal text-gray-400">→</span>
            </a>

            <div className="prose prose-blue mb-10">
              <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-blue-100 pl-6">
                {p.descripcion}
              </p>
            </div>

            <div className="space-y-4">
              <a href={p.linkAmazon} target="_blank" rel="noopener noreferrer" className="w-full block bg-gray-900 text-white text-center font-bold py-5 rounded-2xl shadow-xl hover:bg-blue-600 transition-all transform active:scale-95">
                COMPRAR EN AMAZON
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

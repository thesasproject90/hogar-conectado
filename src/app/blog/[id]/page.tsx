'use client';
import { posts } from '../../../data/blog';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = posts.find((p) => p.id === id);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {isZoomed && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsZoomed(false)}>
          <img src={post.imagen} alt={post.titulo} className="max-w-full max-h-full object-contain shadow-2xl" />
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}
      <article className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          ← Volver al blog
        </Link>
        <header className="mb-12">
          <p className="text-gray-400 text-sm mb-4">{post.fecha}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">{post.titulo}</h1>
          <div className="rounded-[2.5rem] overflow-hidden bg-gray-50 aspect-video mb-12 shadow-xl border border-gray-100 cursor-zoom-in group" onClick={() => setIsZoomed(true)}>
            <img src={post.imagen} alt={post.titulo} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
          </div>
        </header>
        <div className="prose prose-lg prose-blue text-gray-600 leading-relaxed italic border-l-4 border-blue-50 pl-8 mb-12">
          {post.contenido}
        </div>
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-black text-blue-900 text-xl mb-2">¿Te ha gustado este análisis?</h3>
            <p className="text-blue-800 text-sm">Echa un vistazo a nuestra selección de productos destacados en la tienda.</p>
          </div>
          <Link href="/" className="whitespace-nowrap bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-gray-900 transition-all transform active:scale-95 shadow-lg shadow-blue-200">
            Ver productos
          </Link>
        </div>
      </article>
    </main>
  );
}

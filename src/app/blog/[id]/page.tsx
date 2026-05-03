'use client';
import { posts } from '../../../data/blog';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = posts.find((p) => p.id === id);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 inline-block hover:underline">
          ← Volver al blog
        </Link>
        
        <header className="mb-12">
          <p className="text-gray-400 text-sm mb-4">{post.fecha}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
            {post.titulo}
          </h1>
          <div className="rounded-[2.5rem] overflow-hidden bg-gray-100 aspect-video mb-12 shadow-2xl">
            <img src={post.imagen} alt={post.titulo} className="w-full h-full object-cover" />
          </div>
        </header>

        <div className="prose prose-lg prose-blue text-gray-600 leading-relaxed italic">
          {post.contenido}
          <p className="mt-8 not-italic font-medium text-gray-900">
            En Hogar Conectado creemos que la tecnología debe facilitarte la vida, no complicarla. Por eso, siempre recomendamos productos que hemos analizado a fondo.
          </p>
        </div>
        
        <div className="mt-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <h3 className="font-black text-blue-900 mb-2">¿Te ha gustado este análisis?</h3>
          <p className="text-blue-800 text-sm mb-4">Echa un vistazo a nuestra selección de productos destacados en la tienda.</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Ver productos
          </Link>
        </div>
      </article>
    </main>
  );
}

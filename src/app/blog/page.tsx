import { blogPosts } from '../../data/blog';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] tracking-tighter font-light mb-20">
          Journal <br/><span className="font-black text-brand italic">Edition.</span>
        </h1>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-video bg-slate-100 overflow-hidden mb-8">
                  <img src={post.imagenUrl} alt={post.titulo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand">{post.categoria}</span>
                <h2 className="text-3xl font-bold tracking-tighter uppercase mt-4 mb-4">{post.titulo}</h2>
                <p className="text-slate-500 mb-6">{post.extracto}</p>
                <Link href={`/blog/${post.id}`} className="inline-block border-b-2 border-slate-900 pb-1 font-black text-[10px] uppercase tracking-widest">Leer más</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 border-t border-slate-100 text-center">
            <p className="text-slate-400 italic uppercase tracking-[0.3em] text-xs font-black">Próximamente nuevas ediciones</p>
          </div>
        )}
      </section>
    </main>
  );
}

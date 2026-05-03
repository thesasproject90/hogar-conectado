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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.id}`}>
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden mb-8 rounded-sm">
                  <img 
                    src={post.imagenUrl} 
                    alt={post.titulo} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">{post.categoria}</span>
                <h2 className="text-3xl font-bold tracking-tighter uppercase mt-4 mb-4 leading-none group-hover:italic transition-all">
                  {post.titulo}
                </h2>
                <p className="text-slate-500 mb-6 font-light leading-relaxed">{post.extracto}</p>
                <span className="inline-block border-b-2 border-slate-900 pb-1 font-black text-[10px] uppercase tracking-widest">
                  Leer Edición
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

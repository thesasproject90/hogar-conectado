import { blogPosts } from '../../data/blog';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter font-light mb-20 uppercase">
          Journal <br/><span className="font-black text-brand italic">Edition.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`}>
                <div className="aspect-video bg-slate-100 overflow-hidden mb-8">
                  <img src={post.imagenUrl} alt={post.titulo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter uppercase">{post.titulo}</h2>
                <p className="text-slate-500 mt-4 mb-6">{post.extracto}</p>
                <span className="border-b-2 border-slate-900 pb-1 font-black text-[10px] uppercase">Leer más</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

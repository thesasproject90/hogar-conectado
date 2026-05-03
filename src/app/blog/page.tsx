import { posts } from '../../data/blog'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: 'var(--cream)' }}>
      <Navbar />
      <section className="pt-32 pb-20 px-6" style={{ backgroundColor: 'var(--night)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <div className="divider-amber" />
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>Journal</span>
          </div>
          <h1 className="text-5xl md:text-7xl tracking-tighter animate-fade-up-delay-1" style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)' }}>
            Ideas sobre<br /><span style={{ color: 'var(--amber)' }}>tecnología</span> útil.
          </h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-0" style={{ border: '1px solid var(--mist)' }}>
          {posts.map((post, i) => (
            <article key={post.id} className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0" style={{ borderBottom: i < posts.length - 1 ? '1px solid var(--mist)' : 'none' }}>
              <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span className="badge">Artículo</span>
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>{post.fecha}</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl tracking-tighter mb-3 leading-tight transition-colors" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>
                    <Link href={`/blog/${post.id}`}>{post.titulo}</Link>
                  </h2>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)' }}>{post.resumen}</p>
                </div>
                <Link href={`/blog/${post.id}`} className="text-xs uppercase tracking-widest self-start transition-colors" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>Leer artículo →</Link>
              </div>
              <div className="hidden md:block w-64 overflow-hidden" style={{ borderLeft: '1px solid var(--mist)' }}>
                <img src={post.imagen} alt={post.titulo} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="py-16 px-6" style={{ backgroundColor: 'var(--night)', borderTop: '1px solid rgba(232,197,71,0.15)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>HOGAR<span style={{ color: 'var(--amber)' }}>.</span><span style={{ fontWeight: 300 }}>conectado</span></span>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>
            <Link href="/" className="hover:text-amber">Catálogo</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
            <span style={{ color: 'var(--amber)' }}>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

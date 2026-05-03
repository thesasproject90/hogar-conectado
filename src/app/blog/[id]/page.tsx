import { posts } from '../../../data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = posts.find((x) => x.id === id)
  if (!post) notFound()

  return (
    <main style={{ backgroundColor: 'var(--cream)' }}>
      <Navbar />
      <section className="pt-32 pb-0 px-6" style={{ backgroundColor: 'var(--night)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8"><span className="badge">Artículo</span><span className="text-xs uppercase tracking-widest" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>{post.fecha}</span></div>
          <h1 className="text-4xl md:text-6xl tracking-tighter leading-tight pb-14" style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)' }}>{post.titulo}</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-full overflow-hidden" style={{ height: '360px', border: '1px solid var(--mist)', borderTop: 'none' }}>
          <img src={post.imagen} alt={post.titulo} className="w-full h-full object-cover" />
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xl md:text-2xl leading-relaxed mb-12 pb-12" style={{ color: 'var(--night)', fontFamily: 'var(--font-body)', fontWeight: 300, borderBottom: '1px solid var(--mist)' }}>{post.resumen}</p>
        <div className="text-base leading-loose" style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)' }}>
          {post.contenido.split('\n').map((parrafo, i) => parrafo.trim() ? (<p key={i} className="mb-6">{parrafo}</p>) : null)}
        </div>
        <div className="mt-16 pt-10 flex items-center justify-between" style={{ borderTop: '1px solid var(--mist)' }}>
          <Link href="/blog" className="text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>← Volver al Journal</Link>
          <div className="divider-amber" />
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

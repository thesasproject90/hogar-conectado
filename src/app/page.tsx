import { productos } from '../data/productos'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--cream)' }}>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-end px-6 pb-20 pt-32" style={{ backgroundColor: 'var(--night)' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-10 animate-fade-up">
            <div className="divider-amber" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>Selección editorial 2026</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] leading-none tracking-tighter mb-8 animate-fade-up-delay-1" style={{ color: 'var(--cream)', fontFamily: 'var(--font-display)' }}>
            Tecnología<br /><span style={{ color: 'var(--amber)' }}>con</span> criterio.
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up-delay-2">
            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'var(--mist)', fontFamily: 'var(--font-body)' }}>Analizamos cada dispositivo con criterio editorial. Sin patrocinios. Sin relleno. Solo lo que merece entrar en tu hogar.</p>
            <div className="flex items-center gap-4">
              <Link href="/#productos" className="btn-primary">Ver catálogo →</Link>
              <Link href="/blog" className="btn-ghost" style={{ borderColor: 'var(--mist)', color: 'var(--mist)' }}>Journal</Link>
            </div>
          </div>
          <div className="mt-20 pt-8 flex gap-12 animate-fade-up-delay-3" style={{ borderTop: '1px solid rgba(232,228,220,0.15)' }}>
            {[{ num: `${productos.length}`, label: 'Productos analizados' }, { num: '100%', label: 'Selección independiente' }, { num: '2026', label: 'Edición actual' }].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-800 tracking-tighter" style={{ color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>{item.num}</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="productos" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-16">
          <div><div className="divider-amber mb-4" /><h2 className="text-4xl md:text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>Catálogo</h2></div>
          <span className="text-xs uppercase tracking-widest hidden md:block" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>{productos.length} productos</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--mist)' }}>
          {productos.map((p) => (
            <article key={p.id} className="group relative flex flex-col" style={{ backgroundColor: 'var(--cream)' }}>
              <Link href={`/productos/${p.id}`} className="block overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
                <div className="aspect-square w-full overflow-hidden">
                  <img src={p.imagenUrl} alt={p.nombre} className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Link>
              {p.esTop && <div className="absolute top-4 left-4"><span className="badge">Destacado</span></div>}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}><Link href={`/productos/${p.id}`}>{p.nombre}</Link></h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)' }}>{p.descripcion}</p>
                <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid var(--mist)' }}>
                  <a href={p.linkAmazon} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.7rem' }}>Ver precio</a>
                  <Link href={`/productos/${p.id}`} className="text-xs uppercase tracking-widest" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>Análisis →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="py-16 px-6" style={{ backgroundColor: 'var(--night)', borderTop: '1px solid rgba(232,197,71,0.15)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>HOGAR<span style={{ color: 'var(--amber)' }}>.</span><span style={{ fontWeight: 300 }}>conectado</span></span>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>
            <Link href="/blog" className="hover:text-amber transition-colors">Journal</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
            <span style={{ color: 'var(--amber)' }}>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

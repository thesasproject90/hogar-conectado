import { productos } from '../../../data/productos'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const p = productos.find((x) => x.id === id)
  if (!p) notFound()

  return (
    <main style={{ backgroundColor: 'var(--cream)' }}>
      <Navbar />
      <div className="pt-24 pb-0 px-6" style={{ borderBottom: '1px solid var(--mist)' }}>
        <div className="max-w-7xl mx-auto py-4 flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>
          <Link href="/" style={{ color: 'inherit' }}>Catálogo</Link>
          <span style={{ color: 'var(--mist)' }}>—</span>
          <span style={{ color: 'var(--night)' }}>{p.nombre}</span>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid var(--mist)' }}>
          <div className="flex items-center justify-center p-16 relative" style={{ backgroundColor: 'var(--white)', borderRight: '1px solid var(--mist)' }}>
            {p.esTop && <div className="absolute top-6 left-6"><span className="badge">Destacado</span></div>}
            <img src={p.imagenUrl} alt={p.nombre} className="w-full max-w-sm object-contain transition-transform duration-700 hover:scale-105" style={{ maxHeight: '400px' }} />
          </div>
          <div className="p-10 lg:p-14 flex flex-col justify-between gap-10">
            <div>
              <div className="divider-amber mb-6" />
              <h1 className="text-3xl md:text-4xl tracking-tighter mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>{p.nombre}</h1>
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)' }}>{p.descripcion}</p>
            </div>
            <div className="flex items-center gap-6 py-6" style={{ borderTop: '1px solid var(--mist)', borderBottom: '1px solid var(--mist)' }}>
              <div>
                <p className="text-4xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>{p.rating}<span className="text-xl" style={{ color: 'var(--amber)' }}>/5</span></p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>Valoración media</p>
              </div>
              <div className="w-px self-stretch" style={{ backgroundColor: 'var(--mist)' }} />
              <div>
                <p className="text-4xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>{p.opiniones.toLocaleString('es-ES')}</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>Opiniones</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--night)' }}>{p.precio}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={p.linkAmazon} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">Comprar en Amazon →</a>
                <a href={p.linkOpiniones} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 justify-center">Ver opiniones</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <Link href="/" className="text-xs uppercase tracking-widest transition-colors" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>← Volver al catálogo</Link>
      </div>
      <footer className="py-16 px-6" style={{ backgroundColor: 'var(--night)', borderTop: '1px solid rgba(232,197,71,0.15)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-800 tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>HOGAR<span style={{ color: 'var(--amber)' }}>.</span><span style={{ fontWeight: 300 }}>conectado</span></span>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>
            <Link href="/blog" style={{ color: 'inherit' }}>Journal</Link>
            <Link href="/aviso-legal" style={{ color: 'inherit' }}>Aviso legal</Link>
            <span style={{ color: 'var(--amber)' }}>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

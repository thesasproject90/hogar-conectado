import { productos } from '../../../data/productos'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'

export default function ProductoPage({ params }: { params: { id: string } }) {
  const p = productos.find((x) => x.id === params.id)
  if (!p) notFound()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 max-w-7xl mx-auto px-6">
        <Link href="/" className="text-blue-600 font-bold mb-8 inline-block">← Volver al catálogo</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-3xl p-10">
            <img src={p.imagenUrl} alt={p.nombre} className="w-full h-auto object-contain" />
          </div>
          <div>
            <h1 className="text-4xl font-black mb-4">{p.nombre}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-6">{p.precio}</p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{p.descripcion}</p>
            <div className="flex gap-4">
              <a href={p.linkAmazon} target="_blank" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center flex-1">Comprar en Amazon</a>
              <a href={p.linkOpiniones} target="_blank" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-center flex-1">Ver Opiniones</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

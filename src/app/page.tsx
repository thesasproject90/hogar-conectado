import { productos } from '../data/productos';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-32 pb-20 px-6 text-center bg-slate-50">
        <h1 className="text-5xl font-black mb-6">
          Hogar <span className="text-blue-600">Conectado</span>
        </h1>
        <Link href="/#productos" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
          Ver Catálogo
        </Link>
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div key={p.id} className="border border-gray-100 p-6 rounded-2xl shadow-sm">
              <img src={p.imagenUrl} alt={p.nombre} className="w-full h-48 object-contain mb-4" />
              <h3 className="font-bold text-xl">{p.nombre}</h3>
              <p className="text-blue-600 font-bold mt-2">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

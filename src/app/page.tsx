import { productos } from '../data/productos';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl font-black text-slate-900 mb-4">
          Hogar <span className="text-blue-600">Conectado</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10">La mejor tecnología para tu casa.</p>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div key={p.id} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <img src={p.imagenUrl} alt={p.nombre} className="h-48 w-full object-contain mb-4" />
              <h3 className="text-xl font-bold">{p.nombre}</h3>
              <p className="text-blue-600 font-bold mt-2">{p.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import { productos } from '../../../../src/data/productos';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 mb-6 inline-block font-medium">
          ← Volver al inicio
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-6 rounded-3xl">
          <img src={producto.imagenUrl} alt={producto.nombre} className="rounded-2xl w-full shadow-sm" />
          <div>
            <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
            <p className="text-2xl text-blue-600 font-bold mb-4">{producto.precio}</p>
            <p className="text-gray-600 mb-8">{producto.descripcion}</p>
            <a href={producto.linkAmazon} target="_blank" className="block bg-orange-500 text-white text-center py-4 rounded-xl font-bold">
              Ver en Amazon
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

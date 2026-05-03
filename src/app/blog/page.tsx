import { posts } from '../../data/blog';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-5xl mx-auto pt-32 pb-20 px-4">
        <h1 className="text-5xl font-black text-gray-900 mb-12 italic">BLOG_</h1>
        <div className="grid gap-16">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group grid md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-3xl bg-gray-100 aspect-video">
                <img src={post.imagen} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <p className="text-blue-600 font-bold text-xs uppercase mb-2">{post.fecha}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{post.titulo}</h2>
                <p className="text-gray-500 leading-relaxed">{post.resumen}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

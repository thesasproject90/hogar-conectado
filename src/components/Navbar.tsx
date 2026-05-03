import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center text-white font-black text-xl">H</div>
          <span className="text-xl font-bold tracking-tight">hogar<span className="text-[#0052FF]">conectado</span></span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#0052FF]">Catálogo</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#0052FF]">Blog</Link>
          <Link href="/#productos" className="bg-[#0052FF] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            Explorar
          </Link>
        </div>
      </div>
    </nav>
  );
}

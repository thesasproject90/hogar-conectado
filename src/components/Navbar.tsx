import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold">H</div>
          <span className="text-lg font-bold tracking-tight text-slate-900">hogar<span className="text-brand">conectado</span></span>
        </Link>
        <div className="flex gap-4">
          <Link href="/#productos" className="text-sm font-bold text-brand">Catálogo</Link>
        </div>
      </div>
    </nav>
  );
}

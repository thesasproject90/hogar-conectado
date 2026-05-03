import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* LOGO SVG UNICO - HOGAR CONECTADO */}
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand transition-transform group-hover:rotate-[-10deg]">
            <path d="M25 20V80" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
            <path d="M75 20V80" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
            <path d="M25 50H75" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
            <circle cx="25" cy="50" r="8" fill="white" stroke="currentColor" stroke-width="4"/>
            <circle cx="75" cy="50" r="8" fill="white" stroke="currentColor" stroke-width="4"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
            <path d="M50 50L75 20M50 50L75 80" stroke="currentColor" stroke-width="3" stroke-dasharray="6 6"/>
          </svg>
          <span className="text-2xl font-black tracking-tighter text-gray-950">
            hogar<span className="text-brand">conectado</span>
          
        </Link>
        <div className="flex items-center gap-8 text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-brand transition-colors">Catálogo</Link>
          <Link href="/blog" className="hover:text-brand transition-colors">Journal</Link>
          <Link href="#productos" className="bg-brand text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-950 transition-all shadow-sm shadow-blue-200 hover:shadow-lg hover:shadow-gray-300 transform active:scale-95">
            Explorar
          </Link>
        </div>
      </div>
    </nav>
  );
}

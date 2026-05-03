import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-black transition-transform group-hover:scale-110">H</div>
          <span className="text-xl font-black tracking-tighter uppercase text-slate-900">hogar<span className="text-brand">conectado</span></span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <Link href="/#categorias" className="hover:text-brand transition-colors">Ambientes</Link>
          <Link href="/#productos" className="hover:text-brand transition-colors">Selección</Link>
          <Link href="/blog" className="hover:text-brand transition-colors">Artículos</Link>
          <Link href="/#faq" className="bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-brand transition-all">Ayuda</Link>
        </div>
      </div>
    </nav>
  );
}

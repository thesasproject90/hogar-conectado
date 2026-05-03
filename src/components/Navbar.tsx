import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-blue-600 italic">
          HOGAR<span className="text-gray-900">CONECTADO</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <Link href="/aviso-legal" className="hover:text-blue-600 transition-colors italic opacity-70 text-xs">Legal</Link>
        </div>
      </div>
    </nav>
  );
}

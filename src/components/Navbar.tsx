"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Ambientes', href: '/#categorias' },
    { name: 'Selección', href: '/#productos' },
    { name: 'Artículos', href: '/blog' },
    { name: 'Ayuda', href: '/#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-[110]">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-black transition-transform group-hover:scale-110">H</div>
          <span className="text-xl font-black tracking-tighter uppercase text-slate-900">hogar<span className="text-brand">conectado</span></span>
        </Link>
        
        {/* Menú Desktop */}
        <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón Menú Móvil (Hamburguesa) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Overlay Menú Móvil */}
        <div className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black uppercase tracking-tighter text-slate-900 hover:text-brand"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            Hogar Conectado © 2026
          </div>
        </div>
      </div>
    </nav>
  );
}

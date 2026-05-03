"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Ambientes', href: '/#categorias' },
    { name: 'Selección', href: '/#productos' },
    { name: 'Artículos', href: '/blog' },
    { name: 'Ayuda', href: '/#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[200] bg-white border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        
        {/* Logo - Siempre visible y por encima */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 z-[210]">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-black">H</div>
          <span className="text-xl font-black tracking-tighter uppercase text-slate-900">hogar<span className="text-brand">conectado</span></span>
        </Link>
        
        {/* Menú Desktop (Se oculta en móvil) */}
        <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón Menú Móvil (Hamburguesa) - Z-index muy alto */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[210] flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Alternar menú"
        >
          <div className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* OVERLAY MENÚ MÓVIL - Ahora es BLANCO PURO y ocupa todo */}
        <div className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-slate-900 active:text-brand"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Detalles extra en el menú para que no parezca vacío */}
            <div className="mt-10 pt-10 border-t border-slate-100 w-40 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 leading-loose">
                Edición <br/> Journal 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

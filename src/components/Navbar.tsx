'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full z-50"
        style={{ backgroundColor: 'var(--night)', borderBottom: '1px solid rgba(232,197,71,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-display text-xl font-800 tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              <span style={{ color: 'var(--cream)' }}>HOGAR</span>
              <span style={{ color: 'var(--amber)' }}>.</span>
              <span style={{ color: 'var(--cream)', fontWeight: 300, fontSize: '0.9em' }}>conectado</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>Catálogo</Link>
            <Link href="/blog" className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300" style={{ color: 'var(--mist)', fontFamily: 'var(--font-display)' }}>Journal</Link>
            <Link href="/#productos" className="btn-primary" style={{ padding: '0.6rem 1.4rem' }}>Ver productos</Link>
          </div>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menú">
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--amber)', transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--amber)', opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all duration-300" style={{ backgroundColor: 'var(--amber)', transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
          </button>
        </div>
      </nav>
      <div className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-500" style={{ backgroundColor: 'var(--night)', opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none' }}>
        <Link href="/" onClick={() => setOpen(false)} className="text-4xl font-display font-800 tracking-tighter transition-colors" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>Catálogo</Link>
        <Link href="/blog" onClick={() => setOpen(false)} className="text-4xl font-display font-800 tracking-tighter transition-colors" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)' }}>Journal</Link>
        <Link href="/#productos" onClick={() => setOpen(false)} className="btn-primary mt-4">Ver productos</Link>
      </div>
    </>
  )
}

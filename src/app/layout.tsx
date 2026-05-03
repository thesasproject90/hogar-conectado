import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hogar Conectado | Los mejores productos para tu hogar',
  description: 'Análisis y selección de la mejor tecnología para tu casa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '../components/CookieBanner'

export const metadata: Metadata = {
  title: 'Hogar Conectado — Tecnología con criterio',
  description: 'Selección editorial de los mejores dispositivos para tu hogar. Sin ruido, solo lo que merece la pena.',
  openGraph: {
    title: 'Hogar Conectado',
    description: 'Tecnología seleccionada con criterio editorial.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

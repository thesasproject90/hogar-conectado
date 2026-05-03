import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hogar Conectado',
  description: 'Tecnología para tu hogar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}

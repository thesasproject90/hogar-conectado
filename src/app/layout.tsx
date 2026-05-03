import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hogar Conectado | Expertos en Domótica",
  description: "La mejor selección de productos inteligentes para tu casa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <span className="text-xl font-bold text-blue-600">Hogar Conectado</span>
              <div className="hidden md:flex space-x-8 text-sm">
                <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Inicio</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Iluminación</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Seguridad</a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-white border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-gray-400 italic mb-4">
              "En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables."
            </p>
            <p className="text-xs text-gray-400">© 2026 Hogar Conectado.</p>
          </div>
        </footer>
      </body>
    </html>

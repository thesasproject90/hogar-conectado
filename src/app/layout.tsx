import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hogar Conectado | Tu Guía de Domótica",
  description: "Los mejores productos para automatizar tu casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased`}>
        {/* Barra de Navegación */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600">Hogar Conectado</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Inicio</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Iluminación</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Seguridad</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Altavoces</a>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Pie de Página con Aviso Legal */}
        <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Sobre nosotros</h3>
                <p className="mt-4 text-gray-500 text-sm">
                  Analizamos la mejor tecnología para tu hogar inteligente para que ahorres tiempo y dinero.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Categorías</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600">Bombillas Inteligentes</a></li>
                  <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600">Cámaras WiFi</a></li>
                  <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600">Asistentes de Voz</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
                <p className="mt-4 text-xs text-gray-400 italic">
                  &quot;En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.&quot;
                </p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 text-center">
              <p className="text-xs text-gray-400">© 2026 Hogar Conectado. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>

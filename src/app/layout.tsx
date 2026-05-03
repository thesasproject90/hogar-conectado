import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hogar Conectado",
  description: "Tu tienda de domótica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-white border-b p-4">
          <div className="max-w-7xl mx-auto font-bold text-blue-600">
            Hogar Conectado
          </div>
        </nav>
        {children}
        <footer className="p-8 text-center text-xs text-gray-400 border-t mt-10">
          <p>"En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas."</p>
        </footer>
      </body>
    </html>
  );
}

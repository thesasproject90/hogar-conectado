import Navbar from '../../components/Navbar';

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Aviso Legal y Política de Privacidad</h1>
        
        <div className="prose prose-blue text-gray-600 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">1. Información General</h2>
            <p>
              En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:
            </p>
            <p>
              Este sitio web **Hogar Conectado** es un portal dedicado al análisis de productos tecnológicos y domóticos.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-4">2. Divulgación de Afiliación de Amazon</h2>
            <p className="text-blue-800 text-sm">
              En calidad de Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables. 
              Esto significa que si haces clic en un enlace de producto y realizas una compra, nosotros recibimos una pequeña comisión sin que a ti te cueste un céntimo de más.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">3. Propiedad Intelectual</h2>
            <p>
              Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de Hogar Conectado. Queda prohibida su reproducción, distribución o comunicación pública sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">4. Protección de Datos</h2>
            <p>
              Este sitio web no almacena datos personales de los usuarios ni utiliza cookies propias para la recogida de información privada. Las cookies utilizadas corresponden a terceros (Amazon) para el correcto funcionamiento del programa de afiliados.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

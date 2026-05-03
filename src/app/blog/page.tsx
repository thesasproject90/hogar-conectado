import Navbar from '../../components/Navbar';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="pt-44 pb-24 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter font-light mb-20 uppercase">
          Journal <br/><span className="font-black text-brand italic">Edition.</span>
        </h1>
        <div className="py-20 border-t border-slate-100">
          <p className="text-slate-400 italic uppercase tracking-[0.3em] text-[10px] font-black text-slate-300">
            Nuevas ediciones en preparación
          </p>
        </div>
      </section>
    </main>
  );
}

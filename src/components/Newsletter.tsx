"use client";
export default function Newsletter() {
  return (
    <section className="py-40 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-brand font-bold uppercase tracking-[0.4em] text-[10px]">La Revista</span>
        <h2 className="text-4xl md:text-7xl font-light tracking-tighter mt-8 mb-12">
          Recibe nuestra <br/><span className="font-black italic">selección semanal.</span>
        </h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input type="email" placeholder="TU CORREO ELECTRÓNICO" className="bg-transparent border-b border-slate-700 px-4 py-4 w-full md:w-96 focus:outline-none focus:border-brand text-center uppercase text-xs tracking-widest outline-none" />
          <button className="bg-white text-black px-12 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-brand hover:text-white transition-all">Suscribirme</button>
        </form>
      </div>
    </section>
  );
}

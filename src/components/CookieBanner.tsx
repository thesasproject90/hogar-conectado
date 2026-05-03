'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[200] md:left-auto md:max-w-sm animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 shadow-blue-100">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-2xl">
            <span className="text-2xl">🍪</span>
          </div>
          <div>
            <h4 className="text-sm font-black text-gray-900 mb-1 tracking-tight">Aviso de Cookies</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Usamos cookies de terceros (Amazon) para que puedas comprar productos y nosotros recibamos nuestra pequeña comisión.
            </p>
            <button 
              onClick={acceptCookies}
              className="w-full bg-gray-900 text-white text-[10px] font-black py-3 rounded-xl hover:bg-blue-600 transition-all uppercase tracking-widest"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

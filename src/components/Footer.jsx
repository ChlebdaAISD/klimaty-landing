import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const int = setInterval(update, 60000);
    return () => clearInterval(int);
  }, []);

  return (
    <footer className="bg-[#09090b] pt-20 pb-10 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12 mb-10">
        <div className="flex-1">
          <img 
            src="/assets/loga/biale.png" 
            alt="klimaTY Logo" 
            className="h-10 mb-6"
          />
          <p className="text-zinc-500 text-sm max-w-sm font-sans leading-relaxed">
            Nie sprzedajemy tylko klimatyzacji. Dostarczamy precyzyjne środowisko termiczne do domów, mieszkań i biur z certyfikacją montażu.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 min-w-[150px]">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Nawigacja</h5>
          <span className="text-zinc-500 font-sans text-sm font-medium cursor-default select-none">Usługi</span>
          <span className="text-zinc-500 font-sans text-sm font-medium cursor-default select-none">O nas</span>
          <span className="text-zinc-500 font-sans text-sm font-medium cursor-default select-none">Portfolio</span>
          <span className="text-zinc-500 font-sans text-sm font-medium cursor-default select-none">Kontakt</span>
        </div>
        
        <div className="flex flex-col gap-4 min-w-[150px]">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Social</h5>
          <a href="#" className="text-white hover:text-accent transition-colors font-sans text-sm font-medium">Facebook</a>
          <a href="#" className="text-white hover:text-accent transition-colors font-sans text-sm font-medium">Instagram</a>
          <a href="#" className="text-white hover:text-accent transition-colors font-sans text-sm font-medium">Google Maps</a>
        </div>
        
        <div className="flex flex-col gap-4 min-w-[200px]">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Dane firmy</h5>
          <p className="text-white font-sans text-sm font-medium">klimaTY</p>
          <p className="text-zinc-400 font-sans text-sm">Kraków i okolice</p>
          <a href="tel:883297379" className="text-accent hover:text-white transition-colors font-mono font-bold">883 297 379</a>
          <div className="mt-2">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Obszar działania</h5>
            <p className="text-zinc-500 text-xs font-sans leading-relaxed">
              Kraków · Wieliczka · Bochnia · Zielonki · Michałowice · Bibice · województwo małopolskie
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 pt-6 border-t border-white/5">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} klimaTY. Wszystkie prawa zastrzeżone.
        </p>

        <a 
          href="https://www.aisolutions.design/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Projekt i wykonanie:</span>
          <img 
            src="/assets/loga/aisd_white_black_bckg.png" 
            alt="AI Solutions Design" 
            className="h-4 opacity-40 group-hover:opacity-100 transition-opacity mix-blend-screen"
          />
        </a>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-none bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-400">KRK {time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../data/cities';

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
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-12 mb-10">
        <div className="lg:col-span-2">
          <Link to="/">
            <img
              src="/assets/loga/biale.png"
              alt="klimaTY Logo"
              className="h-10 mb-6"
            />
          </Link>
          <p className="text-zinc-500 text-sm max-w-sm font-sans leading-relaxed mb-6">
            Nie sprzedajemy tylko klimatyzacji. Dostarczamy precyzyjne środowisko termiczne do domów, mieszkań i biur z certyfikacją montażu.
          </p>
          <a href="tel:883297379" className="text-accent hover:text-white transition-colors font-mono font-bold text-lg block mb-2">883 297 379</a>
          <a href="mailto:kontakt@klima-ty.pl" className="text-zinc-400 hover:text-white transition-colors font-sans text-sm">kontakt@klima-ty.pl</a>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Usługi</h5>
          <Link to="/uslugi/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Wszystkie usługi</Link>
          <Link to="/montaz-klimatyzacji/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Montaż klimatyzacji</Link>
          <Link to="/serwis-klimatyzacji/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Serwis klimatyzacji</Link>
          <Link to="/sprzedaz-klimatyzacji/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Sprzedaż klimatyzacji</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Firma</h5>
          <Link to="/o-nas/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">O nas</Link>
          <Link to="/realizacje/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Realizacje</Link>
          <Link to="/opinie/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Opinie</Link>
          <Link to="/faq/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">FAQ</Link>
          <Link to="/kontakt/" className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium">Kontakt</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">Obsługujemy</h5>
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}/`}
              className="text-zinc-400 hover:text-accent transition-colors font-sans text-sm font-medium"
            >
              {city.name}
            </Link>
          ))}
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
              <span className="relative inline-flex rounded-none h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-400">KRK {time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

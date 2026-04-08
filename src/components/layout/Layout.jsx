import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import FloatingPhone from '../ui/FloatingPhone';
import MotionButton from '../ui/MotionButton';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { label: 'Usługi', to: '/uslugi/' },
    { label: 'O nas', to: '/o-nas/' },
    { label: 'Realizacje', to: '/realizacje/' },
    { label: 'Opinie', to: '/opinie/' },
    { label: 'Kontakt', to: '/kontakt/' },
  ];

  return (
    <div className="relative min-h-screen bg-background text-text-dark font-sans selection:bg-accent selection:text-white overflow-x-clip">
      {/* Mobile slide-out drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-[80vw] max-w-[320px] bg-[#09090b] border-r border-white/10 z-[60] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col pt-8 px-8 pb-12 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/assets/loga/biale.png"
              alt="klimaTY Logo"
              className="h-8 object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-zinc-500 hover:text-white transition-colors"
            aria-label="Zamknij menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 mb-auto">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-2xl font-bold font-heading tracking-tight text-white hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8">
          <MotionButton href="tel:883297379" label="Zadzwoń" variant="accent" context="dark" />
          <a href="mailto:kontakt@klima-ty.pl" className="text-sm font-mono text-zinc-400 hover:text-white transition-colors">kontakt@klima-ty.pl</a>
        </div>
      </div>

      {/* Main Page Wrapper */}
      <div
        className={`relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:left-0 ${
          isMenuOpen ? 'left-[80vw] sm:left-[320px]' : 'left-0'
        }`}
      >
        {isMenuOpen && (
          <div
            className="absolute inset-0 z-[55] bg-black/20 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <Sidebar isMenuOpen={isMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <FloatingPhone />
        <main className="lg:pl-20">
          <Outlet />
        </main>
        <div className="lg:pl-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

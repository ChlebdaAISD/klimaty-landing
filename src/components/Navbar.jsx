import React, { useEffect, useRef, useState } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import MotionButton from './ui/MotionButton';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceSubItems = [
    { label: 'Montaż klimatyzacji', to: '/montaz-klimatyzacji/' },
    { label: 'Serwis klimatyzacji', to: '/serwis-klimatyzacji/' },
    { label: 'Sprzedaż klimatyzacji', to: '/sprzedaz-klimatyzacji/' },
  ];

  const menuItems = [
    { label: 'Usługi', to: '/uslugi/', hasDropdown: true },
    { label: 'O nas', to: '/o-nas/' },
    { label: 'Realizacje', to: '/realizacje/' },
    { label: 'Opinie', to: '/opinie/' },
    { label: 'Kontakt', to: '/kontakt/' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-4 right-4 md:left-[100px] md:right-8 xl:left-[calc(50%+40px)] xl:-translate-x-1/2 xl:w-[1280px] z-50 transition-all duration-300 rounded-none ${
        isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >

      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src="/assets/loga/Przezroczysty(2).png"
            alt="klimaTY Logo"
            className="h-10 md:h-14 transition-transform group-hover:scale-105 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-nowrap items-center gap-6 xl:gap-8">
          {menuItems.map((item, i) =>
            item.hasDropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 text-sm font-medium tracking-tight text-text-dark hover:text-accent transition-colors"
                >
                  {item.label}
                  <CaretDown size={12} weight="bold" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white border border-black/5 shadow-lg min-w-[220px] py-2">
                      {serviceSubItems.map((sub, j) => (
                        <Link
                          key={j}
                          to={sub.to}
                          className="block px-5 py-3 text-sm font-medium text-text-dark hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={item.to}
                className="shrink-0 whitespace-nowrap text-sm font-medium tracking-tight text-text-dark hover:text-accent transition-colors hover:-translate-y-[1px]"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="flex shrink-0 items-center gap-4 ml-4 xl:ml-6">
            <MotionButton href="tel:883297379" label="Zadzwoń: 883 297 379" variant="secondary" context="light" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-text-dark z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>
    </nav>
  );
}

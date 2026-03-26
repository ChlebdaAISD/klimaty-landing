import React, { useEffect, useRef, useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import MotionButton from './ui/MotionButton';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Oferta', href: '#oferta', disabled: true },
    { label: 'O nas', href: '#onas', disabled: true },
    { label: 'Realizacje', href: '#realizacje', disabled: true },
    { label: 'Opinie', href: '#opinie', disabled: true },
    { label: 'Kontakt', href: '#kontakt', disabled: true },
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
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img
            src="/assets/loga/Przezroczysty(2).png"
            alt="klimaTY Logo"
            className="h-10 md:h-14 transition-transform group-hover:scale-105 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, i) =>
            item.disabled ? (
              <span
                key={i}
                className="text-sm font-medium tracking-tight text-text-dark/30 cursor-default select-none"
              >
                {item.label}
              </span>
            ) : (
              <a
                key={i}
                href={item.href}
                className="text-sm font-medium tracking-tight text-text-dark hover:text-accent transition-colors hover:-translate-y-[1px]"
              >
                {item.label}
              </a>
            )
          )}
          <div className="flex items-center gap-4 ml-6">
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

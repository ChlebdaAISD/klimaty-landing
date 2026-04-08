import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ShieldCheck, Wrench, Wind } from '@phosphor-icons/react';
import MotionButton from './ui/MotionButton';

export default function Hero() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-part', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.stat-badge', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.8
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <Wrench size={24} weight="duotone" className="text-white"/>, text: "15 lat doświadczenia" },
    { icon: <ShieldCheck size={24} weight="duotone" className="text-white"/>, text: "Certyfikat F-Gaz i SEP" },
    { icon: <Wind size={24} weight="duotone" className="text-white"/>, text: "Gwarancja czystości" },
  ];

  return (
    <section id="hero-section" ref={sectionRef} className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-32 overflow-hidden bg-background">
      
      {/* Abstract Background Element (Orange Sun/Circle from Aero Reference) */}
      <div className="hidden md:block absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent/20 rounded-none blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column - Text */}
        <div className="w-full lg:w-[55%] pt-12 md:pb-12">
          <p className="hero-part font-mono text-xs tracking-[0.2em] uppercase text-accent font-bold mb-6">
            Kraków i Małopolska
          </p>
          
          <h1 className="hero-part font-heading font-semibold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-text-dark mb-6">
            Klimatyzacja Kraków <br className="hidden md:block" />
            <span className="text-text-light">montaż, serwis i sprzedaż.</span>
          </h1>
          
          <p className="hero-part max-w-lg text-lg text-text-light leading-relaxed mb-10 font-sans">
            W klimaTY wierzymy, że idealna temperatura to nie tylko liczby na termometrze, ale Twój komfort każdego dnia. Jesteśmy lokalną firmą, która stawia na relacje — dla nas nie jesteś kolejnym zleceniem, ale osobą, której pomagamy stworzyć wymarzone warunki.
          </p>
          
          <div className="hero-part flex flex-col sm:flex-row gap-4 mb-8">
            <MotionButton href="tel:883297379" label="Zadzwoń: 883 297 379" variant="secondary" context="light" />
          </div>
        </div>

        {/* Right Column - Image floating */}
        <div className="hero-part w-full lg:w-[45%] relative flex justify-center items-center pb-20 lg:pb-0">
          <img 
            src="/assets/zdjecia/ac_hero_transparent.png" 
            alt="Futurystyczna biała klimatyzacja" 
            className="w-full h-auto object-contain scale-100 md:scale-[1.15] md:-mr-8 z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none"
          />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity z-20">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-dark">Scroll</span>
        <div className="w-[1px] h-12 bg-text-light/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-text-dark origin-top animate-[scrolldown_2s_ease-in-out_infinite] will-change-transform"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrolldown {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
      
    </section>
  );
}

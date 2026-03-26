import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Bezpłatna konsultacja i wycena",
      desc: "Przyjeżdżamy na miejsce, mierzymy pomieszczenia i ustalamy optymalną trasę instalacyjną."
    },
    {
      num: "02",
      title: "Dobór idealnego urządzenia",
      desc: "Dopasowujemy model do Twoich potrzeb i budżetu spośród sprawdzonych marek."
    },
    {
      num: "03",
      title: "Szybki i czysty montaż",
      desc: "Praca w standardzie przemysłowym — odkurzacze bezpyłowe, folia ochronna, porządek po sobie."
    },
    {
      num: "04",
      title: "Uruchomienie i szkolenie",
      desc: "Próżnia, próba ciśnieniowa, kalibracja termostatów. Pokazujemy jak obsługiwać system."
    },
    {
      num: "05",
      title: "Pełna opieka serwisowa",
      desc: "Jesteśmy do dyspozycji przez cały okres gwarancji i po jej zakończeniu."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from('.process-line-desktop', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 50%' },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut"
      });

      gsap.from('.process-line-mobile', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 50%' },
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power3.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proces" className="py-32 bg-[#09090b] border-t border-white/5 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-24 md:mb-32 max-w-3xl">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Pełne spectrum</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-none mb-6">
            Od projektu do realizacji.
          </h3>
          <p className="text-xl text-zinc-400 font-sans max-w-xl">
            Proces usystematyzowany do poziomu maszyny. Bez bałaganu, bez domysłów, z twardą gwarancją terminu i efektu końcowego.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="process-line-desktop hidden md:block absolute top-[28px] left-7 w-[calc(100%-3rem)] h-[1px] bg-white/10 z-0"></div>
          {/* Vertical Line (Mobile) */}
          <div className="process-line-mobile md:hidden absolute top-7 left-[28px] w-[1px] h-[calc(100%-4rem)] bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="process-step group relative flex flex-row md:flex-col gap-6 md:gap-10 items-start">

                {/* Node Element */}
                <div className="shrink-0 relative bg-[#09090b]">
                  <div className="w-14 h-14 border border-white/20 rounded-none flex items-center justify-center font-mono text-lg font-bold text-zinc-500 transition-all duration-500 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/5 relative z-10">
                    {step.num}
                  </div>
                  {/* Glowing inner square on hover */}
                  <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 scale-50 group-hover:scale-100 transition-all duration-500 opacity-0 group-hover:opacity-100 z-0"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-2 md:pt-0">
                  <h4 className="text-2xl font-bold font-heading text-white mb-4 tracking-tight transition-colors duration-300 group-hover:text-accent">
                    {step.title}
                  </h4>
                  <p className="text-zinc-400 font-sans text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

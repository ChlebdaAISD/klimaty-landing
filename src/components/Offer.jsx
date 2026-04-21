import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, HardHat, GearSix, ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    Icon: HardHat,
    title: 'Montaż klimatyzacji',
    description: 'Wiercenie bezpyłowe, folia ochronna na meble, sprzęt renomowanych marek. Idealny porządek po każdym montażu.',
    to: '/montaz-klimatyzacji/',
  },
  {
    Icon: GearSix,
    title: 'Serwis i naprawa klimatyzacji',
    description: 'Przeglądy, czyszczenie, dezynfekcja, uzupełnianie czynnika oraz diagnostyka i naprawa klimatyzatorów wszystkich marek.',
    to: '/serwis-klimatyzacji/',
  },
  {
    Icon: Wrench,
    title: 'Instalacje pod klimatyzacje',
    description: 'Układanie przewodów na etapie budowy domu lub remontu. Później czysty montaż urządzeń bez kucia ścian.',
    to: '/instalacje-pod-klimatyzacje/',
  },
];

export default function Offer() {
  return (
    <section id="oferta" className="py-32 bg-[#040405] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Nasza oferta</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
            Kompleksowa obsługa<br />klimatyzacji.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description, to }, i) => (
            <Link
              key={i}
              to={to}
              className="group bg-[#09090b] border border-white/5 hover:border-accent/30 p-8 flex flex-col gap-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={24} weight="duotone" className="text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold font-heading text-white uppercase mb-3">{title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                Dowiedz się więcej <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

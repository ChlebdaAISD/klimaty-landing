import React from 'react';
import { ChatDots, Wrench, HardHat, GearSix } from '@phosphor-icons/react';

const services = [
  {
    Icon: ChatDots,
    title: 'Doradztwo',
    description: 'Bezpłatna konsultacja i wycena na miejscu u klienta. Dobieramy optymalne rozwiązanie dopasowane do Twoich potrzeb i budżetu.',
  },
  {
    Icon: HardHat,
    title: 'Instalacje',
    description: 'Montaż jednostek split i multi-split dla klientów indywidualnych i firm. Każda instalacja dopasowana do architektury budynku.',
  },
  {
    Icon: Wrench,
    title: 'Montaż',
    description: 'Wiercenie bezpyłowe, folia ochronna na meble, sprzęt renomowanych marek. Idealny porządek po każdym montażu.',
  },
  {
    Icon: GearSix,
    title: 'Serwis',
    description: 'Przeglądy sezonowe, czyszczenie filtrów i czynnik chłodniczy pod kontrolą. Pełna opieka gwarancyjna i pogwarancyjna.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ Icon, title, description }, i) => (
            <div
              key={i}
              className="group bg-[#09090b] border border-white/5 hover:border-accent/30 p-8 flex flex-col gap-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={24} weight="duotone" className="text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-heading text-white uppercase mb-3">{title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

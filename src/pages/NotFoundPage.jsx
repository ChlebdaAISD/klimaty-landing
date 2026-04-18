import React from 'react';
import { Link } from 'react-router-dom';
import { Warning, House, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import DarkSection from '../components/DarkSection';
import { SITE_URL } from '../data/seoMeta';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 — Strona nie znaleziona | klimaTY"
        description="Strona, której szukasz, nie istnieje. Wróć na stronę główną klimaTY — klimatyzacja Kraków."
        canonical={`${SITE_URL}/404`}
      />
      <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 bg-background border-b border-black/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Warning size={80} weight="duotone" className="text-accent mx-auto mb-8" />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent font-bold mb-6">Błąd 404</p>
          <h1 className="font-heading font-semibold text-5xl md:text-7xl leading-[0.95] tracking-tight text-text-dark mb-6">
            Strony nie znaleziono
          </h1>
          <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na stronę główną albo skontaktuj się z nami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-[#09090b] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors"
            >
              <House size={20} weight="bold" />
              Strona główna
            </Link>
            <Link
              to="/kontakt/"
              className="inline-flex items-center gap-3 border-2 border-[#09090b] text-[#09090b] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#09090b] hover:text-white transition-colors"
            >
              Kontakt
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <DarkSection eyebrow="Nawigacja" h2="Może szukasz jednej z tych stron?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { to: '/montaz-klimatyzacji/', label: 'Montaż klimatyzacji' },
            { to: '/serwis-klimatyzacji/', label: 'Serwis i naprawa klimatyzacji' },
            { to: '/instalacje-pod-klimatyzacje/', label: 'Instalacje pod klimatyzacje' },
            { to: '/o-nas/', label: 'O nas' },
            { to: '/realizacje/', label: 'Realizacje' },
            { to: '/opinie/', label: 'Opinie' },
            { to: '/faq/', label: 'FAQ' },
            { to: '/kontakt/', label: 'Kontakt' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-5 flex items-center justify-between transition-colors"
            >
              <span className="text-white font-bold group-hover:text-accent transition-colors">{link.label}</span>
              <ArrowRight size={16} weight="bold" className="text-accent" />
            </Link>
          ))}
        </div>
      </DarkSection>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChatDots, Wrench, HardHat, GearSix, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/uslugi/'];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Usługi', item: meta.canonical },
  ],
};

const services = [
  {
    Icon: HardHat,
    heading: 'Potrzebujesz montażu klimatyzacji?',
    short: 'Profesjonalny montaż split i multi-split w domach, mieszkaniach i biurach. Wiercenie bezpyłowe, czysta instalacja, pełne zabezpieczenie mebli.',
    link: '/montaz-klimatyzacji/',
    linkLabel: 'Montaż klimatyzacji',
  },
  {
    Icon: GearSix,
    heading: 'Kiedy warto zamówić serwis klimatyzacji?',
    short: 'Przeglądy sezonowe, czyszczenie filtrów, dezynfekcja, uzupełnienie czynnika chłodniczego. Obsługa gwarancyjna i pogwarancyjna.',
    link: '/serwis-klimatyzacji/',
    linkLabel: 'Serwis klimatyzacji',
  },
  {
    Icon: Wrench,
    heading: 'Szukasz klimatyzacji do kupienia?',
    short: 'Doradzamy i dobieramy urządzenia renomowanych marek: Gree, LG, Samsung, Mitsubishi Electric, Daikin. Dopasowujemy moc i typ do Twoich potrzeb.',
    link: '/sprzedaz-klimatyzacji/',
    linkLabel: 'Sprzedaż klimatyzacji',
  },
  {
    Icon: ChatDots,
    heading: 'Jak wygląda bezpłatne doradztwo?',
    short: 'Bezpłatna konsultacja i wycena na miejscu u klienta. Omawiamy potrzeby, budżet i warunki techniczne, proponujemy optymalne rozwiązanie.',
    link: '/kontakt/',
    linkLabel: 'Umów konsultację',
  },
];

export default function UslugiPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Nasza oferta"
        h1={meta.h1}
        description="Kompleksowa obsługa klimatyzacji od A do Z — montaż, serwis, sprzedaż i bezpłatne doradztwo. Obsługujemy Kraków i całą Małopolskę."
        ctaLabel="Bezpłatna wycena"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Zakres usług" h2="Co dla Ciebie zrobimy?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ Icon, heading, short, link, linkLabel }, i) => (
            <article key={i} className="group bg-[#0d0d10] border border-white/5 hover:border-accent/30 p-8 flex flex-col gap-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={24} weight="duotone" className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white leading-tight">{heading}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">{short}</p>
              <PlaceholderContent compact />
              <Link to={link} className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                {linkLabel} <ArrowRight size={16} weight="bold" />
              </Link>
            </article>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Zaufanie" h2="Dlaczego warto wybrać klimaTY?">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '15+', label: 'lat doświadczenia' },
            { num: '1000+', label: 'ukończonych instalacji' },
            { num: 'F-Gaz', label: 'certyfikat' },
            { num: 'SEP', label: 'uprawnienia' },
          ].map((b, i) => (
            <div key={i} className="bg-[#09090b] border border-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{b.num}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">{b.label}</div>
            </div>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline="Która usługa Cię interesuje?"
        description="Zadzwoń lub napisz — dobierzemy rozwiązanie dopasowane do Twoich potrzeb."
      />
    </>
  );
}

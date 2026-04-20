import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, HardHat, GearSix, ArrowRight } from '@phosphor-icons/react';
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
    heading: 'Montaż klimatyzacji',
    short: 'Profesjonalny montaż urządzeń split i multi-split w domach, mieszkaniach i biurach. Wiercenie bezpyłowe, czysta instalacja, pełne zabezpieczenie mebli.',
    link: '/montaz-klimatyzacji/',
    linkLabel: 'Montaż klimatyzacji',
  },
  {
    Icon: GearSix,
    heading: 'Serwis i naprawa klimatyzacji',
    short: 'Czyszczenie, dezynfekcja, uzupełnianie czynnika chłodniczego, diagnostyka i naprawa. Obsługa wszystkich marek klimatyzatorów.',
    link: '/serwis-klimatyzacji/',
    linkLabel: 'Serwis i naprawa',
  },
  {
    Icon: Wrench,
    heading: 'Instalacje pod klimatyzacje',
    short: 'Przewody i infrastruktura układana na etapie budowy domu lub remontu — zanim zamontujemy urządzenia. Czysto, estetycznie, z dobrych materiałów.',
    link: '/instalacje-pod-klimatyzacje/',
    linkLabel: 'Instalacje pod klimatyzacje',
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
        description="Kompleksowa obsługa klimatyzacji od A do Z — montaż urządzeń, serwis i naprawa oraz instalacje pod klimatyzacje na etapie budowy. Pracujemy w Krakowie i pięciu sąsiednich gminach."
        ctaLabel="Bezpłatna wycena"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Zakres usług" h2="Co dla Ciebie zrobimy?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ Icon, heading, short, link, linkLabel }, i) => (
            <article key={i} className="group bg-[#0d0d10] border border-white/5 hover:border-accent/30 p-8 flex flex-col gap-6 transition-colors duration-300">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={24} weight="duotone" className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white leading-tight">{heading}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">{short}</p>
              <PlaceholderContent compact />
              <Link to={link} className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all underline underline-offset-4">
                {linkLabel} <ArrowRight size={16} weight="bold" />
              </Link>
            </article>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Trophy, Handshake, Heart, Certificate, MapPin, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';

const meta = seoMeta['/o-nas/'];

const processSteps = [
  {
    num: '01',
    title: 'Bezpłatna konsultacja i wycena',
    desc: 'Przyjeżdżamy na miejsce, mierzymy pomieszczenia i ustalamy optymalną trasę instalacyjną.',
  },
  {
    num: '02',
    title: 'Dobór idealnego urządzenia',
    desc: 'Dopasowujemy model do Twoich potrzeb i budżetu spośród sprawdzonych marek.',
  },
  {
    num: '03',
    title: 'Szybki i czysty montaż',
    desc: 'Praca w standardzie przemysłowym — odkurzacze bezpyłowe, folia ochronna, porządek po sobie.',
  },
  {
    num: '04',
    title: 'Uruchomienie i szkolenie',
    desc: 'Próżnia, próba ciśnieniowa, kalibracja termostatów. Pokazujemy jak obsługiwać system.',
  },
  {
    num: '05',
    title: 'Pełna opieka serwisowa',
    desc: 'Jesteśmy do dyspozycji przez cały okres gwarancji i po jej zakończeniu.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: meta.title,
    description: meta.description,
    url: meta.canonical,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'klimaTY',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/loga/Przezroczysty(2).png`,
    telephone: '+48883297379',
    email: 'kontakt@klima-ty.pl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kraków',
      addressCountry: 'PL',
    },
    foundingDate: '2010',
    areaServed: ['Kraków', 'Wieliczka', 'Niepołomice', 'Zielonki', 'Michałowice', 'Czarnochowice'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'O nas', item: meta.canonical },
    ],
  },
];

export default function ONasPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="O firmie"
        h1={meta.h1}
        description="Lokalna firma klimatyzacyjna z Krakowa. 15 lat doświadczenia, ponad 1000 ukończonych instalacji, certyfikaty F-Gaz i SEP. Obsługujemy Kraków i całą Małopolskę."
        ctaLabel="Poznaj naszą ofertę"
        ctaHref="/uslugi/"
        secondaryCtaLabel="Skontaktuj się"
        secondaryCtaHref="/kontakt/"
      />

      <DarkSection eyebrow="Liczby" h2="Ile lat doświadczenia mamy w klimatyzacji?">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '15+', label: 'lat na rynku' },
            { num: '1000+', label: 'instalacji' },
            { num: '5.0', label: 'ocena Google' },
            { num: '6', label: 'obsługiwanych miast' },
          ].map((b, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{b.num}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">{b.label}</div>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Wartości" h2="Dlaczego warto nam zaufać?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: ShieldCheck, title: 'Doświadczenie', desc: 'Ponad dekada praktyki w montażu i serwisie klimatyzacji w Krakowie i okolicach.' },
            { Icon: Trophy, title: 'Jakość', desc: 'Pracujemy tylko z renomowanymi markami i stosujemy sprawdzone metody montażu.' },
            { Icon: Handshake, title: 'Uczciwość', desc: 'Jasne wyceny, bez ukrytych kosztów. Mówimy konkretnie, co, jak i dlaczego.' },
            { Icon: Heart, title: 'Lokalność', desc: 'Jesteśmy z Krakowa — znamy lokalne warunki i mamy krótki czas reakcji.' },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
              <Icon size={32} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Certyfikaty" h2="Jakie mamy certyfikaty i uprawnienia?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'F-Gaz', desc: 'Certyfikat uprawniający do pracy z czynnikami chłodniczymi zgodnie z wymaganiami UE.' },
            { title: 'SEP', desc: 'Uprawnienia elektryczne do prac przy instalacjach o napięciu do 1 kV.' },
            { title: 'Autoryzacje', desc: 'Autoryzacja montażowa i serwisowa największych producentów klimatyzacji.' },
          ].map((c, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <Certificate size={40} weight="duotone" className="text-accent" />
              <h3 className="text-2xl font-heading font-bold text-white">{c.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Jak pracujemy" h2="Jak wygląda nasz proces krok po kroku?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-12">
          Cały proces — od pierwszego telefonu po opiekę po montażu — mamy usystematyzowany. Bez bałaganu, bez domysłów, z twardą gwarancją terminu i efektu końcowego.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 border border-accent/30 bg-accent/5 flex items-center justify-center font-mono text-lg font-bold text-accent">
                {step.num}
              </div>
              <h3 className="text-lg font-heading font-bold text-white">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Współpraca" h2="Z jakimi markami współpracujemy?">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Gree', 'LG', 'Samsung', 'Mitsubishi Electric', 'Daikin', 'Panasonic', 'Haier', 'Fujitsu'].map((brand) => (
            <div key={brand} className="bg-[#0d0d10] border border-white/5 p-6 flex items-center justify-center">
              <span className="text-lg font-heading font-bold text-white">{brand}</span>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Obszar działania" h2="Gdzie działamy?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Działamy w Krakowie i okolicznych gminach. Dojazd na terenie Małopolski jest bezpłatny.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}/`}
              className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-5 flex items-center gap-3 transition-colors duration-300"
            >
              <MapPin size={16} weight="duotone" className="text-accent shrink-0" />
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">{city.name}</span>
              <ArrowRight size={16} weight="bold" className="text-zinc-600 group-hover:text-accent ml-auto transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline="Porozmawiajmy o Twojej klimatyzacji"
        description="15 lat doświadczenia to pewność, że zostaniesz obsłużony profesjonalnie. Zadzwoń lub napisz."
      />
    </>
  );
}

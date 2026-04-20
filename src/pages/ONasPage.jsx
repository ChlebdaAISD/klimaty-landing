import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drop,
  MapPin as MapPinIcon,
  Broom,
  Handshake,
  Certificate,
  MapPin,
  ArrowRight,
} from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import DanielBio from '../components/DanielBio';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';
import { oNasContent } from '../data/content/oNas';

const meta = seoMeta['/o-nas/'];

const zasadyIcons = [Drop, MapPinIcon, Broom, Handshake];

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
        description="Lokalna firma klimatyzacyjna z Krakowa. 15 lat doświadczenia, ponad 1000 ukończonych instalacji, certyfikaty F-Gaz i SEP. Obsługujemy Kraków i pięć okolicznych miejscowości."
        ctaLabel="Zobacz nasze usługi"
        ctaHref="/montaz-klimatyzacji/"
        secondaryCtaLabel="Skontaktuj się"
        secondaryCtaHref="/kontakt/"
      />

      <DarkSection eyebrow="Liczby" h2="klimaTY w liczbach">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '15+', label: 'lat w branży, od 2010' },
            { num: '1000+', label: 'zrealizowanych instalacji' },
            { num: '5.0', label: 'ocena w Google' },
            { num: '6', label: 'obsługiwanych miast' },
          ].map((b, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{b.num}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">{b.label}</div>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Historia" h2={oNasContent.historia.heading}>
        <div className="max-w-3xl space-y-5">
          {oNasContent.historia.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Właściciel" h2="Poznaj Daniela">
        <DanielBio
          heading={oNasContent.daniel.heading}
          subtitle={oNasContent.daniel.subtitle}
          bio={oNasContent.daniel.bio}
          quote={oNasContent.daniel.quote}
        />
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Zasady pracy" h2="Cztery rzeczy, w których nigdy nie idziemy na skróty">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Nie obiecujemy „najwyższej jakości” ani „indywidualnego podejścia” — to mówi każdy. Wolimy powiedzieć konkretnie, na czym nam zależy niezależnie od zlecenia. Cztery zasady, które klient widzi i czuje po zakończeniu montażu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {oNasContent.zasady.map((z, i) => {
            const Icon = zasadyIcons[i];
            return (
              <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
                <Icon size={32} weight="duotone" className="text-accent" />
                <h3 className="text-xl font-heading font-bold text-white">{z.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{z.desc}</p>
              </article>
            );
          })}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Certyfikaty" h2="Jakie mamy uprawnienia i autoryzacje?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oNasContent.certyfikaty.map((c, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <Certificate size={36} weight="duotone" className="text-accent" />
              <h3 className="text-2xl font-heading font-bold text-white">{c.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Jak pracujemy" h2="Jak wygląda nasz proces krok po kroku?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-12">
          Od pierwszego telefonu po pierwszy przegląd — mamy to usystematyzowane. Bez improwizacji, bez pomyłek w umówieniu, bez „ja zadzwonię do kogoś i do Pana wrócę”.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {oNasContent.processSteps.map((step, i) => (
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

      <DarkSection eyebrow="Obszar działania" h2="Gdzie działamy?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Pracujemy w Krakowie i pięciu gminach wokół: Wieliczce, Niepołomicach, Zielonkach, Michałowicach i Czarnochowicach. Dojazd w tych lokalizacjach jest bezpłatny.
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
        description="Piętnaście lat praktyki to pewność, że na pierwsze pytanie masz już konkretną odpowiedź. Zadzwoń lub napisz."
      />
    </>
  );
}

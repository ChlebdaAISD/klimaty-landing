import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Broom, Wrench, MapPin, Drop, Phone, ShieldCheck } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';
import { serwisContent } from '../data/content/serwis';

const meta = seoMeta['/serwis-klimatyzacji/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Serwis i naprawa klimatyzacji',
    provider: {
      '@type': 'LocalBusiness',
      name: 'klimaTY',
      telephone: '+48883297379',
      email: 'kontakt@klima-ty.pl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kraków',
        addressCountry: 'PL',
      },
    },
    areaServed: ['Kraków', 'Wieliczka', 'Niepołomice', 'Zielonki', 'Michałowice', 'Czarnochowice'],
    description: meta.description,
    url: meta.canonical,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Usługi', item: `${SITE_URL}/uslugi/` },
      { '@type': 'ListItem', position: 3, name: 'Serwis i naprawa klimatyzacji', item: meta.canonical },
    ],
  },
];

export default function SerwisPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Serwis i naprawa klimatyzacji"
        h1={meta.h1}
        description="Przeglądy, czyszczenie, dezynfekcja, uzupełnianie czynnika oraz diagnostyka i naprawa klimatyzatorów. Obsługujemy wszystkie marki i typy urządzeń."
        ctaLabel="Umów serwis"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Zalecenia" h2="Kiedy i dlaczego robić przegląd klimatyzacji?">
        <div className="max-w-3xl">
          <p className="text-zinc-300 font-sans text-lg leading-relaxed mb-6">
            {serwisContent.kiedy.intro}
          </p>
          {serwisContent.kiedy.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-400 font-sans text-base leading-relaxed mb-5">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          {serwisContent.kiedy.schedule.map((row, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">{row.context}</p>
              <p className="text-xl font-heading font-bold text-accent">{row.frequency}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Czyszczenie" h2="Jak wygląda czyszczenie klimatyzacji?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          {serwisContent.czyszczenie.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serwisContent.czyszczenie.items.map((item, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
              <Broom size={32} weight="duotone" className="text-accent" />
              <h3 className="text-xl font-heading font-bold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl bg-[#0d0d10] border border-accent/20 p-8 flex flex-col gap-4">
          <Drop size={28} weight="duotone" className="text-accent" />
          <h3 className="text-lg font-heading font-bold text-white">Ozonowanie — dla alergików i po dłuższej przerwie</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{serwisContent.czyszczenie.dezynfekcja}</p>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Naprawa" h2="Co obejmuje naprawa i diagnostyka?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          {serwisContent.naprawa.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serwisContent.naprawa.cases.map((item, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <Wrench size={28} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-heading font-bold text-white">{item.symptom}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.diagnosis}</p>
            </article>
          ))}
        </div>
        <p className="text-zinc-400 font-sans text-base leading-relaxed max-w-3xl mt-8">
          {serwisContent.naprawa.outro}
        </p>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Certyfikaty" h2={serwisContent.fGaz.heading}>
        <div className="max-w-3xl bg-[#0d0d10] border border-white/5 p-8 md:p-10 flex flex-col gap-5">
          <ShieldCheck size={36} weight="duotone" className="text-accent" />
          <p className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed">
            {serwisContent.fGaz.body}
          </p>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Koszt" h2="Ile kosztuje serwis klimatyzacji?">
        <div className="bg-[#0d0d10] border border-white/5 p-8 md:p-10 flex flex-col gap-5 max-w-3xl">
          <Phone size={32} weight="duotone" className="text-accent" />
          <p className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed">
            Zakres prac różni się znacząco między rutynowym przeglądem domowego splita a czyszczeniem ciśnieniowym klimy w gastronomii po kilku sezonach. Dlatego zamiast podawać cenę, którą i tak trzeba by potem korygować, prosimy o telefon — po krótkim opisie urządzenia (marka, model, rok montażu, kiedy ostatnio serwisowane) podamy widełki, a finalną kwotę ustalamy przy umawianiu wizyty.
          </p>
          <a
            href="tel:883297379"
            className="inline-flex items-center gap-3 text-accent font-heading font-bold text-xl md:text-2xl hover:gap-4 transition-all"
          >
            883 297 379 <ArrowRight size={20} weight="bold" />
          </a>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Obszar działania" h2="Gdzie serwisujemy klimatyzację?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Serwis klimatyzacji realizujemy w Krakowie oraz okolicznych gminach. Dojazd w obrębie tych lokalizacji jest bezpłatny — nie doliczamy go do rachunku ani przed, ani po wizycie.
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
        headline="Twoja klimatyzacja potrzebuje serwisu?"
        description="Zadzwoń lub napisz — szybko umówimy przegląd, czyszczenie lub naprawę."
      />
    </>
  );
}

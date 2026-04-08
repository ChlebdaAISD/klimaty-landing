import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Broom, Wrench, Calendar, ShieldCheck, MapPin, Drop, CheckCircle } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';

const meta = seoMeta['/serwis-klimatyzacji/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Serwis klimatyzacji',
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
      { '@type': 'ListItem', position: 3, name: 'Serwis klimatyzacji', item: meta.canonical },
    ],
  },
];

const serviceItems = [
  { Icon: Broom, title: 'Czyszczenie filtrów i wymienników', desc: 'Pełne czyszczenie parownika, skraplacza i filtrów. Dezynfekcja z użyciem środków certyfikowanych.' },
  { Icon: Drop, title: 'Uzupełnienie czynnika chłodniczego', desc: 'Kontrola szczelności, odzysk i uzupełnienie czynnika zgodnie z wymaganiami F-Gaz.' },
  { Icon: Wrench, title: 'Naprawa i diagnostyka', desc: 'Diagnostyka elektroniki, wymiana części, naprawa wycieków. Obsługa wszystkich marek.' },
  { Icon: Calendar, title: 'Przeglądy sezonowe', desc: 'Przegląd wiosenny i jesienny — sprawdzenie wszystkich podzespołów, pomiary, raport.' },
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
        eyebrow="Serwis klimatyzacji"
        h1={meta.h1}
        description="Przeglądy sezonowe, czyszczenie, dezynfekcja, naprawa i uzupełnianie czynnika. Obsługa gwarancyjna i pogwarancyjna wszystkich marek klimatyzatorów."
        ctaLabel="Umów serwis"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Zalecenia" h2="Kiedy i dlaczego robić przegląd klimatyzacji?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Regularny serwis klimatyzacji to nie tylko warunek zachowania gwarancji, ale też zdrowia i niższych rachunków za prąd. Zalecamy przegląd 1-2 razy w roku.
        </p>
        <PlaceholderContent />
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Czyszczenie" h2="Jak wygląda czyszczenie klimatyzacji?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceItems.slice(0, 2).map(({ Icon, title, desc }, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
              <Icon size={32} weight="duotone" className="text-accent" />
              <h3 className="text-xl font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              <PlaceholderContent compact />
            </article>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Naprawa" h2="Co obejmuje naprawa i diagnostyka?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceItems.slice(2).map(({ Icon, title, desc }, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
              <Icon size={32} weight="duotone" className="text-accent" />
              <h3 className="text-xl font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
              <PlaceholderContent compact />
            </article>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Gwarancja" h2="Czym różni się obsługa gwarancyjna od pogwarancyjnej?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <ShieldCheck size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Obsługa gwarancyjna</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Dla urządzeń zakupionych i zamontowanych przez klimaTY prowadzimy pełną obsługę gwarancyjną.
            </p>
            <PlaceholderContent compact />
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <CheckCircle size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Obsługa pogwarancyjna</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Serwisujemy również urządzenia nie zakupione u nas — wszystkich marek i typów.
            </p>
            <PlaceholderContent compact />
          </article>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Cennik" h2="Ile kosztuje serwis klimatyzacji?">
        <PlaceholderContent label="Orientacyjny cennik — wkrótce" />
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Obszar działania" h2="Gdzie serwisujemy klimatyzację?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Serwis klimatyzacji realizujemy w Krakowie oraz okolicznych gminach. Dojazd w obrębie Małopolski jest bezpłatny.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}/`}
              className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-5 flex items-center gap-3 transition-colors duration-300"
            >
              <MapPin size={20} weight="duotone" className="text-accent" />
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">{city.name}</span>
              <ArrowRight size={14} weight="bold" className="text-zinc-600 group-hover:text-accent ml-auto transition-colors" />
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

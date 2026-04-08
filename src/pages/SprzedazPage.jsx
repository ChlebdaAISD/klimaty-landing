import React from 'react';
import { House, Buildings, Gauge, Snowflake, Lightbulb, Storefront } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/sprzedaz-klimatyzacji/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sprzedaż klimatyzacji',
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
      { '@type': 'ListItem', position: 3, name: 'Sprzedaż klimatyzacji', item: meta.canonical },
    ],
  },
];

const brands = ['Gree', 'LG', 'Samsung', 'Mitsubishi Electric', 'Daikin', 'Panasonic', 'Haier', 'Fujitsu'];

export default function SprzedazPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Sprzedaż klimatyzacji"
        h1={meta.h1}
        description="Doradzamy i sprzedajemy klimatyzacje renomowanych marek. Dobieramy moc i typ pod Twoją przestrzeń, budżet i oczekiwania. Bezpłatna konsultacja."
        ctaLabel="Bezpłatna konsultacja"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Dom" h2="Jaką klimatyzację wybrać do domu?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <House size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Mieszkania i apartamenty</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Ciche urządzenia split 2,5-3,5 kW dopasowane do kawalerek, mieszkań dwu- i trzypokojowych. Klasa energetyczna A++.
            </p>
            <PlaceholderContent compact />
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Gauge size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Domy jednorodzinne</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Systemy multi-split obsługujące 2-5 pomieszczeń z jednej jednostki zewnętrznej. Sterowanie przez aplikację.
            </p>
            <PlaceholderContent compact />
          </article>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Biuro" h2="Jaka klimatyzacja sprawdzi się w biurze?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Buildings size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Biura i gabinety</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Kasetonowe i kanałowe urządzenia do biur open-space, sal konferencyjnych i gabinetów.
            </p>
            <PlaceholderContent compact />
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Storefront size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Lokale usługowe</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Rozwiązania dla sklepów, restauracji, salonów — trwałe, wydajne, z niskim zużyciem energii.
            </p>
            <PlaceholderContent compact />
          </article>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Marki" h2="Z jakimi markami klimatyzatorów pracujemy?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Sprzedajemy i montujemy klimatyzacje sprawdzonych producentów. Każda marka to inna charakterystyka — pomagamy wybrać właściwą.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {brands.map((brand) => (
            <div key={brand} className="bg-[#0d0d10] border border-white/5 p-6 flex items-center justify-center">
              <span className="text-lg font-heading font-bold text-white">{brand}</span>
            </div>
          ))}
        </div>
        <PlaceholderContent label="Szczegółowe opisy marek — wkrótce" />
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Technologia" h2="Czym różni się split od multi-split?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Snowflake size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">System split</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Jedna jednostka zewnętrzna obsługuje jedno pomieszczenie. Prosty, niezawodny, idealny dla mniejszych przestrzeni.
            </p>
            <PlaceholderContent compact />
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Snowflake size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">System multi-split</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Jedna jednostka zewnętrzna obsługuje 2-5 pomieszczeń. Oszczędność miejsca na elewacji i energii.
            </p>
            <PlaceholderContent compact />
          </article>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Doradztwo" h2="Jak wygląda bezpłatne doradztwo i dobór?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
            <Lightbulb size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">1. Rozmowa</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Pytamy o potrzeby, budżet i oczekiwania. Wszystko przez telefon lub na miejscu.</p>
          </div>
          <div className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
            <Gauge size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">2. Dobór urządzenia</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Proponujemy 2-3 opcje dopasowane do Twoich warunków i portfela.</p>
          </div>
          <div className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
            <Snowflake size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">3. Oferta pakietowa</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Urządzenie + montaż + uruchomienie + gwarancja w jednej cenie, bez ukrytych kosztów.</p>
          </div>
        </div>
      </DarkSection>

      <CTASection
        headline="Dobierzmy razem idealną klimatyzację"
        description="Bezpłatna konsultacja i wycena. Doradzimy, jakie urządzenie najlepiej sprawdzi się u Ciebie."
      />
    </>
  );
}

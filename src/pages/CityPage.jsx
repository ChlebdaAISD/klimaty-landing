import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, GearSix, Wrench, ShieldCheck, MapPin, CheckCircle, ArrowRight, Phone } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { getCityBySlug, cities } from '../data/cities';

export default function CityPage({ slug }) {
  const city = getCityBySlug(slug);
  const meta = seoMeta[`/${slug}/`];

  if (!city || !meta) {
    return null;
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `klimaTY — ${city.name}`,
      description: meta.description,
      url: meta.canonical,
      telephone: '+48883297379',
      email: 'kontakt@klima-ty.pl',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: 'Małopolska',
        addressCountry: 'PL',
      },
      areaServed: {
        '@type': 'City',
        name: city.name,
      },
      priceRange: '$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Klimatyzacja',
      areaServed: city.name,
      provider: {
        '@type': 'LocalBusiness',
        name: 'klimaTY',
        telephone: '+48883297379',
      },
      description: `Montaż, serwis i sprzedaż klimatyzacji w ${city.nameLocative}.`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: `Klimatyzacja ${city.name}`, item: meta.canonical },
      ],
    },
  ];

  const otherCities = cities.filter((c) => c.slug !== slug);

  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow={`Klimatyzacja ${city.name}`}
        h1={meta.h1}
        description={`Profesjonalny montaż, serwis i sprzedaż klimatyzacji w ${city.nameLocative}. ${city.distance}. Dojazd gratis, szybka realizacja, pełne certyfikaty.`}
        ctaLabel="Bezpłatna wycena"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Lokalnie" h2={`Szukasz montażu klimatyzacji w ${city.nameLocative}?`}>
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          {city.localContext}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {city.specificity.map((item, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-5 flex items-start gap-3">
              <CheckCircle size={20} weight="duotone" className="text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Usługi" h2={`Co oferujemy w ${city.nameLocative}?`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/montaz-klimatyzacji/"
            className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-8 flex flex-col gap-5 transition-colors duration-300"
          >
            <HardHat size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Montaż klimatyzacji</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              Split i multi-split w domach, mieszkaniach i lokalach w {city.nameLocative}. Wiercenie bezpyłowe i czysta instalacja.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
              Więcej <ArrowRight size={16} weight="bold" />
            </span>
          </Link>
          <Link
            to="/serwis-klimatyzacji/"
            className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-8 flex flex-col gap-5 transition-colors duration-300"
          >
            <GearSix size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Serwis klimatyzacji</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              Przeglądy, czyszczenie, naprawa i uzupełnianie czynnika chłodniczego — w {city.nameLocative} i okolicy.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
              Więcej <ArrowRight size={16} weight="bold" />
            </span>
          </Link>
          <Link
            to="/sprzedaz-klimatyzacji/"
            className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-8 flex flex-col gap-5 transition-colors duration-300"
          >
            <Wrench size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Sprzedaż klimatyzacji</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              Doradzimy i dobierzemy urządzenie dopasowane do Twojego domu lub biura w {city.nameLocative}.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
              Więcej <ArrowRight size={16} weight="bold" />
            </span>
          </Link>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Dlaczego my" h2={`Dlaczego warto wybrać klimaTY w ${city.nameLocative}?`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: MapPin, title: 'Lokalnie', desc: `${city.distance}. Dojazd i wycena bezpłatne.` },
            { Icon: ShieldCheck, title: 'Certyfikaty', desc: 'F-Gaz, SEP, autoryzacje producentów.' },
            { Icon: CheckCircle, title: '15+ lat', desc: 'Ponad 1000 instalacji w Małopolsce.' },
            { Icon: Phone, title: 'Szybki kontakt', desc: 'Odpowiadamy do 24h. Elastyczne terminy.' },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-3">
              <Icon size={32} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Cennik" h2={`Ile kosztuje klimatyzacja w ${city.nameLocative}?`}>
        <PlaceholderContent label="Orientacyjny cennik — wkrótce" />
      </DarkSection>

      <DarkSection eyebrow="Galeria" h2="Jakie realizacje mamy w okolicy?">
        <PlaceholderContent label="Mini-galeria lokalnych realizacji — wkrótce" />
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Obszar działania" h2="Gdzie jeszcze świadczymy usługi?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-6">
          Świadczymy usługi głównie na terenie <strong className="text-white">Małopolski</strong>, a w przypadku większych zleceń montażowych także na terenie <strong className="text-white">całej Polski</strong>. Nasi główni klienci pochodzą z Krakowa oraz gmin wokół Krakowa — poniżej znajdziesz najczęściej obsługiwane lokalizacje.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherCities.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}/`}
              className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-5 flex items-center gap-3 transition-colors duration-300"
            >
              <MapPin size={16} weight="duotone" className="text-accent shrink-0" />
              <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">{c.name}</span>
              <ArrowRight size={16} weight="bold" className="text-zinc-600 group-hover:text-accent ml-auto transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline={`Klimatyzacja w ${city.nameLocative} — zadzwoń!`}
        description="Bezpłatna wizyta i wycena. Profesjonalny montaż i serwis z gwarancją."
      />
    </>
  );
}

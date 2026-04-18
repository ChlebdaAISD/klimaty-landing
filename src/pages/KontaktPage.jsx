import React from 'react';
import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import ContactForm from '../components/ContactForm';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/kontakt/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: meta.title,
    description: meta.description,
    url: meta.canonical,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'klimaTY',
    telephone: '+48883297379',
    email: 'kontakt@klima-ty.pl',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kraków',
      addressCountry: 'PL',
    },
    openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-14:00',
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Kontakt', item: meta.canonical },
    ],
  },
];

export default function KontaktPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Kontakt"
        h1={meta.h1}
        description="Skontaktuj się z nami telefonicznie, mailowo lub przez formularz. Odpowiadamy w ciągu 24 godzin. Wycena i konsultacja — bezpłatnie."
        ctaLabel="Zadzwoń: 883 297 379"
        ctaHref="tel:883297379"
        secondaryCtaLabel="Napisz do nas"
        secondaryCtaHref="mailto:kontakt@klima-ty.pl"
      />

      <DarkSection eyebrow="Dane kontaktowe" h2="Jak się z nami skontaktować?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="tel:883297379" className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-8 flex flex-col gap-4 transition-colors duration-300">
            <Phone size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">Telefon</h3>
            <p className="text-2xl font-heading font-semibold text-white group-hover:text-accent transition-colors">883 297 379</p>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Pon-Pt 8:00-18:00, Sob 9:00-14:00</p>
          </a>
          <a href="mailto:kontakt@klima-ty.pl" className="group bg-[#0d0d10] border border-white/5 hover:border-accent/40 p-8 flex flex-col gap-4 transition-colors duration-300">
            <EnvelopeSimple size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">E-mail</h3>
            <p className="text-lg font-heading font-semibold text-white group-hover:text-accent transition-colors break-all">kontakt@klima-ty.pl</p>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Odpowiedź do 24h</p>
          </a>
          <div className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
            <MapPin size={32} weight="duotone" className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-white">Lokalizacja</h3>
            <p className="text-lg font-heading font-semibold text-white">Kraków i okolice</p>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Dojazd gratis</p>
          </div>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Formularz" h2="Napisz do nas">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Zostaw dane kontaktowe i krótką wiadomość — odezwiemy się w ciągu 24 godzin.
        </p>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </DarkSection>
    </>
  );
}

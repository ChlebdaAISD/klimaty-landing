import React from 'react';
import { Image, House, Buildings, Storefront } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/realizacje/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: meta.title,
    description: meta.description,
    url: meta.canonical,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Realizacje', item: meta.canonical },
    ],
  },
];

export default function RealizacjePage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Nasze realizacje"
        h1={meta.h1}
        description="Ponad 1000 ukończonych instalacji w Krakowie i okolicach. Domy, mieszkania, biura i lokale usługowe — zobacz efekty naszej pracy."
        ctaLabel="Umów bezpłatną wycenę"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Dom i mieszkanie" h2="Jak wygląda montaż w domach i mieszkaniach?">
        <div className="flex items-center gap-3 mb-8">
          <House size={28} weight="duotone" className="text-accent" />
          <p className="text-zinc-400 font-sans">Instalacje domowe — kawalerki, mieszkania, apartamenty, domy jednorodzinne.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-[#0d0d10] border border-white/5 flex items-center justify-center">
              <Image size={48} weight="duotone" className="text-zinc-700" />
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Biura i lokale" h2="Jakie klimatyzacje montujemy w biurach?">
        <div className="flex items-center gap-3 mb-8">
          <Buildings size={28} weight="duotone" className="text-accent" />
          <p className="text-zinc-400 font-sans">Realizacje komercyjne — biura, gabinety, sklepy, restauracje.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-[#0d0d10] border border-white/5 flex items-center justify-center">
              <Storefront size={48} weight="duotone" className="text-zinc-700" />
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Lokalizacje" h2="Gdzie realizowaliśmy nasze projekty?">
        <PlaceholderContent label="Lista realizacji z lokalizacjami — wkrótce" />
      </DarkSection>

      <CTASection
        headline="Chcesz dołączyć do listy zadowolonych klientów?"
        description="Zamów bezpłatną wycenę — pokażemy, co możemy zrobić u Ciebie."
      />
    </>
  );
}

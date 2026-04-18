import React from 'react';
import { Image, House, Buildings, Storefront } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/realizacje/'];

const faqItems = [
  {
    q: 'Jak wygląda proces montażu w domu lub mieszkaniu?',
    a: 'Przyjeżdżamy w umówionym terminie, zabezpieczamy meble i podłogi folią, wiercimy bezpyłowo i montujemy jednostki. Standardowa realizacja split zajmuje 4-6 godzin. Po montażu uruchamiamy urządzenie, sprawdzamy szczelność i pokazujemy, jak je obsługiwać.',
  },
  {
    q: 'Ile trwa realizacja montażu klimatyzacji?',
    a: 'Pojedynczy split: 4-6 godzin. Multi-split (2-3 jednostki wewnętrzne): 1 dzień roboczy. Instalacje w biurach lub lokalach usługowych z większą liczbą jednostek: 1-3 dni w zależności od zakresu.',
  },
  {
    q: 'Czy realizujemy instalacje w biurach i lokalach usługowych?',
    a: 'Tak. Obsługujemy biura, gabinety, sklepy, restauracje i inne obiekty komercyjne. Dobieramy urządzenia do specyfiki lokalu (np. kasetonowe do open-space) i dopasowujemy harmonogram prac, żeby nie zakłócać pracy firmy.',
  },
  {
    q: 'Czy montujecie klimatyzacje w domach w trakcie budowy?',
    a: 'Tak — to najlepszy moment. Realizujemy wtedy instalacje pod klimatyzacje: układamy przewody chłodnicze, odpływ skroplin i zasilanie zanim powstaną tynki i elewacja. Po wprowadzeniu się wracamy i montujemy urządzenia bez kucia ścian.',
  },
  {
    q: 'Gdzie realizujemy projekty?',
    a: 'Kraków i cała Małopolska — Wieliczka, Niepołomice, Zielonki, Michałowice, Czarnochowice i okolice. Dojazd w obrębie Małopolski jest bezpłatny.',
  },
];

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
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
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

      <DarkSection variant="alt" eyebrow="FAQ" h2="Najczęściej zadawane pytania o realizacjach">
        <div className="max-w-4xl">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-white/5 py-6">
              <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-3">
                {item.q}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-sans">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline="Chcesz dołączyć do listy zadowolonych klientów?"
        description="Zamów bezpłatną wycenę — pokażemy, co możemy zrobić u Ciebie."
      />
    </>
  );
}

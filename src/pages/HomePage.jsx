import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Features from '../components/Features';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import { seoMeta, SITE_URL, SITE_NAME } from '../data/seoMeta';

const meta = seoMeta['/'];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: meta.description,
      url: SITE_URL,
      telephone: '+48883297379',
      email: 'kontakt@klima-ty.pl',
      priceRange: '$$',
      image: `${SITE_URL}/assets/loga/Przezroczysty(2).png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kraków',
        addressRegion: 'małopolskie',
        addressCountry: 'PL',
      },
      areaServed: [
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wieliczka' },
        { '@type': 'City', name: 'Niepołomice' },
        { '@type': 'City', name: 'Zielonki' },
        { '@type': 'City', name: 'Michałowice' },
        { '@type': 'City', name: 'Czarnochowice' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'pl-PL',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <Hero />
      <Offer />
      <Features />
      <Process />
      <Gallery />
      <FAQ />
      <Reviews />
      <Contact />
    </>
  );
}

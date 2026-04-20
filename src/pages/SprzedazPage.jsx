import React from 'react';
import { HouseLine, Wrench, CheckCircle, Sparkle, ShieldCheck, Ruler } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/instalacje-pod-klimatyzacje/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Instalacje pod klimatyzacje',
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
      { '@type': 'ListItem', position: 3, name: 'Instalacje pod klimatyzacje', item: meta.canonical },
    ],
  },
];

const qualityChecklist = [
  { Icon: CheckCircle, title: 'Schowane w elewacji', desc: 'Przewody prowadzone w bruzdach, zakryte tynkiem lub w izolacji elewacji — nie widać rurek na ścianach.' },
  { Icon: CheckCircle, title: 'Miedziane rurki w izolacji', desc: 'Grubościenna miedź z fabrycznej otuliny kauczukowej. Brak kondensacji, brak strat energii.' },
  { Icon: CheckCircle, title: 'Odpływ skroplin pod spadkiem', desc: 'Przewód kondensatu ułożony z właściwym spadkiem do kanalizacji lub na zewnątrz — bez zastojów i zapachów.' },
  { Icon: CheckCircle, title: 'Zasilanie przy jednostce zewnętrznej', desc: 'Osobny obwód elektryczny z zabezpieczeniem doprowadzony pod miejsce montażu skraplacza.' },
  { Icon: CheckCircle, title: 'Estetyczne wyprowadzenia', desc: 'Zaślepione, oznaczone końcówki w ścianach. Nic nie wystaje, nic nie przeszkadza w dalszych pracach.' },
  { Icon: CheckCircle, title: 'Dokumentacja trasy', desc: 'Zdjęcia i schemat przebiegu instalacji przed zatynkowaniem — przydatne przy przyszłych remontach.' },
];

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
        eyebrow="Instalacje pod klimatyzacje"
        h1={meta.h1}
        description="Etap 1: układamy instalację przewodów na etapie budowy domu lub remontu. Etap 2 (po miesiącach lub latach): montujemy urządzenia bez kucia ścian i bałaganu."
        ctaLabel="Umów konsultację"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Dlaczego teraz" h2="Dlaczego warto przemyśleć klimatyzację na etapie budowy?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Instalacja pod klimatyzację w trakcie budowy lub remontu to oszczędność czasu, pieniędzy i nerwów. Wszystkie przewody — chłodnicze, kondensatu i zasilające — układamy zanim powstaną finalne tynki i elewacja. Gdy zdecydujesz się zamontować jednostki wewnętrzne, pozostaje tylko ich zawieszenie — bez kucia, bez pyłu, bez poprawek malarskich.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <HouseLine size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Etap 1 — instalacja przewodów</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Układamy trasy chłodnicze, odpływ skroplin i zasilanie elektryczne. Wszystko schowane w ścianach, stropach lub elewacji, z wyprowadzeniami w miejscach przyszłych jednostek.
            </p>
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Wrench size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Etap 2 — montaż urządzeń</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Za kilka miesięcy lub nawet lat — gdy dom jest wykończony i zamieszkany — wracamy i montujemy klimatyzatory. Szybko, czysto, bez prac budowlanych.
            </p>
          </article>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Jakość" h2="Dlaczego jakość instalacji ma znaczenie?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Instalacje pod klimatyzację można zrobić na kilka sposobów — i różnica jest widoczna dopiero po latach użytkowania. Tańsze materiały i pośpieszne wykonanie skutkują nieszczelnościami, głośną pracą urządzenia, kondensacją wody i obniżoną wydajnością. My pracujemy na sprawdzonych komponentach i nie przyspieszamy kosztem jakości.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <ShieldCheck size={32} weight="duotone" className="text-accent" />
            <h3 className="text-xl font-heading font-bold text-white">Grubościenna miedź</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Używamy rurek miedzianych o sprawdzonej grubości ścianki i odpowiedniej średnicy. Przewód wytrzymuje ciśnienie robocze bez ryzyka mikropęknięć.
            </p>
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Sparkle size={32} weight="duotone" className="text-accent" />
            <h3 className="text-xl font-heading font-bold text-white">Pełna izolacja termiczna</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Każdy metr rurki ma fabryczną otulinę kauczukową — bez przerw, bez odsłoniętych fragmentów. Zero strat energii, zero kondensacji.
            </p>
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Ruler size={32} weight="duotone" className="text-accent" />
            <h3 className="text-xl font-heading font-bold text-white">Precyzyjne trasy</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Trasy planujemy razem z Tobą i architektem — w bruzdach i stropach, zgodnie z przyszłym rozmieszczeniem mebli i jednostek.
            </p>
          </article>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Checklista" h2="Po czym poznać wysokiej jakości instalację?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Jeśli w Twoim domu lub biurze instalacja była już wykonana — możesz ocenić jej jakość po kilku prostych znakach. Brakuje któregoś elementu? Zadzwoń, przyjedziemy i sprawdzimy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityChecklist.map(({ Icon, title, desc }, i) => (
            <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <Icon size={28} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline="Budujesz lub remontujesz? Porozmawiajmy"
        description="Zaplanujmy razem instalację pod klimatyzację na etapie budowy. Bezpłatna konsultacja — zadzwoń lub napisz."
      />
    </>
  );
}

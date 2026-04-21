import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  House,
  Buildings,
  MapPin,
  ShieldCheck,
  Phone,
  Snowflake,
  Sun,
  Thermometer,
} from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';
import { montazContent } from '../data/content/montaz';

const meta = seoMeta['/montaz-klimatyzacji/'];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Montaż klimatyzacji',
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
      { '@type': 'ListItem', position: 3, name: 'Montaż klimatyzacji', item: meta.canonical },
    ],
  },
];

export default function MontazPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Montaż klimatyzacji"
        h1={meta.h1}
        description="Profesjonalny montaż klimatyzacji split i multi-split w domach, mieszkaniach i lokalach komercyjnych. Wiercenie bezpyłowe, czysta instalacja, pełna gwarancja."
        ctaLabel="Zamów bezpłatną wycenę"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Proces" h2="Jak przebiega montaż klimatyzacji?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {montazContent.processSteps.map((step, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-3">
              <div className="text-accent font-mono text-xs font-bold tracking-widest">{step.num}</div>
              <h3 className="text-lg font-heading font-bold text-white leading-tight">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Technologia" h2="Split czy multi-split?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          {montazContent.splitVsMulti.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Snowflake size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">{montazContent.splitVsMulti.split.title}</h3>
            <p className="text-sm text-accent font-bold">{montazContent.splitVsMulti.split.lead}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{montazContent.splitVsMulti.split.body}</p>
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Snowflake size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">{montazContent.splitVsMulti.multi.title}</h3>
            <p className="text-sm text-accent font-bold">{montazContent.splitVsMulti.multi.lead}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{montazContent.splitVsMulti.multi.body}</p>
          </article>
        </div>
        <div className="bg-[#0d0d10] border border-accent/20 p-6 md:p-8 max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Nasza rekomendacja</p>
          <p className="text-zinc-300 font-sans text-base leading-relaxed">
            {montazContent.splitVsMulti.recommendation}
          </p>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Marki" h2="Z jakimi markami klimatyzatorów pracujemy?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Pracujemy z ośmioma markami — od premium japońskich, przez solidną średnią półkę, po sensowne wybory z segmentu budget. Nie faworyzujemy jednej, bo klienci są różni, a dobry dobór zależy od pomieszczenia, budżetu i priorytetów.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {montazContent.brands.map((brand) => (
            <article key={brand.name} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-heading font-bold text-white">{brand.name}</h3>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest">
                  <span className="text-zinc-500">{brand.country}</span>
                  <span className="text-accent">{brand.segment}</span>
                </div>
              </div>
              <p className="text-sm text-accent font-bold">Dla kogo: {brand.forWhom}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{brand.strengths}</p>
            </article>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Ogrzewanie" h2="Czy klimatyzacja może ogrzewać?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-8">
          {montazContent.ogrzewanie.intro}
        </p>
        <div className="max-w-3xl space-y-5 mb-10">
          {montazContent.ogrzewanie.paragraphs.map((p, i) => (
            <p key={i} className="text-zinc-400 font-sans text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d0d10] border border-white/5 p-6 flex items-start gap-4">
            <Thermometer size={28} weight="duotone" className="text-accent shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">COP 4,0–4,8 przy +7°C</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Za każdą 1 kWh prądu otrzymujesz 4–5 kWh ciepła. Cztero- do pięciokrotnie tańsze niż grzejnik elektryczny.
              </p>
            </div>
          </div>
          <div className="bg-[#0d0d10] border border-white/5 p-6 flex items-start gap-4">
            <Sun size={28} weight="duotone" className="text-accent shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">Synergia z fotowoltaiką</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                W domu z PV klima grzeje głównie na autokonsumpcji, zwłaszcza wiosną i jesienią. Koszt ogrzewania bliski zera.
              </p>
            </div>
          </div>
        </div>
      </DarkSection>

      <DarkSection eyebrow="Zastosowania" h2="Gdzie montujemy klimatyzację?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          {montazContent.zastosowania.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {montazContent.zastosowania.cards.map((card, i) => {
            const Icon = i === 3 ? Buildings : House;
            return (
              <article key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
                <Icon size={32} weight="duotone" className="text-accent" />
                <h3 className="text-xl font-heading font-bold text-white">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.body}</p>
              </article>
            );
          })}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Doradztwo" h2="Jak dobieramy urządzenie?">
        <p className="text-zinc-300 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Dobór mocy „na oko” to najczęstszy błąd w branży — skutkuje klimą za słabą (chodzi na 100% cały czas i szybko się zużywa) albo zbyt mocną (działa krótkimi cyklami i źle osusza powietrze). U nas proces jest krótki, ale konkretny.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {montazContent.advisorySteps.map((step, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
              <h3 className="text-lg font-heading font-bold text-white">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Koszt" h2="Ile kosztuje montaż klimatyzacji?">
        <div className="bg-[#0d0d10] border border-white/5 p-8 md:p-10 flex flex-col gap-5 max-w-3xl">
          <Phone size={32} weight="duotone" className="text-accent" />
          <p className="text-zinc-300 font-sans text-base md:text-lg leading-relaxed">
            Montaż pojedynczego splita w mieszkaniu to inna kwota niż multi-split w domu jednorodzinnym z pięcioma strefami. Zakres wyceny jest zbyt szeroki, żeby podać sensowną liczbę na stronie — musielibyśmy podać najwyższy wariant dla bezpieczeństwa, a to odstraszyłoby połowę klientów. Wolimy inaczej. Zadzwoń, umów wizję lokalną — bezpłatną, bez zobowiązań — a w ciągu dwóch dni dostaniesz konkretną wycenę, której się trzymamy.
          </p>
          <a
            href="tel:883297379"
            className="inline-flex items-center gap-3 text-accent font-heading font-bold text-xl md:text-2xl hover:gap-4 transition-all"
          >
            883 297 379 <ArrowRight size={20} weight="bold" />
          </a>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Obszar działania" h2="Gdzie montujemy klimatyzację?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Montaż klimatyzacji realizujemy w Krakowie i pięciu okolicznych miejscowościach. Dojazd w obrębie tych lokalizacji jest bezpłatny i nie doliczamy go w żadnej formie.
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

      <DarkSection eyebrow="Dlaczego my" h2="Dlaczego warto wybrać klimaTY do montażu?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: ShieldCheck, title: 'F-Gaz i SEP', desc: 'Pełne uprawnienia wymagane przy pracach z czynnikami chłodniczymi i instalacją elektryczną. Bez podwykonawców.' },
            { Icon: CheckCircle, title: '1000+ montaży', desc: '15 lat praktyki w Krakowie i okolicach. Widzieliśmy wszystko, od kamienic na Kazimierzu po kasetony w biurowcach.' },
            { Icon: Wrench, title: 'Wiercenie bezpyłowe', desc: 'Odkurzacz przemysłowy klasy M na każdym przewiercie. Meble pod folią, podłoga pod plandeką. Po nas — czystość.' },
            { Icon: House, title: 'Gwarancja i serwis', desc: '5 lat na urządzenie i 10 lat na sprężarkę od producenta, 2 lata naszej gwarancji na montaż. Po wygaśnięciu gwarancji nie znikamy — mamy karty Twoich urządzeń.' },
          ].map(({ Icon, title, desc }, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-4">
              <Icon size={32} weight="duotone" className="text-accent" />
              <h3 className="text-lg font-heading font-bold text-white">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <CTASection
        headline="Gotowy na montaż klimatyzacji?"
        description="Umów bezpłatną wizję lokalną — przyjedziemy, zmierzymy, wycenimy. Wycena wiąże nas, nie Ciebie."
      />
    </>
  );
}

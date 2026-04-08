import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, House, Buildings, MapPin, ShieldCheck } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { cities } from '../data/cities';

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

const processSteps = [
  { num: '01', title: 'Bezpłatna wizyta i wycena', desc: 'Przyjeżdżamy na miejsce, oceniamy warunki techniczne, doradzamy optymalne rozwiązanie.' },
  { num: '02', title: 'Dobór urządzenia', desc: 'Dobieramy moc, typ i markę dopasowane do powierzchni, ekspozycji i budżetu.' },
  { num: '03', title: 'Umówienie terminu', desc: 'Elastyczne terminy, montaż zwykle w 4-6 godzin. Bez przestojów i niespodzianek.' },
  { num: '04', title: 'Profesjonalny montaż', desc: 'Wiercenie bezpyłowe, zabezpieczenie mebli, czysta instalacja, pełna izolacja.' },
  { num: '05', title: 'Uruchomienie i instruktaż', desc: 'Test szczelności, napełnienie czynnikiem, instruktaż obsługi, dokumenty gwarancyjne.' },
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
          {processSteps.map((step, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-6 flex flex-col gap-3">
              <div className="text-accent font-mono text-xs font-bold tracking-widest">{step.num}</div>
              <h3 className="text-lg font-heading font-bold text-white leading-tight">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Cennik" h2="Ile kosztuje montaż klimatyzacji?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Split pojedynczy', 'Multi-split 2-3 jedn.', 'Instalacje nietypowe'].map((t, i) => (
            <div key={i} className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-4">
              <Wrench size={32} weight="duotone" className="text-accent" />
              <h3 className="text-xl font-heading font-bold text-white">{t}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Każdy montaż wyceniamy indywidualnie po oględzinach. Bezpłatna wizyta i konkretna oferta bez zobowiązań.
              </p>
            </div>
          ))}
        </div>
        <PlaceholderContent label="Pełna tabela cenowa — wkrótce" />
      </DarkSection>

      <DarkSection eyebrow="Zastosowania" h2="Czy montaż pasuje do domu i biura?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <House size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Domy i mieszkania</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Montujemy klimatyzacje w nowych i używanych mieszkaniach, domach jednorodzinnych oraz apartamentach. Zabezpieczamy meble i podłogi folią.
            </p>
            <PlaceholderContent compact />
          </article>
          <article className="bg-[#0d0d10] border border-white/5 p-8 flex flex-col gap-5">
            <Buildings size={32} weight="duotone" className="text-accent" />
            <h3 className="text-2xl font-heading font-bold text-white">Biura i lokale</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Obsługujemy biura, gabinety, sklepy, restauracje i lokale usługowe. Montaż poza godzinami pracy bez zakłócania działalności.
            </p>
            <PlaceholderContent compact />
          </article>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Technologia" h2="Czym różni się split od multi-split?">
        <PlaceholderContent />
      </DarkSection>

      <DarkSection eyebrow="Obszar działania" h2="Gdzie montujemy klimatyzację?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-10">
          Montaż klimatyzacji realizujemy w Krakowie i okolicznych miejscowościach. Dojazd w obrębie Małopolski jest bezpłatny.
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

      <DarkSection variant="alt" eyebrow="Dlaczego my" h2="Dlaczego warto wybrać klimaTY do montażu?">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: ShieldCheck, title: 'F-Gaz i SEP', desc: 'Pełne uprawnienia i certyfikaty wymagane przy pracach z czynnikami chłodniczymi.' },
            { Icon: CheckCircle, title: '1000+ montaży', desc: '15 lat doświadczenia w montażu klimatyzacji w Krakowie i okolicach.' },
            { Icon: Wrench, title: 'Wiercenie bezpyłowe', desc: 'Czysty montaż z zabezpieczeniem mebli, podłóg i ścian.' },
            { Icon: House, title: 'Gwarancja', desc: 'Pełna gwarancja na montaż i urządzenia. Obsługa pogwarancyjna.' },
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
        description="Umów bezpłatną wizytę — przyjedziemy, wycenimy i zaproponujemy optymalne rozwiązanie."
      />
    </>
  );
}

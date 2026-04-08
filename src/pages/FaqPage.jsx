import React, { useState } from 'react';
import { CaretDown, Wrench, GearSix, CurrencyCircleDollar, Lightbulb } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';

const meta = seoMeta['/faq/'];

const placeholderAnswer = 'Treść dostępna wkrótce. Szczegółowa odpowiedź zostanie dodana w kolejnej aktualizacji strony. W razie pytań zadzwoń: 883 297 379.';

const faqCategories = [
  {
    id: 'montaz',
    Icon: Wrench,
    title: 'Pytania o montaż klimatyzacji',
    questions: [
      { q: 'Ile trwa montaż klimatyzacji?', a: placeholderAnswer },
      { q: 'Ile kosztuje montaż klimatyzacji?', a: placeholderAnswer },
      { q: 'Czy montaż jest brudny lub głośny?', a: placeholderAnswer },
      { q: 'Czy można montować klimatyzację zimą?', a: placeholderAnswer },
      { q: 'Kiedy jest najlepszy czas na montaż?', a: placeholderAnswer },
    ],
  },
  {
    id: 'serwis',
    Icon: GearSix,
    title: 'Pytania o serwis i czyszczenie',
    questions: [
      { q: 'Jak często serwisować klimatyzację?', a: placeholderAnswer },
      { q: 'Co obejmuje przegląd klimatyzacji?', a: placeholderAnswer },
      { q: 'Ile kosztuje czyszczenie klimatyzacji?', a: placeholderAnswer },
      { q: 'Czy mogę sam czyścić filtry?', a: placeholderAnswer },
    ],
  },
  {
    id: 'koszty',
    Icon: CurrencyCircleDollar,
    title: 'Pytania o koszty i wycenę',
    questions: [
      { q: 'Ile kosztuje klimatyzacja do domu?', a: placeholderAnswer },
      { q: 'Ile kosztuje klimatyzacja do biura?', a: placeholderAnswer },
      { q: 'Czy wycena jest bezpłatna?', a: placeholderAnswer },
    ],
  },
  {
    id: 'dobor',
    Icon: Lightbulb,
    title: 'Pytania o dobór urządzenia',
    questions: [
      { q: 'Jaką moc klimatyzacji potrzebuję?', a: placeholderAnswer },
      { q: 'Split czy multi-split — co wybrać?', a: placeholderAnswer },
      { q: 'Jaką markę klimatyzacji polecacie?', a: placeholderAnswer },
      { q: 'Klimatyzacja a pompa ciepła — różnice?', a: placeholderAnswer },
    ],
  },
];

const allQuestions = faqCategories.flatMap((cat) => cat.questions);

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: meta.canonical },
    ],
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-lg md:text-xl font-heading font-semibold text-white group-hover:text-accent transition-colors">
          {question}
        </span>
        <CaretDown
          size={20}
          weight="bold"
          className={`text-accent shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-6 text-zinc-400 text-base leading-relaxed font-sans">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="FAQ"
        h1={meta.h1}
        description="Zebraliśmy odpowiedzi na najczęściej zadawane pytania o montaż, serwis i dobór klimatyzacji. Nie znalazłeś odpowiedzi? Zadzwoń — chętnie pomożemy."
        ctaLabel="Zadzwoń: 883 297 379"
        ctaHref="tel:883297379"
        secondaryCtaLabel="Napisz do nas"
        secondaryCtaHref="/kontakt/"
      />

      <DarkSection eyebrow="Kategorie" h2="O co pytają nasi klienci?">
        <div className="flex flex-wrap gap-3">
          {faqCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex items-center gap-2 bg-[#0d0d10] border border-white/5 hover:border-accent/40 px-5 py-3 text-sm font-bold text-white transition-colors"
            >
              <cat.Icon size={18} weight="duotone" className="text-accent" />
              {cat.title}
            </a>
          ))}
        </div>
      </DarkSection>

      {faqCategories.map((cat, idx) => (
        <DarkSection
          key={cat.id}
          id={cat.id}
          variant={idx % 2 === 0 ? 'alt' : 'default'}
          eyebrow={`Kategoria ${idx + 1}`}
          h2={cat.title}
        >
          <div className="max-w-4xl">
            {cat.questions.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </DarkSection>
      ))}

      <CTASection
        headline="Nie znalazłeś odpowiedzi?"
        description="Zadzwoń lub napisz — odpowiemy na każde pytanie o klimatyzację."
      />
    </>
  );
}

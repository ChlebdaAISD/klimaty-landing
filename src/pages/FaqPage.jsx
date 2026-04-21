import React from 'react';
import { Wrench, GearSix, CurrencyCircleDollar, Lightbulb } from '@phosphor-icons/react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import { faqContent } from '../data/content/faq';

const meta = seoMeta['/faq/'];

const faqCategories = [
  { id: 'montaz', Icon: Wrench, title: 'Pytania o montaż klimatyzacji', questions: faqContent.montaz },
  { id: 'serwis', Icon: GearSix, title: 'Pytania o serwis i czyszczenie', questions: faqContent.serwis },
  { id: 'koszty', Icon: CurrencyCircleDollar, title: 'Pytania o koszty i wycenę', questions: faqContent.koszty },
  { id: 'dobor', Icon: Lightbulb, title: 'Pytania o dobór urządzenia', questions: faqContent.dobor },
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
  return (
    <div className="border-b border-white/5 py-6">
      <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-3">
        {question}
      </h3>
      <p className="text-zinc-400 text-base leading-relaxed font-sans">
        {answer}
      </p>
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

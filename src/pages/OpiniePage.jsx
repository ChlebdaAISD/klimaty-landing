import React from 'react';
import { Star, GoogleLogo, ArrowSquareOut } from '@phosphor-icons/react';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import DarkSection from '../components/DarkSection';
import PlaceholderContent from '../components/PlaceholderContent';
import CTASection from '../components/CTASection';
import { seoMeta, SITE_URL } from '../data/seoMeta';
import reviews from '../data/reviews.json';

const meta = seoMeta['/opinie/'];

const avgRating = reviews.length > 0
  ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  : '5.0';

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'klimaTY',
    url: SITE_URL,
    telephone: '+48883297379',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kraków',
      addressCountry: 'PL',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.text,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Opinie', item: meta.canonical },
    ],
  },
];

function StarRow({ rating = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          weight="fill"
          className={i < rating ? 'text-accent' : 'text-zinc-700'}
        />
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const reviewChunks = chunkArray(reviews, Math.ceil(reviews.length / 3));

export default function OpiniePage() {
  return (
    <>
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        schema={schema}
      />
      <PageHero
        eyebrow="Opinie klientów"
        h1={meta.h1}
        description={`Średnia ocena ${avgRating}/5 na podstawie opinii z Google. Zobacz, co o naszej pracy mówią klienci z Krakowa i okolic.`}
        ctaLabel="Zamów bezpłatną wycenę"
        ctaHref="/kontakt/"
        secondaryCtaLabel="Zadzwoń: 883 297 379"
        secondaryCtaHref="tel:883297379"
      />

      <DarkSection eyebrow="Podsumowanie" h2="Jak oceniają nas klienci?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0d0d10] border border-white/5 p-8 text-center flex flex-col items-center">
            <div className="text-6xl font-heading font-bold text-accent mb-2">{avgRating}</div>
            <StarRow rating={5} />
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-3">Średnia ocena</p>
          </div>
          <div className="bg-[#0d0d10] border border-white/5 p-8 text-center flex flex-col items-center justify-center">
            <GoogleLogo size={48} weight="duotone" className="text-accent mb-3" />
            <div className="text-3xl font-heading font-bold text-white">{reviews.length}+ opinii</div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-2">Na Google Business</p>
          </div>
          <div className="bg-[#0d0d10] border border-white/5 p-8 text-center flex flex-col items-center justify-center">
            <div className="text-3xl font-heading font-bold text-white mb-2">100%</div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Poleca klimaTY</p>
          </div>
        </div>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Opinie z Google" h2="Co mówią klienci o naszej pracy?">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reviewChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-3">
              {chunk.map((review) => (
                <Card key={review.id}>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                    <Avatar className="size-9">
                      <AvatarFallback className="bg-zinc-800 text-zinc-300 text-xs">
                        {getInitials(review.author)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{review.author}</h3>
                      <div className="mt-0.5">
                        <StarRow rating={review.rating} />
                      </div>
                      <blockquote className="mt-2">
                        <p className="text-zinc-400 text-sm leading-relaxed">„{review.text}"</p>
                      </blockquote>
                      <span className="text-muted-foreground text-xs font-mono mt-2 block">
                        Opinia z Google
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </DarkSection>

      <DarkSection eyebrow="Więcej opinii" h2="Jak wystawiają nam opinie na Google?">
        <p className="text-zinc-400 font-sans text-lg leading-relaxed max-w-3xl mb-8">
          Wszystkie nasze opinie znajdziesz w profilu Google Business. Jeśli korzystałeś z naszych usług — będziemy wdzięczni za opinię.
        </p>
        <a
          href="https://www.google.com/search?q=klimaTY+Krak%C3%B3w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors"
        >
          <GoogleLogo size={20} weight="bold" />
          Zobacz wszystkie opinie
          <ArrowSquareOut size={16} weight="bold" />
        </a>
      </DarkSection>

      <DarkSection variant="alt" eyebrow="Więcej" h2="Dlaczego klienci polecają klimaTY?">
        <PlaceholderContent label="Więcej opinii — dodajemy na bieżąco" />
      </DarkSection>

      <CTASection
        headline="Przekonaj się sam — zamów bezpłatną wycenę"
        description="Dołącz do grona zadowolonych klientów. Pierwsza wizyta i wycena zawsze bezpłatna."
      />
    </>
  );
}

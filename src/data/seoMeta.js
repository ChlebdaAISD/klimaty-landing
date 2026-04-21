// SEO metadata per route
// Every page has: title, description, h1, canonical, og image (optional)

export const SITE_URL = 'https://klima-ty.pl';
export const SITE_NAME = 'klimaTY';
export const DEFAULT_OG_IMAGE = '/assets/loga/Przezroczysty(2).png';

export const seoMeta = {
  '/': {
    title: 'Klimatyzacja Kraków — Montaż i Serwis | klimaTY',
    description: 'Montaż i serwis klimatyzacji w Krakowie i okolicach. 15+ lat doświadczenia, 1000+ instalacji. Certyfikat F-Gaz i SEP. Bezpłatna wycena — zadzwoń! 883 297 379',
    h1: 'Klimatyzacja Kraków — montaż, serwis, instalacje',
    canonical: `${SITE_URL}/`,
  },
  '/montaz-klimatyzacji/': {
    title: 'Montaż klimatyzacji Kraków — Profesjonalnie | klimaTY',
    description: 'Profesjonalny montaż klimatyzacji w Krakowie. Wiercenie bezpyłowe, czysta instalacja w 4-6h. F-Gaz, SEP. 1000+ montaży. Bezpłatna wycena — zadzwoń!',
    h1: 'Montaż klimatyzacji Kraków',
    canonical: `${SITE_URL}/montaz-klimatyzacji/`,
  },
  '/serwis-klimatyzacji/': {
    title: 'Serwis i naprawa klimatyzacji Kraków | klimaTY',
    description: 'Serwis, czyszczenie, dezynfekcja i naprawa klimatyzacji w Krakowie. Certyfikat F-Gaz. Obsługa wszystkich marek. Bezpłatna wycena — zadzwoń!',
    h1: 'Serwis i naprawa klimatyzacji Kraków',
    canonical: `${SITE_URL}/serwis-klimatyzacji/`,
  },
  '/instalacje-pod-klimatyzacje/': {
    title: 'Instalacje pod klimatyzacje Kraków — na etapie budowy | klimaTY',
    description: 'Instalacje pod klimatyzacje w Krakowie — układanie przewodów na etapie budowy domu lub remontu. Później czysty montaż urządzeń bez kucia ścian.',
    h1: 'Instalacje pod klimatyzacje Kraków',
    canonical: `${SITE_URL}/instalacje-pod-klimatyzacje/`,
  },
  // Safety net for in-flight SPA navigation to the old URL before the 301 fires.
  // Canonical points to the new URL.
  '/sprzedaz-klimatyzacji/': {
    title: 'Instalacje pod klimatyzacje Kraków — na etapie budowy | klimaTY',
    description: 'Instalacje pod klimatyzacje w Krakowie — układanie przewodów na etapie budowy domu lub remontu. Później czysty montaż urządzeń bez kucia ścian.',
    h1: 'Instalacje pod klimatyzacje Kraków',
    canonical: `${SITE_URL}/instalacje-pod-klimatyzacje/`,
  },
  '/o-nas/': {
    title: 'O nas — klimaTY | Klimatyzacja Kraków od 15 lat',
    description: 'Poznaj klimaTY — lokalna firma klimatyzacyjna z Krakowa. 15 lat doświadczenia, 1000+ instalacji, certyfikaty F-Gaz i SEP. Obsługujemy całą Małopolskę.',
    h1: 'O nas — firma klimatyzacyjna klimaTY',
    canonical: `${SITE_URL}/o-nas/`,
  },
  '/realizacje/': {
    title: 'Realizacje — Montaż klimatyzacji Kraków | klimaTY',
    description: 'Zobacz nasze realizacje montażu klimatyzacji w Krakowie i okolicach. 1000+ ukończonych instalacji. Domy, mieszkania, biura. Sprawdź efekty naszej pracy!',
    h1: 'Realizacje — nasze instalacje klimatyzacji',
    canonical: `${SITE_URL}/realizacje/`,
  },
  '/kontakt/': {
    title: 'Kontakt — klimaTY | Klimatyzacja Kraków',
    description: 'Skontaktuj się z klimaTY. Bezpłatna wycena montażu klimatyzacji w Krakowie. Zadzwoń: 883 297 379 lub napisz: kontakt@klima-ty.pl. Odpowiedź do 24h!',
    h1: 'Kontakt — bezpłatna wycena klimatyzacji',
    canonical: `${SITE_URL}/kontakt/`,
  },
  '/faq/': {
    title: 'FAQ — Klimatyzacja Kraków | Pytania i odpowiedzi',
    description: 'Odpowiedzi na najczęściej zadawane pytania o klimatyzacji. Ile kosztuje montaż? Jak często serwisować? Jaką klimatyzację wybrać? Sprawdź!',
    h1: 'Najczęściej zadawane pytania o klimatyzacji',
    canonical: `${SITE_URL}/faq/`,
  },
  '/opinie/': {
    title: 'Opinie klientów — Klimatyzacja Kraków | klimaTY',
    description: 'Zobacz opinie klientów klimaTY. Ponad 1000 zadowolonych klientów w Krakowie i okolicach. Sprawdź, co mówią o naszym montażu i serwisie klimatyzacji!',
    h1: 'Opinie klientów — co mówią o klimaTY?',
    canonical: `${SITE_URL}/opinie/`,
  },
  '/klimatyzacja-krakow/': {
    title: 'Klimatyzacja Kraków — Lokalny montaż i serwis | klimaTY',
    description: 'Klimatyzacja w Krakowie — montaż, serwis i instalacje we wszystkich dzielnicach. 15 lat doświadczenia, F-Gaz, SEP. Krótki czas reakcji. Bezpłatna wycena!',
    h1: 'Klimatyzacja Kraków — montaż i serwis we wszystkich dzielnicach',
    canonical: `${SITE_URL}/klimatyzacja-krakow/`,
  },
  '/klimatyzacja-wieliczka/': {
    title: 'Klimatyzacja Wieliczka — Montaż i Serwis | klimaTY',
    description: 'Montaż i serwis klimatyzacji w Wieliczce. Lokalna firma z Krakowa. 15 lat doświadczenia, certyfikat F-Gaz. Dojazd gratis. Bezpłatna wycena — zadzwoń!',
    h1: 'Klimatyzacja Wieliczka — montaż i serwis',
    canonical: `${SITE_URL}/klimatyzacja-wieliczka/`,
  },
  '/klimatyzacja-niepolomice/': {
    title: 'Klimatyzacja Niepołomice — Montaż i Serwis | klimaTY',
    description: 'Klimatyzacja w Niepołomicach — montaż, serwis i instalacje. Firma z Krakowa, dojazd gratis. 15 lat doświadczenia, F-Gaz. Zadzwoń: 883 297 379!',
    h1: 'Klimatyzacja Niepołomice — montaż i serwis',
    canonical: `${SITE_URL}/klimatyzacja-niepolomice/`,
  },
  '/klimatyzacja-zielonki/': {
    title: 'Klimatyzacja Zielonki — Montaż i Serwis | klimaTY',
    description: 'Montaż i serwis klimatyzacji w Zielonkach. Lokalna firma z Krakowa, dojazd gratis. Certyfikat F-Gaz, 15 lat doświadczenia. Bezpłatna wycena!',
    h1: 'Klimatyzacja Zielonki — montaż i serwis',
    canonical: `${SITE_URL}/klimatyzacja-zielonki/`,
  },
  '/klimatyzacja-michalowice/': {
    title: 'Klimatyzacja Michałowice — Montaż i Serwis | klimaTY',
    description: 'Klimatyzacja w Michałowicach — profesjonalny montaż i serwis. Dojazd z Krakowa gratis. F-Gaz, SEP, 15 lat doświadczenia. Bezpłatna wycena!',
    h1: 'Klimatyzacja Michałowice — montaż i serwis',
    canonical: `${SITE_URL}/klimatyzacja-michalowice/`,
  },
  '/klimatyzacja-czarnochowice/': {
    title: 'Klimatyzacja Czarnochowice — Montaż i Serwis | klimaTY',
    description: 'Klimatyzacja w Czarnochowicach koło Wieliczki. Montaż i serwis z dojazdem gratis. 15 lat doświadczenia, certyfikat F-Gaz. Zadzwoń: 883 297 379!',
    h1: 'Klimatyzacja Czarnochowice — montaż i serwis',
    canonical: `${SITE_URL}/klimatyzacja-czarnochowice/`,
  },
};

export function getMetaForPath(path) {
  // Normalize path (ensure trailing slash except for root)
  const normalized = path === '/' ? '/' : (path.endsWith('/') ? path : path + '/');
  return seoMeta[normalized] || seoMeta['/'];
}

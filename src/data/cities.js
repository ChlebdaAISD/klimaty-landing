// Cities data for city landing pages
// Each city has unique local context to avoid duplicate content

export const cities = [
  {
    slug: 'klimatyzacja-krakow',
    name: 'Kraków',
    nameLocative: 'Krakowie',
    nameGenitive: 'Krakowa',
    distance: 'Nasza baza operacyjna',
    localContext: 'Kraków to serce naszej działalności. Obsługujemy wszystkie dzielnice — od Starego Miasta i Kazimierza po Nową Hutę, Podgórze, Krowodrzę i Bronowice. Montujemy klimatyzację w kamienicach, nowych apartamentowcach, biurach oraz lokalach usługowych.',
    specificity: ['Wszystkie dzielnice Krakowa', 'Kamienice i apartamentowce', 'Biura i lokale komercyjne', 'Krótki czas reakcji serwisu'],
  },
  {
    slug: 'klimatyzacja-wieliczka',
    name: 'Wieliczka',
    nameLocative: 'Wieliczce',
    nameGenitive: 'Wieliczki',
    distance: '12 km od Krakowa',
    localContext: 'Obsługujemy zarówno zabytkowe kamienice w centrum Wieliczki, jak i nowe osiedla w Nowej Wieliczce. Dzięki bliskości Krakowa dojazd jest bezpłatny, a czas reakcji krótki.',
    specificity: ['Kamienice w centrum', 'Nowe osiedla mieszkaniowe', 'Domy jednorodzinne', 'Lokale usługowe przy kopalni soli'],
  },
  {
    slug: 'klimatyzacja-niepolomice',
    name: 'Niepołomice',
    nameLocative: 'Niepołomicach',
    nameGenitive: 'Niepołomic',
    distance: '~25 km od Krakowa',
    localContext: 'Obsługujemy klientów indywidualnych i firmy ze Strefy Ekonomicznej Niepołomice. Nasze rozwiązania sprawdzają się zarówno w halach produkcyjnych, biurach jak i domach jednorodzinnych w okolicach Puszczy Niepołomickiej.',
    specificity: ['Strefa Ekonomiczna Niepołomice', 'Klienci komercyjni', 'Rozwijające się osiedla mieszkaniowe', 'Obiekty przy Puszczy Niepołomickiej'],
  },
  {
    slug: 'klimatyzacja-zielonki',
    name: 'Zielonki',
    nameLocative: 'Zielonkach',
    nameGenitive: 'Zielonek',
    distance: 'Gmina sąsiadująca z Krakowem',
    localContext: 'Montujemy klimatyzacje głównie w domach jednorodzinnych i małych biurach w gminie Zielonki. Obsługujemy także pobliskie miejscowości — Bibice i Batowice. Bliskość Krakowa zapewnia szybki dojazd bez dodatkowych opłat.',
    specificity: ['Domy jednorodzinne', 'Nowe osiedla', 'Małe biura i gabinety', 'Bibice i Batowice w zasięgu'],
  },
  {
    slug: 'klimatyzacja-michalowice',
    name: 'Michałowice',
    nameLocative: 'Michałowicach',
    nameGenitive: 'Michałowic',
    distance: 'Gmina na zachód od Krakowa',
    localContext: 'Działamy w Michałowicach i sąsiednich miejscowościach — Masłów, Raciborowice. Obsługujemy nowe osiedla mieszkaniowe oraz rozbudowujące się gospodarstwa przy A4. Dojazd z Krakowa jest bezpłatny.',
    specificity: ['Nowe budownictwo jednorodzinne', 'Dostęp z autostrady A4', 'Masłów i Raciborowice w zasięgu', 'Domy i lokale komercyjne'],
  },
  {
    slug: 'klimatyzacja-czarnochowice',
    name: 'Czarnochowice',
    nameLocative: 'Czarnochowicach',
    nameGenitive: 'Czarnochowic',
    distance: 'Okolice Wieliczki',
    localContext: 'Czarnochowice leżą tuż przy Wieliczce, w zasięgu naszych codziennych wyjazdów. Obsługujemy głównie domy jednorodzinne i lokale usługowe w okolicy. Łączymy wizyty z Wieliczką dla szybszej realizacji.',
    specificity: ['Domy jednorodzinne', 'Lokale usługowe', 'Bliskość Wieliczki', 'Szybki dojazd z Krakowa'],
  },
];

export function getCityBySlug(slug) {
  return cities.find(c => c.slug === slug);
}

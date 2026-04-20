// Cities data for city landing pages
// Each city has unique content to avoid Google's duplicate-content penalty.
// Fields:
//   intro: array of 2 paragraphs (~150 words total) — first sentence is a unique local hook
//   specificity: array of 4 mini-paragraphs { title, body } — 30-40 words each
//   localCase: short case study (~50 words) — anonymized or composite realities

export const cities = [
  {
    slug: 'klimatyzacja-krakow',
    name: 'Kraków',
    nameLocative: 'Krakowie',
    nameGenitive: 'Krakowa',
    distance: 'Nasza baza operacyjna',
    intro: [
      'W Krakowie najtrudniejsze montaże to zwykle te w kamienicach — na Kazimierzu, w Podgórzu, na Starym Mieście, na Salwatorze. Stropy drewniane, elewacje pod ochroną konserwatora, sąsiedzi z własnymi planami na wspólną ścianę, pion wentylacji grawitacyjnej dokładnie w miejscu, w którym chciałbyś poprowadzić rurkę freonową. Każdy z tych detali da się rozwiązać — ale tylko wtedy, gdy ekipa wie o nich, zanim rozpakuje wiertarkę.',
      'Oprócz kamienic mamy w Krakowie trzy inne realia montażowe: nowe bloki deweloperskie na Ruczaju, w Prokocimiu Nowym, w Zabłociu i Czyżynach (przepusty w ścianach, standardowy montaż), biurowce przy Rondzie Mogilskim i na Wita Stwosza (praca nocna, koordynacja z administracją) oraz domy jednorodzinne na peryferiach. Każda z tych kategorii ma swoją specyfikę, którą poznaliśmy przez 15 lat pracy w tym mieście.',
    ],
    specificity: [
      {
        title: 'Kamienice Kazimierza i Starego Miasta',
        body: 'Stropy drewniane, ochrona konserwatorska elewacji, jednostki zewnętrzne tylko od podwórka. Multi-split z jednym skraplaczem na dachu to często jedyne sensowne rozwiązanie.',
      },
      {
        title: 'Deweloperka Ruczaju i Zabłocia',
        body: 'Przepust w ścianie balkonowej zwykle już przygotowany. Sprawdzamy regulamin wspólnoty przed wyceną — niektóre zabraniają jednostek na elewacji frontowej lub narzucają konkretny model.',
      },
      {
        title: 'Biura na Rondzie Mogilskim',
        body: 'Montaż nocą lub w weekend, koordynacja z administracją biurowca, jednostki zewnętrzne na dachu (dostęp tylko z uprawnieniami wysokościowymi). Kasetony 4-kierunkowe do sufitów podwieszanych.',
      },
      {
        title: 'Apartamenty turystyczne i Airbnb',
        body: 'Priorytet to cicha praca (ocena gości zależy od snu) i szybki serwis w sezonie. Tu najczęściej idą Samsung WindFree albo Daikin Stylish — cisza i estetyka bez kompromisu.',
      },
    ],
    localCase:
      'W maju 2024 w kamienicy na Kazimierzu montowaliśmy multi-split 4-strefowy dla mieszkania 90 m² z zabytkową fasadą frontową. Jednostkę zewnętrzną umieściliśmy na dachu oficyny od strony podwórza, trasy freonu poprowadziliśmy w listwach ozdobnych za sufitem podwieszanym. Konserwator nie miał zastrzeżeń, mieszkanie funkcjonowało normalnie przez cały czas montażu, a sprzęt działa do dziś bez zgłoszeń serwisowych.',
    localContext:
      'Kraków to serce naszej działalności. Obsługujemy wszystkie dzielnice — od Starego Miasta i Kazimierza po Nową Hutę, Podgórze, Krowodrzę i Bronowice. Montujemy klimatyzację w kamienicach, nowych apartamentowcach, biurach oraz lokalach usługowych.',
  },
  {
    slug: 'klimatyzacja-wieliczka',
    name: 'Wieliczka',
    nameLocative: 'Wieliczce',
    nameGenitive: 'Wieliczki',
    distance: '12 km od Krakowa',
    intro: [
      'Wieliczka ma dwa kompletnie różne światy montażowe. Pierwszy to ścisłe centrum wokół Rynku Górnego i ulic prowadzących do Kopalni Soli — zabytkowe kamienice, pensjonaty dla turystów, restauracje obsługujące 1,3 miliona odwiedzających kopalnię rocznie. Klima w tych miejscach to nie luksus, tylko warunek, żeby goście wracali i pisali pozytywne opinie.',
      'Drugi świat to Nowa Wieliczka i sołectwa — Lednica, Krzyszkowice, Klaśno, Mietniów, Koźmice. Osiedla domów jednorodzinnych z lat 2000–2024, wznoszone przez rodziny, które świadomie wybrały spokój zamiast Krakowa. Tu montujemy klimę głównie w nowo budowanych i wykańczanych domach, często razem z instalacją pod fotowoltaikę.',
    ],
    specificity: [
      {
        title: 'Centrum historyczne wokół Kopalni',
        body: 'Kamienice z XIX w. ze stropami drewnianymi, wymagająca praca w sezonie turystycznym (maj-wrzesień). Pensjonaty potrzebują klimy gotowej przed każdym weekendem — działamy bez przestoju w obsłudze gości.',
      },
      {
        title: 'Nowe osiedla w Lednicy i Krzyszkowicach',
        body: 'Domy jednorodzinne 150–220 m², standardowy montaż bez komplikacji konserwatorskich. Często klient łączy klimę z fotowoltaiką — doradzamy, jak zoptymalizować zużycie przez autokonsumpcję.',
      },
      {
        title: 'Restauracje i punkty gastronomiczne',
        body: 'Sala konsumpcyjna — kasetonowa klima dająca równomierny nawiew. Kuchnia — okap z wentylacją mechaniczną, nie klima (tłuszcze zabijają parownik w ciągu roku).',
      },
      {
        title: 'Gmina — sołectwa i przysiółki',
        body: 'Klaśno, Mietniów, Koźmice, Byszyce — pełna swoboda montażowa, dojazd do 20 minut od centrum Wieliczki. W całej gminie dojazd bezpłatny.',
      },
    ],
    localCase:
      'Jesienią 2024 wyposażyliśmy pensjonat rodzinny w centrum Wieliczki — pięć pokojów i restauracja. Multi-split 5-strefowy w pokojach, osobno dwie jednostki kasetonowe w sali restauracyjnej. Montaż rozbity na trzy weekendy (goście w tygodniu), wszystkie jednostki zewnętrzne na dachu oficyny. Przez cały sezon letni 2025 — zero zgłoszeń serwisowych.',
    localContext:
      'Obsługujemy zarówno zabytkowe kamienice w centrum Wieliczki, jak i nowe osiedla w Nowej Wieliczce. Dzięki bliskości Krakowa dojazd jest bezpłatny, a czas reakcji krótki.',
  },
  {
    slug: 'klimatyzacja-niepolomice',
    name: 'Niepołomice',
    nameLocative: 'Niepołomicach',
    nameGenitive: 'Niepołomic',
    distance: '~25 km od Krakowa',
    intro: [
      'Niepołomice to dla nas dwie zupełnie różne kategorie klientów w jednym mieście. Pierwsza to Niepołomicka Strefa Ekonomiczna — fabryki MAN Trucks, Nidec, Valeo, Coca-Cola HBC i ich podwykonawcy. Biura, zaplecza administracyjne, stołówki pracownicze, lokale gastronomiczne dla załóg — wszystko to wymaga klimatyzacji komercyjnej z umowami serwisowymi i fakturami VAT.',
      'Druga kategoria to miasto i sołectwa — Zagrody, Zakościele, Podłęże, Staniątki. Osiedla deweloperskie z lat 2010–2024, domy jednorodzinne, rodziny, które wyprowadziły się z Krakowa po pandemii, szukając ogrodu i spokoju w okolicach Puszczy Niepołomickiej. Tu klimatyzacja to element wyposażenia nowego domu — planowana od początku, a nie dokładana po latach.',
    ],
    specificity: [
      {
        title: 'Strefa Ekonomiczna — biura i stołówki',
        body: 'Klient biznesowy wymaga faktury VAT, umowy serwisowej i SLA na reakcję w 48h. Obsługujemy biura 20–300 m² w fabrykach i u ich podwykonawców.',
      },
      {
        title: 'Osiedla Zagrody i Zakościele',
        body: 'Nowa deweloperka jednorodzinna, standardowe montaże bez komplikacji. Często dwie–trzy strefy klimatyzacji w domu 150 m² — salon z kuchnią plus sypialnie.',
      },
      {
        title: 'Domy przy Puszczy Niepołomickiej',
        body: 'Staniątki, Zabierzów Bocheński, Podbranki — osiedla leśne. Cień drzew schładza naturalnie, klima pracuje mniej, ale klienci chętnie ją wybierają dla komfortu w upalne tygodnie.',
      },
      {
        title: 'Niepołomice centrum — kamienica i blok',
        body: 'Ratusz renesansowy i kilka kamienic w centrum miasta. Bloki czteropiętrowe przy ul. Grunwaldzkiej i Grabskiej — standard deweloperski, przepusty w ścianach zwykle przygotowane.',
      },
    ],
    localCase:
      'Wiosną 2024 realizowaliśmy kontrakt dla podwykonawcy z SSE Niepołomice — biuro 120 m² z czterema gabinetami i open-space dla dwunastu osób. Zamontowaliśmy multi-split VRF z jedną jednostką zewnętrzną na dachu i pięcioma kasetonami 4-kierunkowymi w suficie podwieszanym. Umowa serwisowa obejmuje dwa przeglądy rocznie i priorytetową reakcję 48h.',
    localContext:
      'Obsługujemy klientów indywidualnych i firmy ze Strefy Ekonomicznej Niepołomice. Nasze rozwiązania sprawdzają się zarówno w halach produkcyjnych, biurach jak i domach jednorodzinnych w okolicach Puszczy Niepołomickiej.',
  },
  {
    slug: 'klimatyzacja-zielonki',
    name: 'Zielonki',
    nameLocative: 'Zielonkach',
    nameGenitive: 'Zielonek',
    distance: 'Gmina sąsiadująca z Krakowem',
    intro: [
      'Zielonki to jedna z najzamożniejszych gmin Małopolski — i widać to w projektach, które tu realizujemy. Domy 200–300 m², działki z ogrodami i basenami, garaże na dwa–trzy samochody, gabinety prywatne w osobnych budynkach. Klient zielonecki rzadko patrzy tylko na cenę — najczęściej pyta o trwałość, poziom hałasu w sypialni, dyskrecję jednostki zewnętrznej w ogrodzie.',
      'Pracujemy głównie w Bibicach, Batowicach, Trojanowicach, Węgrzcach i Korzkwi. Każda z tych miejscowości ma inną zabudowę — od pojedynczych domów na dużych działkach po nowe osiedla deweloperskie z domami w zabudowie bliźniaczej. Duża część zleceń przychodzi z polecenia sąsiada lub przyjaciela — w zamożnej, zżytej społeczności pierwsze zlecenie otwiera drzwi do kolejnych dziesięciu.',
    ],
    specificity: [
      {
        title: 'Bibice — nowe osiedla jednorodzinne',
        body: 'Domy 180–250 m² z ogrodami, najczęściej cztery–pięć stref klimatyzacji (sypialnie piętra, salon parter, gabinet). Segment premium — Daikin, Mitsubishi, Panasonic — nie budżet.',
      },
      {
        title: 'Batowice i Trojanowice',
        body: 'Domy z basenami, saunami, gabinetami prywatnymi w osobnych budynkach. Instalacja kilku niezależnych systemów na jednej działce, czasem z klimą jako wsparciem ogrzewania dla pompy ciepła powietrze-woda.',
      },
      {
        title: 'Węgrzce i Korzkiew',
        body: 'Mieszanka zabudowy — starsze domy remontowane i nowa deweloperka. W remontach prowadzimy trasy w korytkach lub za listwami; w nowych budowach standardowo „pod tynk” przed wykończeniem.',
      },
      {
        title: 'Gabinety i klienci B2B',
        body: 'Lekarze, prawnicy, specjaliści z własnymi gabinetami w budynkach przy domach. Normy PN-EN dla gabinetów medycznych, cicha praca, filtracja F7 — to standard, nie dodatek.',
      },
    ],
    localCase:
      'Latem 2024 zrealizowaliśmy wielostrefowy system w domu 280 m² w Bibicach. Pięć splitów premium Mitsubishi Electric serii MSZ-LN (kolory dobrane do wnętrz każdego pokoju), jednostki zewnętrzne ukryte za ścianką techniczną za garażem. Po montażu klient polecił nas dwóm sąsiadom — obie realizacje tego samego roku.',
    localContext:
      'Montujemy klimatyzacje głównie w domach jednorodzinnych i małych biurach w gminie Zielonki. Obsługujemy także pobliskie miejscowości — Bibice i Batowice. Bliskość Krakowa zapewnia szybki dojazd bez dodatkowych opłat.',
  },
  {
    slug: 'klimatyzacja-michalowice',
    name: 'Michałowice',
    nameLocative: 'Michałowicach',
    nameGenitive: 'Michałowic',
    distance: 'Gmina na zachód od Krakowa',
    intro: [
      'Michałowice to gmina pragmatyczna. Klient patrzy na stosunek ceny do jakości, niekoniecznie szuka premium z japońską marką — często woli Panasonic, Haier albo Gree w dobrej cenie niż Daikin za dwa razy tyle. To zmienia dobór urządzeń i sposób rozmowy. Zamiast prezentować najdroższy wariant, zaczynamy od wersji sensownej i dopiero jeśli klient chce, pokazujemy wyższe segmenty.',
      'Drugie oblicze gminy to biznes przy autostradzie A4 — magazyny Prologis, LogisticCity, mniejsze firmy transportowe z własnymi siedzibami w Masłowie, Raciborowicach i Michałowicach. Tu potrzeba klimy w biurach zaplecza logistycznego, gdzie pracuje 10–30 osób w open-space, i w kilku gabinetach obok. Realia komercyjne, klient B2B, faktura VAT standardem.',
    ],
    specificity: [
      {
        title: 'Masłów — osiedle przy A4',
        body: 'Szybki rozwój od 2015, deweloperka jednorodzinna i szeregówki. Blisko zjazdu z A4 — dojazd z Krakowa przez autostradę bywa szybszy niż do niektórych dzielnic miasta.',
      },
      {
        title: 'Raciborowice',
        body: 'Wieś z gotyckim kościołem i nowoczesną zabudową. Mix starszych domów do remontu i nowej deweloperki. Klient zróżnicowany — od inwestora po rodzinę z pierwszym kredytem.',
      },
      {
        title: 'Książniczki i Kończyce',
        body: 'Wieś rolnicza stopniowo zmieniająca się w podmiejską. Klient „pierwsza klima w domu” — potrzebuje spokojnego wytłumaczenia, kiedy używać jako chłodzenie, kiedy jako dogrzewanie, jak serwisować.',
      },
      {
        title: 'Logistyka — magazyny przy A4',
        body: 'Biura zaplecza, 50–200 m² open-space. Multi-split VRF z jedną jednostką zewnętrzną na dachu budynku. Umowy serwisowe z priorytetem, bo awaria w sezonie to dezorganizacja całej firmy.',
      },
    ],
    localCase:
      'Jesienią 2024 wyposażyliśmy biuro obsługi jednej z firm transportowych w Masłowie — 140 m² podzielone na open-space dla dyspozytorów i cztery gabinety zarządu. Jedna jednostka zewnętrzna VRF Fujitsu AIRSTAGE na dachu, sześć wewnętrznych kasetonów w suficie podwieszanym. Umowa serwisowa: przegląd wiosną i jesienią.',
    localContext:
      'Działamy w Michałowicach i sąsiednich miejscowościach — Masłów, Raciborowice. Obsługujemy nowe osiedla mieszkaniowe oraz rozbudowujące się gospodarstwa przy A4. Dojazd z Krakowa jest bezpłatny.',
  },
  {
    slug: 'klimatyzacja-czarnochowice',
    name: 'Czarnochowice',
    nameLocative: 'Czarnochowicach',
    nameGenitive: 'Czarnochowic',
    distance: 'Okolice Wieliczki',
    intro: [
      'Czarnochowice to sołectwo gminy Wieliczka, ale rośnie w swoim własnym tempie. Przez ostatnią dekadę przybyło tu nowych osiedli deweloperskich — rodziny, które nie chciały już mieszkać w Wieliczce, a do Krakowa mają dokładnie 20 minut autem. Zabudowa mieszana: starsze domy z lat 70–90 remontowane do dzisiejszych standardów i zupełnie nowe segmenty przy drodze nr 94.',
      'Do Czarnochowic przyjeżdżamy zwykle po drodze do Wieliczki albo z Wieliczki — to pozwala nam utrzymać bezpłatny dojazd bez wpływu na końcową wycenę. Typowe zlecenie to dom 130–180 m², trzy–cztery strefy klimatyzacji, budżet mid. Klient chętnie słucha rekomendacji i wybiera multi-split, bo jeden skraplacz na elewacji to czystsza estetyka niż kilka małych.',
    ],
    specificity: [
      {
        title: 'Nowe osiedla deweloperskie',
        body: 'Segmenty i domy bliźniacze z lat 2015–2025. Standardowy montaż bez komplikacji, przepusty w ścianach często przygotowane. Typowa instalacja — trzy strefy, multi-split ze średniej półki.',
      },
      {
        title: 'Starsze domy w remoncie',
        body: 'Zabudowa z lat 70–90, aktualnie modernizowana przez nowych właścicieli. Trasy prowadzimy w korytkach lub za listwami — mniej elegancko niż w nowych domach, ale akceptowalnie.',
      },
      {
        title: 'Klient długoterminowy',
        body: 'W Czarnochowicach ludzie kupują dom na 15–20 lat, nie na pięć. Klimatyzacja to inwestycja, nie gadżet. Wybierają segment mid albo mid-premium — nie budżet, ale też nie Daikin bez potrzeby.',
      },
      {
        title: 'Bliskość Wieliczki i Krakowa',
        body: 'Droga nr 94 daje szybki dojazd w obie strony. Do Wieliczki 5 minut, do centrum Krakowa 20 minut przez autostradę A4. Realizacje łączone z Wieliczką — taniej, szybciej.',
      },
    ],
    localCase:
      'W 2023 zrealizowaliśmy kompletny montaż dla nowego segmentu 160 m² przy drodze do Niepołomic. Multi-split 4-strefowy Panasonic Etherea — salon z otwartą kuchnią, dwie sypialnie i gabinet. Jedna jednostka zewnętrzna ukryta w zabudowie technicznej za garażem. Klient polecił nas sąsiadowi — druga realizacja dwa miesiące później.',
    localContext:
      'Czarnochowice leżą tuż przy Wieliczce, w zasięgu naszych codziennych wyjazdów. Obsługujemy głównie domy jednorodzinne i lokale usługowe w okolicy. Łączymy wizyty z Wieliczką dla szybszej realizacji.',
  },
];

export function getCityBySlug(slug) {
  return cities.find(c => c.slug === slug);
}

// Montaż page content
// 8 brand cards with substance, split/multi, heating, applications, advisory.

export const montazContent = {
  processSteps: [
    {
      num: '01',
      title: 'Bezpłatna wizja lokalna',
      desc: 'Przyjeżdżamy, mierzymy pomieszczenia, sprawdzamy ściany zewnętrzne, trasy rurek, miejsca na jednostki zewnętrzne. Bez tego nie da się uczciwie wycenić — zdjęcia z Messengera nie wystarczą.',
    },
    {
      num: '02',
      title: 'Dobór urządzenia i wycena',
      desc: 'W ciągu dwóch dni roboczych dostajesz wycenę z konkretnymi modelami i rozpisanymi pozycjami. Proponujemy zazwyczaj 2–3 warianty w różnych budżetach, a nie jeden narzucony.',
    },
    {
      num: '03',
      title: 'Umówienie terminu',
      desc: 'Ustalamy datę, dostarczamy sprzęt na miejsce, potwierdzamy godzinę rozpoczęcia prac. Split domowy — 4–6 godzin, multi-split 3–4 jednostki — 2 dni.',
    },
    {
      num: '04',
      title: 'Montaż',
      desc: 'Wiercenie z odsysaniem pyłu, meble pod folią, trasy freonu z izolacją kauczukową, mocowania antywibracyjne. Po nas podłoga jest czystsza niż była.',
    },
    {
      num: '05',
      title: 'Próba, napełnienie, rozruch',
      desc: 'Próba szczelności azotem, vacuum, napełnienie czynnikiem, test wszystkich trybów, instruktaż pilota i aplikacji. Dokumenty gwarancyjne przekazujemy od ręki.',
    },
  ],

  advisorySteps: [
    {
      title: '1. Rozmowa o tym, jak używasz mieszkania',
      desc: 'Ile osób śpi w sypialni, czy kuchnia jest otwarta na salon, jakie są okna, czy klimatyzacja ma też grzać w zimie. Bez tego moc dobrana jest na oko — a różnica 2,5 kW vs 3,5 kW to realnie inny hałas, inne zużycie prądu, inna trwałość sprzętu.',
    },
    {
      title: '2. Dwie–trzy opcje do wyboru',
      desc: 'Proponujemy warianty w różnych segmentach cenowych — budget, mid, premium — z konkretnymi modelami i różnicami, które mają znaczenie. Nie narzucamy jednej marki, z którą mamy najlepszą prowizję.',
    },
    {
      title: '3. Wycena pakietowa',
      desc: 'Urządzenie, montaż, uruchomienie, izolacja, kabel, koryta, napełnienie czynnikiem, utylizacja opakowań — wszystko w jednej cenie. Bez dopłat na miejscu, bez „niespodzianek w trakcie”.',
    },
  ],

  brands: [
    {
      name: 'Daikin',
      country: 'Japonia',
      segment: 'Premium',
      forWhom: 'Dom wysokiego standardu, budżet na 10+ lat spokoju',
      strengths:
        'Najlepsza technologia w segmencie domowym, najniższe zużycie energii (SCOP do 5.10 w serii Emura), bardzo cicha praca, rozbudowana sieć serwisowa w PL. Seria Perfera to obecnie jeden z najlepszych domowych splitów na rynku.',
    },
    {
      name: 'Mitsubishi Electric',
      country: 'Japonia',
      segment: 'Premium',
      forWhom: 'Inwestor długoterminowy, dom w regionie z mroźnymi zimami',
      strengths:
        'Legendarna niezawodność (15–20 lat pracy to norma). Seria Zubadan pracuje z pełną mocą grzewczą do -25°C — jedyne takie rozwiązanie w segmencie splitowym. Linia MSZ-LN dostępna w pięciu kolorach, dla tych, którym zależy na designie.',
    },
    {
      name: 'Panasonic',
      country: 'Japonia',
      segment: 'Mid-premium',
      forWhom: 'Rodzina z dziećmi, alergicy, dom z codzienną intensywną pracą klimy',
      strengths:
        'Technologia nanoe X — generator jonów hydroksylowych dezaktywujący wirusy i alergeny na powierzchniach i w powietrzu. Solidna japońska jakość bez dopłaty za topowy marketing. Seria Etherea dobrze łączy wydajność, cenę i design.',
    },
    {
      name: 'Fujitsu',
      country: 'Japonia',
      segment: 'Mid-premium',
      forWhom: 'Biuro, sypialnia, gabinet — wszędzie gdzie liczy się cisza',
      strengths:
        'Jedne z najcichszych splitów na rynku (seria Nocria X — 19 dB w trybie nocnym). Bardzo dobra wydajność w trybie chłodzenia. Silna obecność w segmencie biur (multi-split VRF AIRSTAGE).',
    },
    {
      name: 'LG',
      country: 'Korea Południowa',
      segment: 'Mid',
      forWhom: 'Salon z efektem wizualnym, klient ceniący stosunek ceny do jakości',
      strengths:
        'Seria Artcool z lustrzanym panelem lub ekranem kolorowym — mocny akcent w salonie. Aplikacja ThinQ jest porządnie zrobiona. 10-letnia gwarancja na sprężarkę. Dostępność w dużych sieciach elektronicznych ułatwia porównanie cen.',
    },
    {
      name: 'Samsung',
      country: 'Korea Południowa',
      segment: 'Mid',
      forWhom: 'Sypialnia, gabinet — wszędzie gdzie przewiew jest problemem',
      strengths:
        'Unikalna technologia WindFree — powietrze wydostaje się przez 23 tysiące mikroperforacji zamiast jednym strumieniem. W sypialni eliminuje uczucie wiania na śpiącą osobę. Integracja z SmartThings dla domu Samsung.',
    },
    {
      name: 'Haier',
      country: 'Chiny',
      segment: 'Mid-budget',
      forWhom: 'Mieszkanie deweloperskie, biuro startupowe, budżet do 4000 zł za urządzenie',
      strengths:
        'Agresywnie wyceniana, z coraz lepszym designem (serie Flexis, Tundra). Funkcja Self-Cleaning — automatyczne mrożenie i rozmrażanie parownika w celu oczyszczenia. 10-letnia gwarancja na sprężarkę inwerterową.',
    },
    {
      name: 'Gree',
      country: 'Chiny',
      segment: 'Budget',
      forWhom: 'Pierwsza klima, racjonalny wybór bez dopłaty za logo',
      strengths:
        'Najlepszy stosunek ceny do jakości w segmencie budget — w ciągu ostatnich pięciu lat marka zrobiła ogromny skok jakościowy. OEM dla wielu europejskich marek (Kaisai, Sinclair). Seria Clivia z nowoczesnym designem konkuruje wizualnie z markami premium.',
    },
  ],

  splitVsMulti: {
    intro:
      'Split to jedna jednostka wewnętrzna połączona z jedną jednostką zewnętrzną. Multi-split to jedna jednostka zewnętrzna obsługująca kilka (2–5) jednostek wewnętrznych w różnych pomieszczeniach. Wybór między nimi jest nie tyle techniczny, co architektoniczny — zależy od układu budynku i miejsca na elewacji.',
    split: {
      title: 'System split (1+1)',
      lead: 'Najwyższa sprawność, najprostszy montaż, niezależna praca każdej klimatyzacji.',
      body:
        'Każda klima split ma własną sprężarkę dobraną dokładnie do swojego pomieszczenia, stąd współczynnik SCOP jest najwyższy w segmencie (do 5.1 w urządzeniach premium). Awaria jednej jednostki nie wpływa na pozostałe, każdą można niezależnie wyłączyć, ustawić inną temperaturę czy inny tryb. Minus: przy trzech–czterech pomieszczeniach masz tyle samo skraplaczy na elewacji — rozwiązanie dobre tam, gdzie jest miejsce na ich rozmieszczenie, słabsze dla kamienic i mieszkań z jednym balkonem.',
    },
    multi: {
      title: 'System multi-split (1+N)',
      lead: 'Jedna jednostka zewnętrzna, czystsza elewacja, jeden punkt serwisowy.',
      body:
        'Multi-split to wybór praktyczny tam, gdzie na elewacji nie zmieścisz kilku skraplaczy — kamienice pod ochroną konserwatorską, mieszkania z pojedynczym balkonem, obiekty z regulaminem wspólnoty ograniczającym ingerencję w fasadę. Kompromis: SCOP jest niższy o 5–15% niż w pojedynczych splitach, a awaria jednostki zewnętrznej wyłącza wszystkie wewnętrzne. W nowszych modelach (Daikin MXM, Mitsubishi MXZ) możliwa praca mieszana — część pomieszczeń chłodzi, część grzeje.',
    },
    recommendation:
      'W 70% przypadków wybieramy split pojedynczy — przy jednym–dwóch pomieszczeniach prawie zawsze, przy trzech też chętnie, jeśli elewacja pozwala. Multi-split proponujemy głównie dla kamienic, mieszkań z ograniczeniami wspólnoty i obiektów pod ochroną konserwatorską w centrum Krakowa.',
  },

  ogrzewanie: {
    intro:
      'Nowoczesna klimatyzacja inwerterowa to technicznie pompa ciepła powietrze-powietrze — ten sam obieg freonu może pracować w obie strony. Latem odbiera ciepło z mieszkania i oddaje na zewnątrz, zimą odwrotnie. W praktyce oznacza to, że za cenę samej klimy dostajesz drugie, bardzo efektywne źródło ciepła.',
    paragraphs: [
      'Sprawność w trybie ogrzewania jest zaskakująco wysoka. Przy temperaturze zewnętrznej +7°C klimatyzacja premium osiąga COP 4,5–4,8 — co oznacza, że z 1 kWh prądu produkuje 4,5–4,8 kWh ciepła. Dla porównania, grzejnik elektryczny ma COP równy 1. Przy spadku temperatury do -7°C sprawność maleje, ale nadal wynosi 3,0–3,8 (zależnie od modelu). Dopiero przy -15°C i niższych standardowa klima przestaje dawać pełną moc i przechodzi w tryb awaryjnego grzania grzałką elektryczną — chyba że masz Zubadana Mitsubishi albo Daikina Nordic, które utrzymują pełną moc do -25°C.',
      'Ekonomicznie wychodzi to lepiej niż większość źródeł ciepła. Dom 120 m² z zapotrzebowaniem 8000 kWh ciepła rocznie: gaz ziemny ≈ 2900 zł, pellet ≈ 2500 zł, grzejnik elektryczny ≈ 7200 zł, klimatyzacja jako pompa (SCOP 4,0) ≈ 1800 zł. W hybrydzie z fotowoltaiką liczby są jeszcze lepsze — zwłaszcza wiosną i jesienią, kiedy PV dobrze produkuje, a klima grzeje sypialnie lub biuro.',
      'Klima jako ogrzewanie najbardziej sprawdza się w domach energooszczędnych, biurach używanych głównie w dzień (kiedy jest cieplej), garażach, warsztatach i na poddaszach, do których ogrzewanie centralne i tak nie sięga. W starym, słabo ocieplonym domu nie zastąpi w pełni pieca — ale świetnie sprawdzi się jako wsparcie: tańsze dogrzewanie sypialni lub salonu w sezonach przejściowych.',
    ],
  },

  zastosowania: {
    intro:
      'Montujemy klimatyzacje w każdym typie obiektu — od kawalerki w bloku, po biurowce z klimą VRF na kilkaset metrów powierzchni. Każdy typ ma swoje realia, których nie da się pominąć na etapie wyceny.',
    cards: [
      {
        title: 'Domy jednorodzinne',
        body:
          'W nowych domach najlepiej planować klimatyzację jeszcze przed tynkowaniem — trasy freonu w warstwie izolacji stropów i w ściankach działowych to najbardziej elegancki montaż, bez widocznych przewodów i korytek. W istniejących domach prowadzimy trasy w korytkach lub za listwami ozdobnymi — mniej estetyczne, ale realne. Poddasza nagrzewają się intensywniej niż parter, więc moc dobierzemy o 20–30% wyższą niż wynika z samej powierzchni.',
      },
      {
        title: 'Mieszkania w kamienicach',
        body:
          'Krakowskie kamienice na Kazimierzu, Starym Mieście i Podgórzu to osobna kategoria. Stropy często drewniane, elewacje pod ochroną konserwatora, sąsiedzi z własnymi planami na wspólną ścianę. Jednostkę zewnętrzną wyprowadzamy od strony podwórka, tam gdzie konserwator nie ma zastrzeżeń. Dla trzech–czterech pomieszczeń multi-split z jednym skraplaczem na dachu lub we wnętrzu podwórza jest często jedynym sensownym wyborem.',
      },
      {
        title: 'Mieszkania deweloperskie',
        body:
          'W nowych blokach (Ruczaj, Prokocim Nowy, Zabłocie, Czyżyny) deweloperzy zwykle zostawiają przepusty w ścianach balkonowych — to ułatwia montaż. Sprawdzamy zawsze regulamin wspólnoty przed wyceną: niektóre wspólnoty zabraniają jednostek na elewacji frontowej albo wymagają konkretnego modelu. Typowe mieszkanie 2+kk obsłuży split 3,5 kW, 3+kk — multi-split lub dwa splity w kluczowych pomieszczeniach.',
      },
      {
        title: 'Biura, gabinety, lokale',
        body:
          'W open-space montujemy jednostki kasetonowe (sufitowe 4-kierunkowe) albo kanałowe schowane za sufitem podwieszanym — dają równomierny nawiew bez widocznych jednostek. W gabinetach medycznych dbamy o filtrację klasy F7 i niski poziom hałasu (pacjent musi móc rozmawiać). Gastronomia ma swoje wyzwania — tłuszcze z kuchni zabijają parownik, dlatego w sali konsumpcyjnej klima sprawdza się świetnie, a w kuchni lepszym rozwiązaniem jest dobra wentylacja mechaniczna.',
      },
    ],
  },
};

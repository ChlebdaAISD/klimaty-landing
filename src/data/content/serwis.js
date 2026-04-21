// Serwis page content
// Style: natural paragraphs, minimal bullets, no AI phrasing.

export const serwisContent = {
  kiedy: {
    intro:
      'Klimatyzacja to jedno z niewielu urządzeń w domu, którego używasz intensywnie przez cztery miesiące w roku, a przez kolejne osiem o nim zapominasz. To się mści. Producenci wpisują roczny przegląd jako warunek zachowania gwarancji nie po to, żeby dorobić — tylko dlatego, że bez przeglądu parownik zarasta biofilmem, spada wydajność, rośnie zużycie prądu, a w skrajnych przypadkach pojawia się grzyb. Zalecamy jeden pełny przegląd rocznie, najlepiej wiosną przed sezonem chłodzenia, kiedy u serwisantów są jeszcze wolne terminy, a ceny nie wzrosły.',
    paragraphs: [
      'Dla klimatyzacji domowej — jeden przegląd rocznie, wiosną. Dla biura z dużym ruchem — dwa razy: wiosną i jesienią. W gastronomii, gdzie tłuszcze z powietrza oblepiają parownik, nawet co trzy miesiące to nie jest przesada. Serwerownia albo dom z klimą używaną całorocznie (również jako ogrzewanie) wchodzi w kategorię komercyjną — częstsze przeglądy, krótsze interwały.',
      'Regulacje F-Gaz (rozporządzenie UE 517/2014 z nowelizacją 2024/573) nakładają obowiązek kontroli szczelności tylko na instalacje z większą ilością czynnika — typowa klimatyzacja domowa znajduje się poniżej tego progu, więc obowiązku ustawowego nie ma. Jest za to obowiązek wynikający z warunków gwarancji producenta, zdrowy rozsądek i najprostsza ekonomia: brudny parownik zużywa o 15–30% więcej prądu. Przegląd zwraca się w ciągu jednego sezonu.',
    ],
    schedule: [
      { context: 'Dom / mieszkanie', frequency: '1× rok, wiosną' },
      { context: 'Biuro, gabinet, sklep', frequency: '1–2× rok' },
      { context: 'Gastronomia, kuchnia', frequency: '2–4× rok' },
      { context: 'Serwerownia, data center', frequency: '4× rok + monitoring' },
    ],
  },

  czyszczenie: {
    intro:
      'Pełne czyszczenie klimatyzacji to kilkanaście czynności, a nie samo przetarcie obudowy szmatką. Poniżej skrót tego, co robimy podczas standardowego serwisu domowego — całość zajmuje 45–90 minut przy pojedynczym splicie i 2–3 godziny przy multi-splicie z czterema jednostkami wewnętrznymi.',
    items: [
      {
        title: 'Parownik i filtry (jednostka wewnętrzna)',
        desc: 'Wyjęcie i umycie filtrów siatkowych w ciepłej wodzie z detergentem neutralnym. Pokrycie parownika preparatem enzymatycznym (typu Sanit Therm albo AC-Safe) rozpuszczającym biofilm — spłukiwanie następuje automatycznie przez skropliny w pierwszych godzinach pracy. Kontrola turbiny wentylatora i łożysk.',
      },
      {
        title: 'Skraplacz (jednostka zewnętrzna)',
        desc: 'Oczyszczenie lameli z osadów pyłu, pyłków drzew, liści i pajęczyn. Mycie pod kontrolowanym ciśnieniem specjalistyczną myjką klimatyzacyjną — nie zwykłą ciśnieniówką, bo ta zagięłaby cienkie lamele. Kontrola mocowań uchwytów ściennych i wibroizolatorów.',
      },
      {
        title: 'Taca skroplinowa i odpływ',
        desc: 'Czyszczenie tacy z biofilmu i stojącej wody — to właśnie tu rozwijają się bakterie. Udrożnienie rury skroplinowej, bo zapchany odpływ jest najczęstszą przyczyną kapiącej wody z jednostki wewnętrznej. Test pompki skroplinowej, jeśli jest w instalacji.',
      },
      {
        title: 'Układ chłodniczy i elektryka',
        desc: 'Pomiar ciśnień po stronie ssawnej i tłocznej oraz temperatur parowania i skraplania. Obliczenie przegrzania i dochłodzenia — to pokaże, czy czynnik jest na właściwym poziomie i czy nie ma wycieku. Kontrola styczników, bezpieczników i test wszystkich trybów pracy.',
      },
    ],
    dezynfekcja:
      'Dla klientów z alergiami lub astmą, a także po dłuższej przerwie w serwisie, oferujemy ozonowanie pomieszczenia generatorem ozonu. Zabieg trwa około godziny, a po nim trzeba odczekać kolejne 1–2 godziny poza pomieszczeniem (ozon jest toksyczny przy wdychaniu). Niszczy grzyby, pleśnie, wirusy i bakterie na powierzchniach, do których pianka dezynfekcyjna nie dociera.',
  },

  naprawa: {
    intro:
      'Diagnostyka zaczyna się od Twojego opisu: jak objawia się problem, od kiedy trwa i czy coś zmieniło się tuż przed awarią. Potem oględziny urządzenia, odczyt kodów błędów ze sterownika, pomiary ciśnień i prądów. Cztery najczęstsze przypadki, z którymi się spotykamy:',
    cases: [
      {
        symptom: 'Klima nie chłodzi albo chłodzi słabo',
        diagnosis:
          'Zwykle to nieszczelność układu — czynnik powoli uciekł z obiegu, sprężarka pracuje, ale w układzie brakuje medium do schłodzenia powietrza. Rzadziej przyczyną jest brudny parownik albo skraplacz, które ograniczają przepływ powietrza. Najgorszy wariant to uszkodzona sprężarka. Pomiary ciśnień i test detektorem wycieku dają jednoznaczną odpowiedź w 15 minut.',
      },
      {
        symptom: 'Klima głośno pracuje',
        diagnosis:
          'Najczęściej są to łożyska wentylatora — typowa usterka po 7–10 latach intensywnej pracy. Czasem przyczyną są poluzowane mocowania skraplacza albo zużyte wibroizolatory. Szum sprężarki sam w sobie bywa normalny — powinien zaniepokoić dopiero wtedy, gdy jest pulsujący albo zgrzytliwy.',
      },
      {
        symptom: 'Woda kapie z jednostki wewnętrznej',
        diagnosis:
          'Zapchany odpływ skroplin — w 80% przypadków chodzi właśnie o to. Biofilm i kurz tworzą korek w rurze, woda się cofa i przelewa z tacy. Rzadsze przyczyny: niewłaściwe nachylenie odpływu (błąd montażu, wymaga przełożenia rury), uszkodzona pompka skroplinowa albo przymarznięty parownik przy zbyt niskim poziomie czynnika.',
      },
      {
        symptom: 'Klima sama się wyłącza albo pokazuje błąd',
        diagnosis:
          'Kod błędu ze sterownika to pierwsza wskazówka — każdy producent ma własną listę kodów usterek, my mamy te tabele pod ręką. Najczęstsze przyczyny: przegrzanie sprężarki (zabezpieczenie termiczne), zadziałanie presostatu niskiego ciśnienia (brak czynnika), błąd komunikacji między jednostkami albo uszkodzona płyta sterująca (typowe po przepięciach burzowych).',
      },
    ],
    outro:
      'Po diagnozie mówimy, co konkretnie trzeba zrobić i ile to będzie kosztować. Naprawę wykonujemy zazwyczaj tego samego dnia, jeśli części są standardowe (czujniki, styczniki, pompki). Na sprężarkę, płytę sterującą albo element dedykowany dla konkretnego modelu czeka się 2–5 dni roboczych.',
  },

  fGaz: {
    heading: 'Pracujemy zgodnie z F-Gaz',
    body:
      'Posiadamy Certyfikat osobowy F-Gaz kategorii I — najszersze uprawnienia w branży, pozwalające legalnie instalować, serwisować i utylizować klimatyzatory z dowolną ilością czynnika fluorowanego. Każdą czynność serwisową dokumentujemy w karcie urządzenia — masz więc pełną historię swojego sprzętu, która przydaje się przy ewentualnej reklamacji gwarancyjnej albo sprzedaży mieszkania.',
  },
};

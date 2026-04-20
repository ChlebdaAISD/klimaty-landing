// FAQ content — 16 answers
// Format: categories with icon, title, and Q&A pairs.
// Answer style: 100-180 words, first sentence is the concrete answer,
// second sentence the key nuance, the rest is how we approach it.
// No "W klimaTY..." opener, minimal bullet lists, no AI phrasing.

export const faqContent = {
  montaz: [
    {
      q: 'Ile trwa montaż klimatyzacji?',
      a: 'Pojedynczy split w mieszkaniu to zazwyczaj 4–6 godzin pracy — od przyjazdu ekipy po włączenie pilota i rozruch. Multi-split z trzema jednostkami rozkłada się na dwa dni: pierwszy dzień to trasy, przewierty i mocowania, drugi dzień — podłączenie, próba szczelności, napełnienie czynnikiem i testy. W domu jednorodzinnym z 4–5 jednostkami to realnie 2–3 dni. Czas rośnie, jeśli trasy idą przez sufit podwieszany, jeśli ścianę zewnętrzną trzeba wiercić diamentem albo gdy klient zleca zabudowę rurek w bruzdach. Nie rzucamy jedną liczbą godzin — obiecujemy za to, że na wizji lokalnej powiemy Ci dokładnie, ile zajmie Twoje zlecenie, i potem się tego trzymamy.',
    },
    {
      q: 'Ile kosztuje montaż klimatyzacji?',
      a: 'Cena zależy od liczby jednostek, długości tras freonu, trudności przewiertów i tego, czy trzeba tynkować po bruzdach. Dlatego nie publikujemy cennika — taki, który uczciwie pokryłby wszystkie przypadki, po prostu nie istnieje. Na stronach konkurencji „montaż od X zł” prawie zawsze oznacza tylko najprostszy split na krótkiej trasie; reszta to dopłaty ujawniane dopiero na miejscu. My robimy to inaczej. Po bezpłatnej wizji lokalnej w ciągu 1–2 dni roboczych otrzymujesz jedną kwotę — i to jest kwota, którą zapłacisz. Bez dopłat, bez „niespodzianek w trakcie”, bez nagle odkrytej ściany nośnej. Wycena uwzględnia też sprzęt, jeśli dobierasz go u nas.',
    },
    {
      q: 'Czy montaż jest brudny lub głośny?',
      a: 'Nie powinien być, jeśli ekipa wie, co robi. Używamy wiertarek z odsysaniem pyłu — do każdego przewiertu podłączamy odkurzacz przemysłowy klasy M, więc kurz z tynku i cegły trafia do worka, a nie na Twoją podłogę. Meble zakrywamy folią, okolice przewiertów dodatkowo plandeką. Hałas jest — wiercenie to zawsze wiercenie — ale krótki: typowy przewiert trwa 2–4 minuty, a przez cały dzień montażu to maksymalnie 20 minut głośnej pracy. Po nas zostaje podłoga odkurzona i wytarta, a wszystkie opakowania, folie i skrawki przewodów zabieramy ze sobą. Jeśli montaż odbywa się w zamieszkanym bloku, staramy się pracować w godzinach, które nie będą przeszkadzać sąsiadom.',
    },
    {
      q: 'Czy można montować klimatyzację zimą?',
      a: 'Tak, do pewnej granicy. Montaż mechaniczny — wiercenie, przygotowanie tras, mocowania — można robić przez cały rok. Problem pojawia się przy próbie szczelności i napełnianiu czynnikiem: większość producentów określa graniczną temperaturę rozruchu na -5°C lub -10°C. Poniżej tej granicy olej w sprężarce gęstnieje, a test szczelności staje się mniej wiarygodny. Jeśli mróz utrzymuje się kilka dni i nie widać poprawy, przekładamy rozruch na pierwszy cieplejszy dzień. W praktyce zimowy montaż ma swoje plusy — dostępne są lepsze terminy, a ceny urządzeń są niższe niż w czerwcu. Klienci, którzy planują klimę na lato, często dzwonią do nas w lutym i mają wszystko gotowe, zanim zacznie się sezon.',
    },
    {
      q: 'Kiedy jest najlepszy czas na montaż?',
      a: 'Marzec, kwiecień i wrzesień — wtedy mamy najkrótsze terminy, najlepszą dostępność sprzętu i czas na to, żeby zrobić robotę bez pośpiechu. Czerwiec i lipiec to szczyt sezonu. Montaż w upale jest oczywiście możliwy, ale terminy wydłużają się do 3–4 tygodni, a niektóre urządzenia znikają z magazynów w godzinę od aktualizacji stanu. Jeśli już dziś wiesz, że następnego lata chcesz mieć klimę, umów wizję lokalną zimą. Wycena zachowuje ważność przez kilka miesięcy, a na wiosnę po prostu realizujemy montaż z pierwszeństwem. To ta sama zasada, co z oponami — kupuje się w marcu, nie w lipcu.',
    },
  ],

  serwis: [
    {
      q: 'Jak często serwisować klimatyzację?',
      a: 'Dla klimatyzacji domowej — raz w roku, najlepiej wiosną przed sezonem chłodzenia. W biurze albo sklepie z dużym ruchem lepiej dwa razy: wiosną i jesienią. W gastronomii, gdzie tłuszcze z powietrza oblepiają parownik, serwis co 3–4 miesiące to nie jest przesada. Producenci (Daikin, Mitsubishi, LG, Samsung) wpisują roczny przegląd jako warunek zachowania gwarancji — a nie jako sugestię. Poza warunkami gwarancji pozostaje jeszcze zdrowy rozsądek: brudny parownik zużywa o 15–30% więcej prądu i staje się siedliskiem pleśni. Przegląd kosztuje tyle co parę kolacji w mieście, a zwraca się w ciągu jednego sezonu w niższym rachunku za prąd. Jeśli kupiłeś używane mieszkanie z klimą o nieznanej historii — zrób pełny serwis startowy, a nie tylko roczny.',
    },
    {
      q: 'Co obejmuje przegląd klimatyzacji?',
      a: 'Pełny przegląd to kilkanaście czynności, a nie samo wytarcie obudowy. Zaczynamy od wyjęcia i umycia filtrów, potem czyścimy parownik preparatem enzymatycznym, który rozpuszcza biofilm. Sprawdzamy tacę skroplinową i odpływ — zapchany odpływ jest najczęstszą przyczyną kapiącej wody. Przy jednostce zewnętrznej myjemy lamele skraplacza, kontrolujemy wentylator i mocowania. W układzie chłodniczym mierzymy ciśnienia oraz temperatury parowania i skraplania, obliczamy przegrzanie i dochłodzenie — to daje pewność, że czynnik jest na właściwym poziomie i że nie ma wycieku. Na koniec test elektryki, test wszystkich trybów pracy i wpis do karty urządzenia. Całość trwa 45–90 minut dla domowego splita. Po wizycie dostajesz raport z wynikami pomiarów i rekomendacją, co ewentualnie wymienić w najbliższym czasie.',
    },
    {
      q: 'Ile kosztuje czyszczenie klimatyzacji?',
      a: 'Zależy od stanu urządzenia i zakresu pracy. Rutynowe czyszczenie domowego splita preparatem pianowym to jedna sprawa, czyszczenie ciśnieniowe po pięciu latach bez serwisu — zupełnie inna. Znaczenie ma też zakres: czy obsługujemy tylko jednostkę wewnętrzną, czy również skraplacz na balkonie; czy dezynfekcja kończy się na piance, czy dokładamy ozonowanie. Dlatego nie ma sensu podawać jednej ceny — musielibyśmy założyć najwyższy wariant dla bezpieczeństwa, a to wyszłoby drogo. Zamiast tego: zadzwoń, opisz urządzenie (marka, model, data ostatniego serwisu), a przez telefon podamy widełki. Przy umawianiu wizyty — finalna kwota. Żadnych dopłat na miejscu, chyba że odkryjemy awarię wymagającą naprawy (wtedy zawsze konsultujemy koszt przed rozpoczęciem prac).',
    },
    {
      q: 'Czy mogę sam czyścić filtry?',
      a: 'Tak, a nawet powinieneś — to podstawowa konserwacja, którą warto zrobić raz na miesiąc w sezonie. Wyjmujesz filtry siatkowe z jednostki wewnętrznej (zwykle dwa plastikowe panele pod osłoną frontową), myjesz w ciepłej wodzie z odrobiną płynu do naczyń, suszysz, wkładasz z powrotem. Tyle. Czego nie rób samodzielnie: nie wchodź głębiej niż filtry. Lamele parownika są cienkie jak papier i łatwo je zagiąć bez szansy na wyprostowanie. Tacy skroplinowej nie da się wyczyścić bez demontażu obudowy. Jednostki zewnętrznej w ogóle nie otwieraj — pod obudową znajdują się elementy pod wysokim ciśnieniem i napięciem. Jeśli widzisz, że filtry są już czarne po kilku tygodniach albo z klimy leci nieprzyjemny zapach, to sygnał, że potrzebna jest pianka na parowniku — wtedy dzwonisz do serwisu.',
    },
  ],

  koszty: [
    {
      q: 'Ile kosztuje klimatyzacja do domu?',
      a: 'Dla jednego splita w mieszkaniu — od kilku do kilkunastu tysięcy złotych razem z montażem, w zależności głównie od marki i mocy. Dla domu jednorodzinnego z trzema–pięcioma strefami — rząd wielkości to kilkadziesiąt tysięcy. Mocy nie dobiera się na oko: kuchnia otwarta na salon, okna południowe, piętro pod nieocieplonym dachem, liczba mieszkańców — każdy z tych czynników zmienia wymaganą moc o 15–30% i wpływa na koszt. Marka też robi różnicę: urządzenie z segmentu budget jest dwa razy tańsze od premium przy tej samej mocy, ale różni się gwarancją, poziomem hałasu i sezonową sprawnością. Zamiast rzucać przedziałem, który i tak niewiele powie, wolimy przyjechać, zmierzyć i policzyć dokładnie. Wizja lokalna jest bezpłatna — umawiasz się na 30 minut, a konkretną wycenę masz w ciągu dwóch dni.',
    },
    {
      q: 'Ile kosztuje klimatyzacja do biura?',
      a: 'Biuro to inna historia niż dom — dochodzą dwa czynniki, które znacząco zmieniają cenę. Pierwszy to typ jednostek: w biurach często wybieramy kasetony sufitowe albo jednostki kanałowe — są droższe od zwykłych splitów, ale dają lepszą estetykę i równomierny nawiew. Drugi to praca nocna — większość biurowców wymaga montażu po godzinach pracy, co podnosi koszt. Typowe małe biuro 50 m² z dwoma splitami to koszt porównywalny z mieszkaniem. Open-space 150 m² z kasetonami i multi-splitem VRF to już zupełnie inna kategoria. Dla firm oferujemy też umowy serwisowe ze stałą opłatą miesięczną, priorytetową reakcją i fakturą VAT — to się opłaca, bo awaria w dzień roboczy kosztuje więcej niż roczna opieka.',
    },
    {
      q: 'Czy wycena jest bezpłatna?',
      a: 'Tak. Wizja lokalna i wycena są całkowicie bezpłatne, bez zobowiązań i bez naliczania „dojazdu” na końcu. Umawiamy się na konkretną godzinę, przyjeżdżamy z miarką, mierzymy pomieszczenia, sprawdzamy ściany zewnętrzne, rozmawiamy o Twoich preferencjach — cichsza praca, budżet, estetyka, ogrzewanie czy tylko chłodzenie. W ciągu dwóch dni roboczych dostajesz mailem wycenę z konkretnymi urządzeniami i rozpisanymi pozycjami. Jeśli decydujesz się na współpracę — świetnie, umawiamy termin. Jeśli nie — też w porządku, koszt wizji lokalnej bierzemy na siebie. Nie bawimy się w „ukryte koszty” ani nie uzależniamy wyceny od podpisania czegokolwiek na miejscu.',
    },
  ],

  dobor: [
    {
      q: 'Jaką moc klimatyzacji potrzebuję?',
      a: 'Zasada kciuka mówi 80–100 watów na metr kwadratowy, ale to tylko punkt wyjścia. Przy standardowym mieszkaniu w bloku, z oknami wychodzącymi na północ, wystarcza 100 W/m². Przy oknach południowych lub zachodnich doliczamy 20–30%. Piętro pod dachem nieocieplonym — plus 30%. Kuchnia otwarta na salon — plus 15%, bo dochodzi ciepło wydzielane podczas gotowania. Sypialnia dla dwóch osób — plus 15%. W praktyce: 25-metrowa sypialnia w bloku to 2,5 kW (standardowe 9000 BTU), a 40-metrowy salon z kuchnią i południowym oknem — już 4,5 kW. Lepiej dobrać moc z lekkim zapasem niż z niedoborem: za słaba klimatyzacja pracuje na pełnej mocy cały czas i szybciej się zużywa. Za mocna — to drobne marnotrawstwo energii, ale urządzenie pracuje spokojniej i ma dłuższą żywotność.',
    },
    {
      q: 'Split czy multi-split — co wybrać?',
      a: 'Dla jednego lub dwóch pomieszczeń — niemal zawsze split. Dwie pojedyncze klimy mają wyższą sprawność niż jeden multi-split obsługujący dwie strefy, są tańsze w zakupie i dają niezależną kontrolę temperatury. Multi-split ma sens od trzech stref, zwłaszcza kiedy elewacja nie pozwala na kilka jednostek zewnętrznych — typowe dla kamienic w centrum Krakowa i obiektów pod ochroną konserwatorską. Jedna jednostka zewnętrzna zamiast czterech to czystsza estetyka, jeden przewiert zamiast czterech i jeden punkt serwisowy. Kompromisem jest niższy COP o 5–15% i to, że awaria jednostki zewnętrznej wyłącza wszystkie wewnętrzne. W większości domów jednorodzinnych, gdzie można swobodnie rozmieścić kilka skraplaczy, nadal stawiamy na pojedyncze splity — ale w kamienicy na Kazimierzu albo w mieszkaniu z jednym balkonem multi-split jest jedynym sensownym rozwiązaniem.',
    },
    {
      q: 'Jaką markę klimatyzacji polecacie?',
      a: 'Nie ma jednej odpowiedzi — to jak pytanie o markę samochodu. Daikin i Mitsubishi Electric to segment premium: bardzo dobre wykonanie, cicha praca, doskonały serwis w Polsce, ale też najwyższa cena. Panasonic i Fujitsu są niewiele gorsze przy niższej cenie — dobra środkowa półka. LG i Samsung oferują porządną jakość w agresywnej cenie i ciekawe dodatki (LG Artcool z designem, Samsung WindFree bez przewiewu), ale serwis w Polsce bywa wolniejszy. Gree i Haier to segment budget — przeszły duży skok jakościowy przez ostatnie pięć lat i dziś są w pełni uczciwym wyborem dla kogoś, kto patrzy na stosunek ceny do jakości. Konkretna rekomendacja zawsze zależy od pomieszczenia, budżetu i priorytetów — cisza, ogrzewanie w mrozie, estetyka, filtracja powietrza. Doradzimy na wizji lokalnej.',
    },
    {
      q: 'Klimatyzacja a pompa ciepła — różnice?',
      a: 'Technicznie klimatyzacja i pompa ciepła to ta sama technologia — sprężarkowy obieg chłodniczy, który może pracować w obie strony. Różnica tkwi w nośniku ciepła. Klimatyzacja to pompa ciepła powietrze-powietrze: ogrzewa lub chłodzi bezpośrednio powietrze w pomieszczeniu. Pompa ciepła powietrze-woda (to, co większość ludzi nazywa po prostu „pompą ciepła”) ogrzewa wodę w instalacji centralnego ogrzewania — w grzejnikach lub podłogówce. Klimatyzacja jest tańsza i szybciej grzeje, ale tylko te pomieszczenia, w których stoi jednostka wewnętrzna. Pompa powietrze-woda ogrzewa cały dom i łatwiej ją połączyć z instalacją CO, ale jest droższa w zakupie. W domu z nowym ogrzewaniem podłogowym wybierasz pompę powietrze-woda. Jeśli chcesz tylko chłodzić latem, a ogrzewanie masz już gazowe lub pelletowe — klimatyzacja wystarczy, a przy okazji zimą dogrzeje najczęściej używane pomieszczenia taniej niż piec.',
    },
  ],
};

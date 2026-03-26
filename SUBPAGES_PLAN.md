# Podstrony klimaTY — plan treści

Dokument do wykorzystania przy budowie podstron. Landing page (`/`) zawiera skrócone sekcje-zapowiedzi. Pełne treści trafiają na dedykowane podstrony.

---

## `/oferta` — Nasza Oferta

### Sekcje:
1. **Hero podstrony** — „Kompleksowa obsługa klimatyzacji" (nagłówek + krótki lead)
2. **Doradztwo**
   - Bezpłatna konsultacja i wycena na miejscu u klienta
   - Audyt pomieszczeń: pomiary, trasy instalacyjne, dobór mocy urządzenia
   - Bez zobowiązań, bez ukrytych kosztów
3. **Instalacje**
   - Montaż jednostek split i multi-split
   - Instalacje dla klientów indywidualnych i firm
   - Obsługa różnych układów: podłogowe, sufitowe, kasetonowe
4. **Montaż**
   - Praca ze sprzętem renomowanych marek: Hilti, DeWalt, Bosch
   - Wiercenie bezpyłowe (odkurzacze przemysłowe na każdym otworze)
   - Zabezpieczanie pomieszczeń folią; idealny porządek po zakończeniu
   - Czas montażu: standardowy split 4–6 godzin
5. **Serwis**
   - Przeglądy sezonowe (zalecane raz w roku, przedsezonowo marzec–maj)
   - Czyszczenie filtrów, sprawdzenie czynnika chłodniczego
   - Obsługa gwarancyjna i pogwarancyjna
   - Certyfikaty F-Gaz (firmowy i osobowy) + uprawnienia SEP
6. **CTA** — formularz kontaktowy / link do /kontakt

---

## `/o-nas` — O nas

### Sekcje:
1. **Intro / misja** (z briefu):
   > „W klimaTY wierzymy, że idealna temperatura to nie tylko liczby na termometrze, ale Twój komfort każdego dnia. Jesteśmy lokalną firmą, która stawia na relacje – dla nas nie jesteś kolejnym zleceniem, ale osobą, której pomagamy stworzyć wymarzone warunki. Łączymy pasję do technologii z najwyższym standardem wykonania."
2. **Liczby** — 15 lat doświadczenia / 1000+ instalacji / obszar: Kraków i Małopolska
3. **Dlaczego MY (4 karty)** — (rozbudowane wersje):
   - Profesjonalny sprzęt (Hilti/DeWalt/Bosch) — gwarancja precyzji i braku zapylenia
   - Bezpieczeństwo — certyfikaty F-Gaz (firmowy i osobowy), uprawnienia SEP, audyty BHP
   - Gwarancja czystości — wiercenie bezpyłowe, folia, idealny porządek
   - Doświadczenie — 15 lat + regularne szkolenia techniczne
4. **Marki, z którymi pracujemy** — logotypy: Gree, LG, Samsung, Mitsubishi Electric, Daikin, Bosch
5. **Certyfikaty** — skany lub logo certyfikatów F-Gaz i SEP
6. **Obszar działania** — mapa lub lista: Kraków, Wieliczka, Bochnia, Zielonki, Michałowice, Bibice i cała Małopolska
7. **CTA** — telefon / formularz

---

## `/proces` — Jak działamy

### Sekcje:
1. **Intro** — „Proces usystematyzowany do poziomu maszyny. Każdy etap wykonany z precyzją."
2. **5 kroków** (oś pozioma lub pionowa):
   1. **Bezpłatna konsultacja i wycena u klienta** — Przyjeżdżamy na miejscę, mierzymy pomieszczenia, oceniamy trasy instalacyjne, dobieramy moc. Rzetelna wycena i harmonogram.
   2. **Dobór idealnego urządzenia** — Dopasowujemy model do Twoich potrzeb i budżetu. Pracujemy z markami: Gree, LG, Samsung, Mitsubishi Electric, Daikin. *(Tu: logotypy marek)*
   3. **Szybki i czysty montaż** — Praca w standardzie przemysłowym. Odkurzacze bezpyłowe, folia ochronna na meble, porządek po każdym dniu pracy.
   4. **Uruchomienie systemu i szkolenie z obsługi** — Próżnia, próba ciśnieniowa azotem, kalibracja termostatów. Pokazujemy jak korzystać z pilota i ustawiać harmonogramy.
   5. **Pełna opieka serwisowa i gwarancyjna** — Jesteśmy do dyspozycji przez cały okres gwarancji i po jej zakończeniu. Regularne przeglądy i serwis.
3. **CTA** — telefon / formularz

---

## `/kontakt` — Kontakt

### Sekcje:
1. **Nagłówek** — „Porozmawiajmy o komforcie."
2. **Kolumna lewa** — Dane kontaktowe:
   - Telefon: 883 297 379 (klikalna)
   - Email: kontakt@klimaty.pl (klikalny)
   - Obszar działania: Kraków i Małopolska (Wieliczka, Bochnia, Zielonki, Michałowice, Bibice)
   - Czas odpowiedzi: do 24h
3. **Kolumna prawa** — Formularz wyceny (imię, telefon, email, opis potrzeby, termin)
4. **Mapa Google** — Google Maps iframe (embed) dla obszaru Kraków lub adres firmy
5. **Dodatkowe info** — Godziny pracy (np. pn–pt 8:00–18:00, sb 9:00–14:00) — do ustalenia z klientem

### Uwagi techniczne:
- Google Maps embed URL wymaga adresu/miejsca do osadzenia (do potwierdzenia z klientem: Daniel)
- Formularz docelowo podpięty pod backend (np. email API) — na razie symulowany jak w Contact.jsx na landing

---

## Uwagi ogólne

- Wszystkie podstrony powinny używać wspólnego layoutu (Navbar + Sidebar + Footer)
- Wymaga instalacji `react-router-dom` do routingu
- Opinie z Google (sekcja Opinie) wymagają Google Business Profile — widget lub API key od klienta
- Logotypy marek (Gree, LG, Samsung, Mitsubishi, Daikin) — pobrać pliki SVG/PNG i dodać do `/assets/loga/marki/`

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import UslugiPage from './pages/UslugiPage';
import MontazPage from './pages/MontazPage';
import SerwisPage from './pages/SerwisPage';
import SprzedazPage from './pages/SprzedazPage';
import ONasPage from './pages/ONasPage';
import RealizacjePage from './pages/RealizacjePage';
import KontaktPage from './pages/KontaktPage';
import FaqPage from './pages/FaqPage';
import OpiniePage from './pages/OpiniePage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import { cities } from './data/cities';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/uslugi" element={<UslugiPage />} />
        <Route path="/uslugi/" element={<UslugiPage />} />
        <Route path="/montaz-klimatyzacji" element={<MontazPage />} />
        <Route path="/montaz-klimatyzacji/" element={<MontazPage />} />
        <Route path="/serwis-klimatyzacji" element={<SerwisPage />} />
        <Route path="/serwis-klimatyzacji/" element={<SerwisPage />} />
        <Route path="/sprzedaz-klimatyzacji" element={<SprzedazPage />} />
        <Route path="/sprzedaz-klimatyzacji/" element={<SprzedazPage />} />
        <Route path="/o-nas" element={<ONasPage />} />
        <Route path="/o-nas/" element={<ONasPage />} />
        <Route path="/realizacje" element={<RealizacjePage />} />
        <Route path="/realizacje/" element={<RealizacjePage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/kontakt/" element={<KontaktPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faq/" element={<FaqPage />} />
        <Route path="/opinie" element={<OpiniePage />} />
        <Route path="/opinie/" element={<OpiniePage />} />
        {cities.map((city) => (
          <React.Fragment key={city.slug}>
            <Route path={`/${city.slug}`} element={<CityPage slug={city.slug} />} />
            <Route path={`/${city.slug}/`} element={<CityPage slug={city.slug} />} />
          </React.Fragment>
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  const cards = [
    {
      title: "15 Lat Doświadczenia",
      desc: "Wiedza budowana na układach montowanych latami. Ponad 1000 zrealizowanych instalacji na wymagającym krakowskim rynku.",
      img: "/assets/zdjecia/feature_exp.png",
      imgAlt: "15 Lat Doświadczenia",
    },
    {
      title: "Bezpieczeństwo",
      desc: "Pełne certyfikaty F-Gaz i SEP dla firmy i montażystów. Regularnie odbywamy audyty BHP, gwarantując najwyższe bezpieczeństwo instalacji.",
      img: "/assets/zdjecia/feature_safe.png",
      imgAlt: "Certyfikaty F-Gaz i SEP",
      badge: true,
    },
    {
      title: "Gwarancja Czystości",
      desc: "Wiercenie bezpyłowe. Zabezpieczamy meble folią przed pracą i używamy odkurzaczy przemysłowych do każdego otworowania. Pozostawiamy idealny porządek.",
      img: "/assets/zdjecia/feature_clean.png",
      imgAlt: "Gwarancja Czystości",
    },
    {
      title: "Profesjonalny Sprzęt",
      desc: "Pracujemy wyłącznie na sprzęcie renomowanych marek — Hilti, DeWalt, Bosch. Gwarancja precyzji, trwałości i braku zapylenia w pomieszczeniach.",
      brands: ['hilti', 'dewalt', 'bosch'],
    },
  ];

  return (
    <section id="onas" className="py-32 bg-[#09090b] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Dlaczego my?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
            Precyzja jako standard, <br />nie jako dodatek.
          </h3>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative">

        <div className="flex flex-col gap-10 md:gap-16 pb-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full"
            >
              <div className="bg-[#18181b] border border-white/10 rounded-none shadow-2xl p-0 flex flex-col md:flex-row md:min-h-[400px]">
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
                  {card.badge && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-400 opacity-75 will-change-transform"></span>
                        <span className="relative inline-flex rounded-none h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-600 font-bold">Ważne</span>
                    </div>
                  )}
                  <h4 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 uppercase">{card.title}</h4>
                  <p className="text-base md:text-lg text-zinc-400 font-sans leading-relaxed">
                    {card.title === "Profesjonalny Sprzęt"
                      ? <>Pracujemy wyłącznie na sprzęcie renomowanych marek — <span className="text-white font-semibold">Hilti, DeWalt, Bosch</span>. Gwarancja precyzji, trwałości i braku zapylenia w pomieszczeniach.</>
                      : card.desc}
                  </p>
                </div>
                <div className={`w-full md:w-1/2 bg-[#040405] relative overflow-hidden min-h-[200px] md:min-h-full ${card.brands ? 'flex items-center justify-center' : ''}`}>
                  {card.brands ? (
                    <div className="flex flex-col gap-4 items-center px-8">
                      {card.brands.map((brand) => (
                        <div key={brand} className="bg-white/8 px-5 py-3 flex items-center">
                          <img src={`/assets/loga_firm/${brand}.png`} alt={brand} className="h-8 w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img src={card.img} alt={card.imgAlt} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

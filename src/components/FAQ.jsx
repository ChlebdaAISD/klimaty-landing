import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "Ile potrwa montaż?",
      a: "Większość standardowych instalacji (jeden split) zamykamy w 4–6 godzin. Dla układów multi-split termin ustalamy na podstawie wizji lokalnej."
    },
    {
      q: "Czy wiercenie będzie brudne?",
      a: "Używamy sprzętu z wbudowanymi systemami odsysania pyłu. Zostawiamy po sobie absolutny porządek."
    },
    {
      q: "Kiedy powinienem serwisować urządzenie?",
      a: "Raz w roku dla instalacji domowych. Przedsezonowo (marzec-maj). Regularny serwis to warunek utrzymania 5-letniej gwarancji producenta."
    }
  ];

  return (
    <section className="py-32 bg-[#09090b] border-t border-white/5 relative z-10">
      <div className="max-w-3xl mx-auto px-8 relative z-10">
        <div className="mb-16 lg:text-center text-left">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
            Pytania i odpowiedzi
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-[#18181b] border border-white/10 rounded-none p-8"
            >
              <h4 className="text-xl font-bold font-sans text-white mb-4">{faq.q}</h4>
              <div className="w-8 border-t-2 border-accent mb-4"></div>
              <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

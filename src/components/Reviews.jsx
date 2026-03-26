import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const sectionRef = useRef(null);
  
  const reviews = [
    {
      name: "Tomasz G.",
      date: "miesiąc temu",
      text: "Pełen profesjonalizm. Panowie przyjechali punktualnie, zabezpieczyli całe mieszkanie przed pyłem. Montaż przebiegł sprawnie. Klima działa rewelacyjnie. Polecam!"
    },
    {
      name: "Anna W.",
      date: "2 miesiące temu",
      text: "Świetny kontakt od pierwszego telefonu. Doradzili odpowiedni sprzęt do mojego salonu z aneksem, nie naciągając na najdroższe opcje. Ekipa bardzo kulturalna."
    },
    {
      name: "Michał S.",
      date: "3 miesiące temu",
      text: "Robota wykonana na najwyższym poziomie. Przewiert przez żelbet zrobiony z odkurzaczem, na ścianie nie ma śladu. Wszystko objaśnione, uruchomione. Solidna firma."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="opinie" ref={sectionRef} className="py-32 bg-[#040405] relative overflow-hidden border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Głosy klientów</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
            Potwierdzona jakość.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="review-card bg-[#09090b] border border-white/5 p-8 rounded-none hover:border-accent/30 transition-colors duration-300 relative group">
              <div className="flex text-accent mb-6 gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} weight="fill" size={18} />)}
              </div>
              <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-none bg-zinc-900 flex items-center justify-center font-bold font-heading text-white border border-white/10 group-hover:border-accent/50 transition-colors">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white font-sans text-sm">{rev.name}</div>
                  <div className="text-xs text-zinc-500 font-mono">{rev.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

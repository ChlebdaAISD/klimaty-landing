import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-[#09090b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Kontakt</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none mb-6">
              Porozmawiajmy o komforcie.
            </h3>
            <p className="text-zinc-400 font-sans text-lg mb-12 max-w-md leading-relaxed">
              Darmowa wycena na terenie Krakowa i małopolski. Wypełnij formularz lub zadzwoń bezpośrednio do naszego instalatora.
            </p>

            <div className="flex flex-col gap-6">
              <a href="tel:883297379" className="group flex items-center gap-6 p-6 bg-[#18181b] border border-white/5 rounded-none hover:border-accent/30 transition-colors cursor-pointer w-max">
                <div className="w-12 h-12 rounded-none bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Zadzwoń do nas</div>
                  <div className="text-xl font-bold font-sans text-white tracking-tight group-hover:text-accent transition-colors">883 297 379</div>
                </div>
              </a>
              
              <a href="mailto:kontakt@klima-ty.pl" className="group flex items-center gap-6 p-6 bg-[#18181b] border border-white/5 rounded-none hover:border-accent/30 transition-all cursor-pointer w-max">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center text-zinc-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">Napisz e-mail</div>
                  <div className="text-lg font-bold font-sans text-white tracking-tight group-hover:text-accent transition-colors">kontakt@klima-ty.pl</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </section>
  );
}

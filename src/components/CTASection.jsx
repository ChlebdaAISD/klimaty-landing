import React from 'react';
import MotionButton from './ui/MotionButton';

/**
 * CTASection — reusable call-to-action block at the bottom of pages.
 * Dark background, big headline, phone + contact form CTA.
 */
export default function CTASection({
  headline = 'Zamów bezpłatną wycenę klimatyzacji',
  description = 'Skontaktuj się z nami — odpowiemy w ciągu 24h.',
}) {
  return (
    <section className="py-24 md:py-32 bg-[#040405] border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-6">
          Skontaktuj się z nami
        </h2>
        <h3 className="text-3xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-tight mb-6">
          {headline}
        </h3>
        <p className="text-zinc-400 font-sans text-lg mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MotionButton href="tel:883297379" label="Zadzwoń: 883 297 379" variant="primary" context="dark" />
          <MotionButton href="/kontakt/" label="Formularz wyceny" variant="secondary" context="dark" />
        </div>
      </div>
    </section>
  );
}

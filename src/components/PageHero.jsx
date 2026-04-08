import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MotionButton from './ui/MotionButton';

/**
 * PageHero — light themed hero section used on all subpages.
 * H1 + optional eyebrow + description + CTA. No graphics.
 */
export default function PageHero({ eyebrow, h1, description, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-hero-part', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-background border-b border-black/5">
      {/* Subtle accent glow */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-accent/15 rounded-none blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        {eyebrow && (
          <p className="page-hero-part font-mono text-xs tracking-[0.2em] uppercase text-accent font-bold mb-6">
            {eyebrow}
          </p>
        )}

        <h1 className="page-hero-part font-heading font-semibold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-text-dark mb-8 max-w-4xl">
          {h1}
        </h1>

        {description && (
          <p className="page-hero-part max-w-2xl text-lg md:text-xl text-text-light leading-relaxed mb-10 font-sans">
            {description}
          </p>
        )}

        {(ctaHref || secondaryCtaHref) && (
          <div className="page-hero-part flex flex-col sm:flex-row gap-4">
            {ctaHref && (
              <MotionButton href={ctaHref} label={ctaLabel || 'Bezpłatna wycena'} variant="primary" context="light" />
            )}
            {secondaryCtaHref && (
              <MotionButton href={secondaryCtaHref} label={secondaryCtaLabel || 'Zadzwoń'} variant="secondary" context="light" />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

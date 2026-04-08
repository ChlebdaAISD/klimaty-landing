import React from 'react';

/**
 * DarkSection — dark-themed section wrapper matching the home page style.
 * Used as a building block for all subpages.
 */
export default function DarkSection({ eyebrow, h2, children, variant = 'default', id }) {
  const bgClass = variant === 'alt' ? 'bg-[#040405]' : 'bg-[#09090b]';

  return (
    <section id={id} className={`py-24 md:py-32 ${bgClass} border-t border-white/5 relative z-10`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {(eyebrow || h2) && (
          <div className="mb-12 md:mb-16">
            {eyebrow && (
              <p className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">
                {eyebrow}
              </p>
            )}
            {h2 && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white tracking-tight leading-tight max-w-3xl">
                {h2}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

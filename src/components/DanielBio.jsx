import React from 'react';
import { UserCircle } from '@phosphor-icons/react';

export default function DanielBio({ heading, subtitle, bio, photo }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-2">
        <div className="aspect-[4/5] bg-[#0d0d10] border border-white/5 flex items-center justify-center overflow-hidden">
          {photo ? (
            <img src={photo} alt={heading} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-4 p-8 text-center">
              <UserCircle size={96} weight="duotone" className="text-accent/40" />
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                Zdjęcie wkrótce
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col gap-5">
        <div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{heading}</h3>
          <p className="text-sm font-mono uppercase tracking-widest text-accent">{subtitle}</p>
        </div>

        {bio.map((paragraph, i) => (
          <p key={i} className="text-zinc-300 font-sans text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

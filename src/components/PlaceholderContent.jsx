import React from 'react';
import { Clock } from '@phosphor-icons/react';

/**
 * PlaceholderContent — styled block shown in place of real content.
 * Used on subpages until copy is written.
 */
export default function PlaceholderContent({ label = 'Treść dostępna wkrótce', compact = false }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center border border-dashed border-white/10 bg-white/[0.02] ${compact ? 'py-10 px-6' : 'py-16 px-8'}`}>
      <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4">
        <Clock size={24} weight="duotone" className="text-accent" />
      </div>
      <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">{label}</p>
    </div>
  );
}

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const MotionButton = ({ label, variant = 'primary', context = 'light', className, href }) => {
  const isPrimary = variant === 'primary';
  const isLight = context === 'light';

  let buttonBase, blockBase, iconBase, textBase;

  // Primary: dark/light base with Accent sliding block.
  if (isPrimary) {
    if (isLight) {
      buttonBase = 'bg-[#09090b] border-2 border-[#09090b]';
      blockBase = 'bg-accent';
      iconBase = 'text-white';
      textBase = 'text-white';
    } else {
      buttonBase = 'bg-white border-2 border-white';
      blockBase = 'bg-accent';
      iconBase = 'text-white';
      textBase = 'text-[#09090b] group-hover:text-white';
    }
  } else {
    // Secondary: transparent base with NO border. Block slides to fill.
    if (isLight) {
      buttonBase = 'bg-transparent border-2 border-[#09090b] hover:border-accent';
      blockBase = 'bg-[#09090b]';
      iconBase = 'text-white';
      textBase = 'text-[#09090b] group-hover:text-white';
    } else {
      buttonBase = 'bg-transparent border-2 border-white hover:border-accent';
      blockBase = 'bg-white';
      iconBase = 'text-[#09090b]';
      textBase = 'text-white group-hover:text-[#09090b]';
    }
  }

  const content = (
    <>
      <span
        className={cn(
          'absolute left-0 top-0 bottom-0 w-14 overflow-hidden rounded-none duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full',
          blockBase
        )}
        aria-hidden="true"
      ></span>
      
      <div 
        className={cn(
          'absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-3 z-10',
          iconBase
        )}
      >
        <ArrowRight size={20} weight="bold" />
      </div>
      
      <span 
        className={cn(
          'relative z-10 pl-20 pr-8 font-sans text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap duration-500 transition-colors',
          textBase
        )}
      >
        {label}
      </span>
    </>
  );

  const wrapperClasses = cn(
    'group relative inline-flex items-center h-14 cursor-pointer rounded-none outline-none overflow-hidden duration-300',
    buttonBase,
    className
  );

  if (href) {
    return (
      <a href={href} className={wrapperClasses}>
        {content}
      </a>
    );
  }

  // To support forms, if it's a button, we can either pass type="submit" natively 
  // or default to button. We assume typical usage.
  return (
    <button type="submit" className={wrapperClasses}>
      {content}
    </button>
  );
};

export default MotionButton;

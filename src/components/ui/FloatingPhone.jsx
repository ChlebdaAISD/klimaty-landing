import React from 'react';
import { Phone } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

export default function FloatingPhone() {
  const phoneNumber = "883297379";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      className="fixed z-[90] flex items-center justify-center w-14 h-14 bg-accent text-white rounded-none shadow-lg lg:hover:scale-110 active:scale-95 transition-transform duration-300 left-6 lg:left-24 bottom-6 lg:bottom-10"
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      aria-label="Zadzwoń do nas"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-none bg-accent animate-ping opacity-20 pointer-events-none" />
      
      <Phone size={24} weight="fill" />
      
      {/* Tooltip for desktop */}
      <span className="absolute left-full ml-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs font-mono tracking-widest uppercase opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden lg:block">
        Zadzwoń teraz
      </span>
    </motion.a>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Sidebar({ isMenuOpen }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.005
  });

  return (
    <div className={`fixed top-0 h-full w-20 bg-[#040405] border-r border-white/10 z-[100] hidden lg:flex flex-col items-center justify-between py-12 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
      isMenuOpen ? 'left-[80vw] sm:left-[320px]' : 'left-0'
    }`}>      
      {/* Top Logo / Mark */}
      <div className="w-10 h-10 flex items-center justify-center">
        <img src="/assets/loga/Przezroczysty(2).png" alt="klimaTY Logo" className="w-8 object-contain" />
      </div>

      {/* Center - Scroll Indicator */}
      <div className="flex-1 flex flex-col items-center justify-center w-full py-8">
        <div className="h-full w-[1px] bg-white/10 relative">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-accent origin-top"
            style={{ scaleY, height: '100%' }}
          />
        </div>
      </div>

      {/* Bottom - Text / Rotation */}
      <div className="w-8 flex justify-center mt-auto">
        <span className="text-white/50 text-xs font-mono uppercase tracking-[0.3em] font-bold origin-center -rotate-90 whitespace-nowrap">
          KlimaTY
        </span>
      </div>

    </div>
  );
}

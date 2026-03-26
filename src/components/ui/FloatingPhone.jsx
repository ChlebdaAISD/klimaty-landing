import React, { useState, useEffect } from 'react';
import { Phone } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingPhone() {
  const phoneNumber = "883297379";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('#hero-section');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when hero is no longer intersecting (user scrolled past it)
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`tel:${phoneNumber}`}
          className="fixed z-[90] flex items-center justify-center w-14 h-14 bg-accent text-white rounded-none shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 left-6 lg:left-24 bottom-6 lg:bottom-10"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          aria-label="Zadzwoń do nas"
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-none bg-accent animate-ping opacity-20 pointer-events-none" />
          <Phone size={24} weight="fill" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, MagnifyingGlass, CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: "/assets/zdjecia/stock1.jpg", alt: "Montaż klimatyzacji" },
    { src: "/assets/zdjecia/stock2.jpg", alt: "Jednostka zewnętrzna" },
    { src: "/assets/zdjecia/stock3.jpg", alt: "Montaż w salonie" },
    { src: "/assets/zdjecia/stock4.jpg", alt: "Precyzyjne wykończenie" }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const element = scrollContainerRef.current;
      const card = element.children[index];
      if (card) {
        const isDesktop = windowWidth >= 768;
        if (isDesktop) {
          // Left-align: scroll so card at `index` sits where card 0 starts
          const firstCard = element.children[0];
          const offset = card.offsetLeft - (firstCard ? firstCard.offsetLeft : 0);
          element.scrollTo({ left: offset, behavior: 'smooth' });
        } else {
          // Mobile: center the single card
          const offset = card.offsetLeft - (element.offsetWidth - card.offsetWidth) / 2;
          element.scrollTo({ left: offset, behavior: 'smooth' });
        }
      }
    }
  };

  const isMobile = windowWidth < 768;
  const visibleCount = isMobile ? 1 : 3;
  const mobileMaxIndex = images.length - 1;
  const desktopTotalPositions = Math.max(1, images.length - visibleCount + 1);
  const maxIndex = Math.max(0, images.length - visibleCount);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (isMobile) {
      const prev = Math.max(0, currentIndex - 1);
      setCurrentIndex(prev);
      scrollToIndex(prev);
    } else {
      const prev = (currentIndex - 1 + desktopTotalPositions) % desktopTotalPositions;
      setCurrentIndex(prev);
      scrollToIndex(prev);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (isMobile) {
      const next = Math.min(mobileMaxIndex, currentIndex + 1);
      setCurrentIndex(next);
      scrollToIndex(next);
    } else {
      const next = (currentIndex + 1) % desktopTotalPositions;
      setCurrentIndex(next);
      scrollToIndex(next);
    }
  };

  return (
    <section id="realizacje" className="py-32 bg-[#040405] relative border-t border-white/5 overflow-hidden">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
              Realizacje klimaTY.
            </h3>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none px-[10vw] md:px-[calc(50vw-640px+32px)] pb-12"
          onScroll={(e) => {
            const container = e.target;
            const scrollPercent = container.scrollLeft / (container.scrollWidth - container.clientWidth || 1);
            const index = Math.round(scrollPercent * maxIndex);
            if (index !== currentIndex) setCurrentIndex(index);
          }}
        >
          {images.map((img, i) => (
            <div 
              key={i} 
              className="min-w-[85vw] md:min-w-[450px] snap-center cursor-pointer group/item rounded-none overflow-hidden relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/3] bg-[#09090b]"
              onClick={() => openLightbox(i)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 group-hover/item:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <MagnifyingGlass size={48} weight="duotone" className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-sm font-mono text-accent font-bold uppercase tracking-widest">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Controls: Arrows + Indicators */}
        <div className="flex items-center justify-center gap-8 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent"
            disabled={isMobile && currentIndex === 0}
          >
            <CaretLeft size={24} />
          </button>

          {/* Indicators — mobile only */}
          {isMobile && (
            <div className="flex gap-2 relative h-1 bg-white/10" style={{ width: images.length * 16 - 8 }}>
              {images.map((_, i) => (
                <div key={i} className="w-2 h-1 bg-white/20" />
              ))}
              <div
                className="absolute top-0 h-1 bg-accent transition-all duration-500 shadow-[0_0_15px_rgba(196,98,45,0.5)]"
                style={{
                  left: `${(currentIndex / (maxIndex || 1)) * (maxIndex * 16)}px`,
                  width: `${visibleCount * 16 - 8}px`
                }}
              />
            </div>
          )}

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent"
            disabled={isMobile && currentIndex >= mobileMaxIndex}
          >
            <CaretRight size={24} />
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/realizacje/"
            className="group inline-flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all underline underline-offset-4"
          >
            Zobacz pełne portfolio realizacji
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="absolute top-8 right-8 text-white hover:text-accent transition-colors z-[110]"
          >
            <X size={40} weight="bold" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(e); }}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[110] p-4"
          >
            <CaretLeft size={48} weight="bold" />
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt} 
              className="max-w-full max-h-[90vh] object-contain rounded-none shadow-2xl border border-white/10 select-none animate-in fade-in zoom-in duration-300"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white/60 font-mono text-sm tracking-widest uppercase">{images[currentIndex].alt}</p>
            </div>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(e); }}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[110] p-4"
          >
            <CaretRight size={48} weight="bold" />
          </button>
        </div>
      )}
    </section>
  );
}

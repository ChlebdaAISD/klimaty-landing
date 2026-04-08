import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';
import allReviews from '../data/reviews.json';

gsap.registerPlugin(ScrollTrigger);

const reviewsData = allReviews.filter((r) => r.id >= 1 && r.id <= 5);

// For infinite loop we clone: [last3] [all] [first3]
// Desktop shows 3 cards, mobile shows 1
const DESKTOP_VISIBLE = 3;
const MOBILE_VISIBLE = 1;
const GAP = 24; // gap-6 = 24px

function buildTrack(data, cloneCount) {
  const tail = data.slice(-cloneCount);
  const head = data.slice(0, cloneCount);
  return [...tail, ...data, ...head];
}

export default function Reviews() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const total = reviewsData.length;

  // current = index in the REAL data (0..total-1)
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const touchStart = useRef(null);

  // We need to know if we're on mobile for card width calc
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const visibleCount = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  const cloneCount = visibleCount;
  const track = buildTrack(reviewsData, cloneCount);

  // The track index that corresponds to current=0 in real data is cloneCount
  const trackIndex = current + cloneCount;

  const getOffset = useCallback((idx) => {
    return idx;
  }, [visibleCount]);

  const translateStyle = {
    transform: `translateX(calc(-${trackIndex * (100 / visibleCount)}% - ${trackIndex * (GAP / visibleCount)}px + ${0 * GAP}px))`,
    transition: noTransition ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
  };

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => prev + 1);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => prev - 1);
  }, [isAnimating]);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
  }, [isAnimating]);

  // After transition ends, snap to real position if we're in clone territory
  const onTransitionEnd = useCallback(() => {
    let snapped = false;
    if (current >= total) {
      setNoTransition(true);
      setCurrent(current - total);
      snapped = true;
    } else if (current < 0) {
      setNoTransition(true);
      setCurrent(current + total);
      snapped = true;
    }
    if (!snapped) {
      setIsAnimating(false);
    }
  }, [current, total]);

  // After a no-transition snap, re-enable transitions
  useEffect(() => {
    if (noTransition) {
      // Force a reflow then re-enable
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
          setIsAnimating(false);
        });
      });
    }
  }, [noTransition]);

  // Swipe handling
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  // GSAP scroll entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reviews-wrapper', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Normalize current for dots (always 0..total-1)
  const dotIndex = ((current % total) + total) % total;

  return (
    <section id="opinie" ref={sectionRef} className="py-32 bg-[#040405] relative overflow-hidden border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest font-bold mb-4">Głosy klientów</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight leading-none">
            Potwierdzona jakość.
          </h3>
        </div>

        {/* Carousel wrapper with fixed height for arrows */}
        <div className="reviews-wrapper relative">
          {/* Arrows — fixed vertical position */}
          <button
            onClick={prev}
            aria-label="Poprzednia opinia"
            className="hidden md:flex absolute -left-5 top-[140px] z-10 w-10 h-10 items-center justify-center bg-zinc-900 border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-colors"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          <button
            onClick={next}
            aria-label="Następna opinia"
            className="hidden md:flex absolute -right-5 top-[140px] z-10 w-10 h-10 items-center justify-center bg-zinc-900 border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-colors"
          >
            <CaretRight size={20} weight="bold" />
          </button>

          {/* Track */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: `${GAP}px`,
                ...translateStyle,
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {track.map((review, i) => (
                <div
                  key={`track-${i}`}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Opinia ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === dotIndex
                  ? 'bg-accent w-6'
                  : 'bg-zinc-700 hover:bg-zinc-500 w-2.5'
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/opinie/"
            className="group inline-flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all underline underline-offset-4"
          >
            Zobacz wszystkie opinie
            <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card bg-[#09090b] border border-white/5 p-8 rounded-none hover:border-accent/30 transition-colors duration-300 relative group h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-accent gap-1">
          {[...Array(review.rating)].map((_, j) => <Star key={j} weight="fill" size={18} />)}
        </div>
        <span className="text-xs text-zinc-500 font-mono ml-auto">Google</span>
      </div>
      <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-8 italic flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-none bg-zinc-900 flex items-center justify-center font-bold font-heading text-white border border-white/10 group-hover:border-accent/50 transition-colors">
          {review.author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-white font-sans text-sm">{review.author}</div>
          <div className="text-xs text-zinc-500 font-mono">Opinia z Google</div>
        </div>
      </div>
    </div>
  );
}

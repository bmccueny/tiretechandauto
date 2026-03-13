"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Tire Tech and Auto Repair Centers" },
  { src: "/images/hero-2.jpg", alt: "Tire Tech and Auto Repair Centers" },
  { src: "/images/hero-3.jpg", alt: "Tire Tech and Auto Repair Centers" },
];

const TRANSITION_DURATION = 1.5;
const IMAGE_HOLD_DURATION = 7000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const advanceSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advanceSlide, IMAGE_HOLD_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advanceSlide]);

  const handleLoad = useCallback(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Image layers */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: index === activeIndex ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
            onLoad={index === 0 ? handleLoad : undefined}
          />
        </motion.div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-navy/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[var(--font-oswald)] text-5xl md:text-7xl font-bold text-white tracking-tight max-w-4xl leading-tight"
        >
          Tire Tech and Auto
          <br />
          <span className="text-red-brand-light">Repair Centers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-gray-200 font-light max-w-2xl"
        >
          Serving Northern New Jersey Since 2003
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="bg-red-brand hover:bg-red-brand-light text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-red-brand/30"
          >
            Schedule Service
          </Link>
          <a
            href="tel:2013370016"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 border border-white/30"
          >
            Call (201) 337-0016
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (timerRef.current) clearInterval(timerRef.current);
                timerRef.current = setInterval(advanceSlide, IMAGE_HOLD_DURATION);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-red-brand-light"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
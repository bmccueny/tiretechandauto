"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroVideos = [
  { src: "/videos/hero-1.mp4", poster: "/images/hero-1.jpg" },
  { src: "/videos/hero-2.mp4", poster: "/images/hero-2.jpg" },
  { src: "/videos/hero-3.mp4", poster: "/images/hero-3.jpg" },
];

const TRANSITION_DURATION = 1.5;
const VIDEO_HOLD_DURATION = 7000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const advanceSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advanceSlide, VIDEO_HOLD_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advanceSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleCanPlay = useCallback(() => {
    if (!isLoaded) setIsLoaded(true);
  }, [isLoaded]);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Fallback poster */}
      <Image
        src="/images/hero-1.jpg"
        alt="Tire Tech and Auto Repair Centers"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Video layers */}
      {heroVideos.map((video, index) => (
        <AnimatePresence key={video.src}>
          {index === activeIndex && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: TRANSITION_DURATION, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video.src}
                poster={video.poster}
                muted
                playsInline
                loop
                preload={index === 0 ? "auto" : "metadata"}
                onCanPlay={index === 0 ? handleCanPlay : undefined}
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
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
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              if (timerRef.current) clearInterval(timerRef.current);
              timerRef.current = setInterval(advanceSlide, VIDEO_HOLD_DURATION);
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
    </section>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Use local video files
const heroVideos = [
  { src: "/videos/hero-1.mp4", poster: "/images/hero-1.jpg" },
  { src: "/videos/hero-2.mp4", poster: "/images/hero-2.jpg" },
  { src: "/videos/hero-3.mp4", poster: "/images/hero-3.jpg" },
];

const TRANSITION_DURATION = 1.5;
const VIDEO_HOLD_DURATION = 8000;

export default function HeroVideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-navy">
      {/* Background poster fallback */}
      <Image
        src="/images/hero-1.jpg"
        alt="Tire Tech and Auto Repair Centers"
        fill
        className="object-cover"
        priority
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
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-navy/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
            Tire Tech and Auto
            <br />
            <span className="text-red-brand-light">Repair Centers</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8">
            Serving Northern New Jersey Since 2003
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-brand hover:bg-red-brand-light text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-brand/30 inline-block text-center"
            >
              Schedule Service
            </Link>
            <a
              href="tel:2013370016"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 border border-white/30 inline-block text-center"
            >
              Call (201) 337-0016
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-red-brand-light scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

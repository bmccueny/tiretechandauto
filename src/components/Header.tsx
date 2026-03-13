"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tires", label: "Tires" },
  { href: "/about", label: "About" },
  { href: "/financing", label: "Financing" },
  { href: "/coupons", label: "Coupons" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
       {/* Top Bar */}
       <div className="bg-navy/90 text-white text-sm py-2 px-4 z-50 relative backdrop-blur-sm">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
           <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
             <a href="tel:2013370016" className="hover:text-red-brand-light transition-colors duration-200">
               <span className="hidden sm:inline">Retail: </span>(201) 337-0016
             </a>
             <a href="tel:2016440800" className="hover:text-red-brand-light transition-colors duration-200">
               <span className="hidden sm:inline">Commercial: </span>(201) 644-0800
             </a>
           </div>
           <p className="hidden md:block text-gray-300">
             Mon-Fri 8AM-6PM &bull; Sat 7AM-5PM &bull; Sun Closed
           </p>
         </div>
       </div>

       {/* Main Navigation */}
       <header
         className={`sticky top-0 z-50 transition-all duration-300 ${
           scrolled
             ? "bg-navy shadow-lg shadow-black/20"
             : "bg-navy/95 backdrop-blur-md"
         }`}
       >
         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo.png"
                  alt="Tire Tech and Auto Repair Centers Logo"
                  width={182}
                  height={75}
                  priority
                  className="opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </Link>

           {/* Desktop Nav */}
           <nav className="hidden lg:flex items-center gap-2">
             {navLinks.map((link) => (
               <Link
                 key={link.href}
                 href={link.href}
                 className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/5 hover:text-white"
               >
                 {link.label}
               </Link>
             ))}
             <Link
               href="/contact"
               className="ml-3 bg-red-brand hover:bg-red-brand-light text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-red-brand-light/90"
             >
               Schedule Service
             </Link>
           </nav>

           {/* Mobile Menu Button */}
           <button
             onClick={() => setMobileOpen(!mobileOpen)}
             className="lg:hidden text-white p-2 hover:text-red-brand-light transition-colors duration-200"
             aria-label="Toggle menu"
           >
             <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               {mobileOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               )}
             </svg>
           </button>
        </div>
      </header>

      {/* Mobile Slide-out Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 h-full w-80 bg-navy z-50 lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="font-[var(--font-oswald)] text-xl font-bold text-white">
                  Menu
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-white p-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
               <nav className="flex flex-col p-5 gap-1">
                 {navLinks.map((link) => (
                   <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setMobileOpen(false)}
                     className="text-gray-200 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200"
                   >
                     {link.label}
                   </Link>
                 ))}
                 <Link
                   href="/contact"
                   onClick={() => setMobileOpen(false)}
                   className="mt-4 bg-red-brand hover:bg-red-brand-light/90 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-200"
                 >
                   Schedule Service
                 </Link>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <a href="tel:2013370016" className="block text-gray-400 hover:text-white transition-colors">
                    Retail: (201) 337-0016
                  </a>
                  <a href="tel:2016440800" className="block text-gray-400 hover:text-white transition-colors">
                    Commercial: (201) 644-0800
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

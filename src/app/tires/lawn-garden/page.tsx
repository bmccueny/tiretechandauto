import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Lawn and Garden Tires",
  description: "Lawn mower tires, garden tractor tires, and utility vehicle tires at Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

export default function LawnGardenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/hero-2.jpg"
          alt="Lawn and Garden Tires"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Lawn and Garden Tires
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Keep your lawn equipment rolling with the right tires
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Quality Tires for Outdoor Equipment
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              From lawn mowers to garden tractors and utility vehicles, we have the tires you need to keep your equipment running smoothly. Whether you need turf tires, industrial tires, or something in between, we have you covered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1m8-1h4l3-4V8a1 1 0 00-1-1h-3" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Lawn Mowers
                </h3>
                <p className="mt-3 text-gray-600">
                  Push mower, riding mower, and zero turn tires available in various sizes.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Garden Tractors
                </h3>
                <p className="mt-3 text-gray-600">
                  Heavy duty tires for tractors used in landscaping and gardening.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Utility Vehicles
                </h3>
                <p className="mt-3 text-gray-600">
                  UTV and ATV tires suitable for property maintenance and light work.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Need Lawn and Garden Tires?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us to find the right tires for your outdoor equipment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2013370016"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Call (201) 337-0016
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServiceDueSection />
      <ShopForTires />
    </>
  );
}

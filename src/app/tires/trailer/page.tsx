import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Trailer Tires",
  description: "Boat trailer, utility trailer, and cargo trailer tires at Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

export default function TrailerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/commercial-truck.jpg"
          alt="Trailer Tires"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Trailer Tires
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Reliable tires for every trailer type
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Tires Built for the Haul
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Your trailer tires need to be durable and reliable, whether you are hauling a boat, equipment, or cargo. We carry a wide selection of trailer tires with the correct load ratings and sizes for your specific setup.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trailer Types */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Boat Trailers
                </h3>
                <p className="mt-3 text-gray-600">
                  Submersible trailer tires designed for wet conditions and heavy loads.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Utility Trailers
                </h3>
                <p className="mt-3 text-gray-600">
                  Versatile tires for landscaping, construction, and general hauling.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full text-center">
                <div className="w-16 h-16 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6M9 17a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                  Cargo Trailers
                </h3>
                <p className="mt-3 text-gray-600">
                  Heavy duty tires for enclosed trailers and equipment haulers.
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
              Need Trailer Tires?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us for the right size and load rating for your trailer.
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

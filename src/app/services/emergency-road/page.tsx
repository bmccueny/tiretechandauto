import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Emergency Road Service",
  description: "24/7 towing and roadside assistance in Oakland, NJ and surrounding areas. Tire Tech and Auto Repair Centers.",
};

export default function EmergencyRoadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/commercial-truck.jpg"
          alt="Emergency Road Service"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Emergency Road Service
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            24/7 towing and roadside assistance when you need it most
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              We Are Here to Help
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Stranded on the side of the road? Tire Tech and Auto Repair Centers provides emergency road service throughout Northern New Jersey. Our team is available 24 hours a day, 7 days a week to assist you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  24/7 Towing Service
                </h3>
                <p className="text-gray-600">
                  Our towing fleet is ready to transport your vehicle to our shop or a location of your choice, day or night.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  Roadside Tire Changes
                </h3>
                <p className="text-gray-600">
                  Flat tire? We can change it for you on the spot or tow your vehicle to our shop for repair.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  Jump Starts and Lockouts
                </h3>
                <p className="text-gray-600">
                  Dead battery or locked out? We can help you get back on the road quickly.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  Emergency Fuel Delivery
                </h3>
                <p className="text-gray-600">
                  Run out of gas? We can deliver fuel to your location to get you to the nearest station.
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
              Stranded? Call Us Now
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Our emergency road service is available 24 hours a day, 7 days a week.
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

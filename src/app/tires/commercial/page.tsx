import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Commercial Tires",
  description: "Heavy duty truck tires, bus tires, and fleet vehicle tires at Tire Tech Commercial Facility at 56 Spruce Street, Oakland, NJ.",
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/commercial-truck.jpg"
          alt="Commercial Truck Tires"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Commercial Tires
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Heavy duty tires for trucks, buses, and fleet vehicles
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Dedicated Commercial Facility
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our dedicated commercial facility at 56 Spruce Street in Oakland is equipped to handle heavy duty truck tires, fleet maintenance, and tractor trailer repairs. We understand that downtime costs money, so we work efficiently to get your vehicles back on the road.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-6">
              Commercial Tire Services
            </h3>
            <ul className="space-y-3">
              {[
                "Heavy duty truck tire sales and service",
                "Fleet maintenance programs",
                "Tractor trailer repair",
                "Commercial vehicle inspections",
                "DOT compliance services",
                "Tire mounting and balancing for large rigs",
                "Flat repair for commercial vehicles",
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-red-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Need Commercial Tire Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact our commercial facility directly for fleet service and heavy duty repairs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2016440800"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Call (201) 644-0800
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

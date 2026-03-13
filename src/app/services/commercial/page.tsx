import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Commercial Services",
  description: "Heavy duty truck services, fleet maintenance, and tractor trailer repairs at Tire Tech Commercial Facility in Oakland, NJ.",
};

const services = [
  {
    title: "Heavy Duty Truck Tire Sales and Service",
    description: "We stock a wide range of heavy duty tires and provide expert mounting, balancing, and repair services.",
  },
  {
    title: "Fleet Maintenance Programs",
    description: "Custom maintenance programs to keep your fleet on the road and reduce downtime.",
  },
  {
    title: "Tractor Trailer Repair",
    description: "Complete repair services for tractor trailers, including brake service, suspension work, and more.",
  },
  {
    title: "Commercial Vehicle Inspections",
    description: "Thorough inspections to ensure your vehicles meet safety standards and regulations.",
  },
  {
    title: "DOT Compliance Services",
    description: "We help you stay compliant with Department of Transportation regulations.",
  },
];

export default function CommercialServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/commercial-truck.jpg"
          alt="Commercial Truck Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Commercial Services
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Heavy duty truck services and fleet maintenance
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
              Our commercial facility at 56 Spruce Street is equipped to handle the unique needs of heavy duty trucks and fleet vehicles. We understand that downtime costs money, so we work efficiently to get your vehicles back on the road.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Need Commercial Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact our commercial facility for fleet service and heavy duty repairs.
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

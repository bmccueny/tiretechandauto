import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Auto Repair Services",
  description:
    "Complete auto repair services in Oakland, NJ. Tires, brakes, oil changes, A/C repair, engine diagnostics, wheel alignment, commercial truck service, and more. ASE certified technicians.",
};

const services = [
  {
    title: "Tire Service",
    image: "/images/tire-display.jpg",
    description:
      "Whether you need new tires or routine maintenance, our tire experts have you covered. We carry over 25,000 tires from top brands and handle every aspect of tire care.",
    features: [
      "New tire installation and mounting",
      "Tire balancing and rotation",
      "Flat tire repair",
      "TPMS sensor service and replacement",
      "Seasonal tire changeovers",
    ],
  },
  {
    title: "Oil Changes",
    image: "/images/oil-change.jpg",
    description:
      "Regular oil changes are the single most important thing you can do to protect your engine. We offer multiple options to fit your vehicle and budget.",
    features: [
      "Conventional oil change",
      "Synthetic blend oil change",
      "Full synthetic oil change",
      "Oil filter replacement",
      "Multi-point inspection included",
    ],
  },
  {
    title: "Brake Repair",
    image: "/images/brake-service.jpg",
    description:
      "Your brakes are your vehicle's most critical safety system. Our ASE certified technicians perform thorough brake inspections and quality repairs.",
    features: [
      "Brake pad replacement",
      "Rotor resurfacing and replacement",
      "Brake fluid flush and service",
      "ABS system diagnostics",
      "Brake line inspection and repair",
    ],
  },
  {
    title: "A/C Service",
    image: "/images/ac-service.jpg",
    description:
      "Stay comfortable in every season with our comprehensive air conditioning and heating services. We diagnose and repair all makes and models.",
    features: [
      "A/C performance diagnostics",
      "Refrigerant recharge",
      "Compressor repair and replacement",
      "Heater core service",
      "Climate control system repair",
    ],
  },
  {
    title: "Engine Diagnostics",
    image: "/images/diagnostics.jpg",
    description:
      "Modern vehicles rely on sophisticated computer systems. Our advanced diagnostic equipment can pinpoint issues quickly and accurately.",
    features: [
      "Check engine light diagnosis",
      "Computer diagnostics and scanning",
      "Electrical system troubleshooting",
      "Emissions testing and repair",
      "Sensor replacement",
    ],
  },
  {
    title: "Wheel Alignment",
    image: null,
    description:
      "Proper alignment extends tire life, improves fuel economy, and ensures safe handling. We use precision equipment for accurate adjustments.",
    features: [
      "2-wheel (front end) alignment",
      "4-wheel alignment",
      "Steering system inspection",
      "Suspension component check",
      "Alignment verification report",
    ],
  },
  {
    title: "Preventive Maintenance",
    image: null,
    description:
      "Stay ahead of costly repairs with regular maintenance. Our preventive care keeps your vehicle running reliably for years to come.",
    features: [
      "Engine tune-ups",
      "Transmission fluid flush",
      "Coolant system service",
      "Power steering fluid flush",
      "Belt and hose inspection and replacement",
    ],
  },
  {
    title: "Commercial Truck Services",
    image: "/images/commercial-truck.jpg",
    description:
      "Our dedicated commercial facility at 56 Spruce Street handles heavy-duty truck tires, fleet maintenance, and tractor trailer repairs.",
    features: [
      "Heavy-duty truck tire sales and service",
      "Fleet maintenance programs",
      "Tractor trailer repair",
      "Commercial vehicle inspections",
      "DOT compliance services",
    ],
  },
  {
    title: "Mobile Services",
    image: null,
    description:
      "Can't come to us? We'll come to you. Our mobile service team provides on-site tire and repair service throughout Oakland and the surrounding areas.",
    features: [
      "On-site tire installation",
      "Mobile tire repair",
      "Fleet on-location service",
      "Convenient scheduling",
      "Service area covers all of Northern NJ",
    ],
  },
  {
    title: "Emergency Road Service",
    image: null,
    description:
      "When you're stranded, we're here to help. Our emergency road service provides towing and roadside assistance when you need it most.",
    features: [
      "24/7 towing service",
      "Roadside tire changes",
      "Jump starts and lockouts",
      "Emergency fuel delivery",
      "Accident recovery",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/shop-interior.jpg"
          alt="Tire Tech auto repair shop interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Complete auto repair and tire services from ASE certified technicians
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                {service.image ? (
                  <div className="w-full lg:w-1/2 relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full lg:w-1/2 h-72 lg:h-96 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-20 h-20 text-red-brand mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-white font-[var(--font-oswald)] text-2xl font-bold">
                        {service.title}
                      </p>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-red-brand mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Ready to Schedule Your Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us today for a free estimate. Walk-ins welcome.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Schedule Service
              </Link>
              <a
                href="tel:2013370016"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-white/30"
              >
                Call (201) 337-0016
              </a>
            </div>
          </AnimatedSection>
        </div>
       </section>
       
        {/* Are You Due for Service? */}
        <ServiceDueSection />
        
        {/* Shop For Tires */}
        <ShopForTires />
      </>
    );
  }

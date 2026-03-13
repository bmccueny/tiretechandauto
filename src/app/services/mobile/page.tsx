import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Mobile Services",
  description: "On-site tire installation, mobile tire repair, and fleet service at Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

export default function MobileServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Mobile Services
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            We come to you with professional tire and repair services
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Convenient On Site Service
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Can not come to us? We will come to you. Our mobile service team provides on site tire and repair service throughout Oakland and the surrounding areas. Whether you are at home, work, or on the road, we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-6">
              Mobile Services We Offer
            </h3>
            <ul className="space-y-4">
              {[
                "On-site tire installation",
                "Mobile tire repair",
                "Fleet on-location service",
                "Convenient scheduling",
                "Service area covers all of Northern NJ",
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
              Need Mobile Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us to schedule mobile service or request a quote.
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

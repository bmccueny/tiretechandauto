import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Find Us",
  description: "Location map and directions to Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

export default function FindUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Find Us
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Visit our retail or commercial location in Oakland, NJ
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Retail Location */}
            <AnimatedSection>
              <div className="bg-gray-light rounded-xl p-6 h-full">
                <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  Retail Location
                </h2>
                <p className="text-gray-700 mb-2">357 Ramapo Valley Rd</p>
                <p className="text-gray-700 mb-4">Oakland, NJ 07436</p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5!2d-74.2636!3d41.0134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e1c6e7c9b0c1%3A0x1234567890abcdef!2s357+Ramapo+Valley+Rd%2C+Oakland%2C+NJ+07436!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Retail Location Map"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Commercial Location */}
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-light rounded-xl p-6 h-full">
                <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mb-4">
                  Commercial Location
                </h2>
                <p className="text-gray-700 mb-2">56 Spruce Street</p>
                <p className="text-gray-700 mb-4">Oakland, NJ 07436</p>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5!2d-74.2536!3d41.0034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e1c6e7c9b0c1%3A0xfedcba0987654321!2s56+Spruce+St%2C+Oakland%2C+NJ+07436!5e0!3m2!1sen!2sus!4v1234567891"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Commercial Location Map"
                  />
                </div>
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
              Need Directions?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Give us a call if you need help finding our locations.
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

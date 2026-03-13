import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Maintenance Adviser",
  description: "Find the right maintenance schedule for your vehicle using our vehicle selector at Tire Tech and Auto Repair Centers.",
};

export default function MaintenanceAdviserPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Maintenance Adviser
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Find your vehicle&apos;s recommended maintenance schedule
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-gray-600 text-lg">
              Enter your vehicle details below to see the manufacturer&apos;s recommended maintenance schedule.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vehicle Selector (Reusing ServiceDueSection) */}
      <ServiceDueSection />

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Ready to Schedule Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Once you know what your vehicle needs, contact us to schedule the service.
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

      <ShopForTires />
    </>
  );
}

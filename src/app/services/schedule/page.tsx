import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Schedule a Repair",
  description: "Schedule auto repair services at Tire Tech and Auto Repair Centers in Oakland, NJ. Contact us for appointments, estimates, and more.",
};

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Schedule a Repair
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Book your appointment online or call us directly
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Request an Appointment
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and we will get back to you as soon as possible to confirm your appointment.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-gray-light rounded-xl p-8 md:p-12">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Need Immediate Assistance?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              For urgent repairs or same-day service, please call us directly.
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

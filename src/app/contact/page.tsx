import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Tire Tech and Auto Repair Centers in Oakland, NJ. Schedule an appointment, get a free estimate, or find directions to our retail and commercial locations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Schedule a repair, get a free estimate, or just ask a question. We are here to help.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Retail Location */}
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
                <div className="bg-navy p-6">
                  <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-brand rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Retail Location
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Address</h3>
                    <p className="text-gray-700 mt-1">357 Ramapo Valley Rd, Oakland, NJ 07436</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Phone</h3>
                    <a href="tel:2013370016" className="text-steel hover:text-navy transition-colors font-semibold mt-1 inline-block">
                      (201) 337-0016
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Email</h3>
                    <a href="mailto:tiretechandauto@gmail.com" className="text-steel hover:text-navy transition-colors mt-1 inline-block">
                      tiretechandauto@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Hours</h3>
                    <div className="mt-1 text-gray-700 text-sm space-y-0.5">
                      <p>Monday to Friday: 8:00 AM to 6:00 PM</p>
                      <p>Saturday: 7:00 AM to 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5!2d-74.2636!3d41.0134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e1c6e7c9b0c1%3A0x1234567890abcdef!2s357+Ramapo+Valley+Rd%2C+Oakland%2C+NJ+07436!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Tire Tech Retail Location Map"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Commercial Location */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
                <div className="bg-navy-light p-6">
                  <h2 className="font-[var(--font-oswald)] text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-steel rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Commercial Truck Location
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Address</h3>
                    <p className="text-gray-700 mt-1">56 Spruce Street, Oakland, NJ 07436</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Phone</h3>
                    <a href="tel:2016440800" className="text-steel hover:text-navy transition-colors font-semibold mt-1 inline-block">
                      (201) 644-0800
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Email</h3>
                    <a href="mailto:tiretechandauto@gmail.com" className="text-steel hover:text-navy transition-colors mt-1 inline-block">
                      tiretechandauto@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm uppercase tracking-wider">Hours</h3>
                    <div className="mt-1 text-gray-700 text-sm space-y-0.5">
                      <p>Monday to Friday: 8:00 AM to 6:00 PM</p>
                      <p>Saturday: 7:00 AM to 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5!2d-74.2536!3d41.0034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e1c6e7c9b0c1%3A0xfedcba0987654321!2s56+Spruce+St%2C+Oakland%2C+NJ+07436!5e0!3m2!1sen!2sus!4v1234567891"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Tire Tech Commercial Location Map"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Schedule a Repair
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and we will get back to you as soon as possible. For urgent needs, please call us directly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="bg-gray-light rounded-xl p-8 md:p-12">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

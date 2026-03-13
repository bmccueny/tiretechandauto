import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Affordable financing options for tires and auto repairs at Tire Tech Oakland, NJ. Bridgestone/Firestone credit card, no interest options, and easy application.",
};

const benefits = [
  {
    title: "No Interest Financing",
    description:
      "Qualified applicants can take advantage of special no interest promotional periods on purchases. Pay over time without any added cost.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Easy Application",
    description:
      "Apply in store or online in just minutes. Quick approval process so you can get the service you need right away.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Accepted Nationwide",
    description:
      "The Firestone credit card is accepted at thousands of locations across the country, so you are covered wherever you go.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Payments",
    description:
      "Manage your auto expenses with monthly payments that fit your budget. Keep your vehicle safe and reliable without the stress.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Financing Options
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Affordable payment plans to keep your vehicle safe and reliable
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
                Drive Now, Pay Over Time
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We understand that auto repairs and new tires can be an unexpected expense. That is
                why Tire Tech and Auto Repair Centers offers convenient financing options to help you
                get the service you need without the financial strain. Do not put off essential
                repairs or drive on worn tires. With our financing, you can take care of your vehicle
                today and pay over time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bridgestone/Firestone Card */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
               <div className="w-full md:w-1/3 flex justify-center">
                 <div className="w-64 h-40 bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center shadow-lg">
                   <div className="text-center">
                     <p className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                       Firestone
                     </p>
                     <p className="text-gray-400 text-sm mt-1">Credit Card</p>
                     <div className="mt-4 flex gap-1 justify-center">
                       <Image
                         src="/images/financing/firestone-logo.png"
                         alt="Firestone Logo"
                         width={40}
                         height={20}
                         priority
                       />
                       <Image
                         src="/images/financing/firestone-credit-card.png"
                         alt="Firestone Credit Card"
                         width={80}
                         height={40}
                         priority
                       />
                     </div>
                   </div>
                 </div>
               </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-[var(--font-oswald)] text-3xl font-bold text-navy">
                  Bridgestone / Firestone Credit Card
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  The Firestone Complete Auto Care credit card makes it easy to pay for tires, auto
                  repairs, and maintenance. Enjoy special financing offers, exclusive promotions, and
                  the convenience of a dedicated automotive credit line. Use it at Tire Tech and at
                  thousands of Firestone Complete Auto Care locations nationwide.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Special financing on purchases of $199 or more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No annual fee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Accepted at thousands of locations nationwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-brand mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Easy online account management</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Why Finance With Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="bg-gray-light rounded-xl p-8 flex gap-6 h-full">
                  <div className="w-14 h-14 bg-red-brand/10 rounded-xl flex items-center justify-center shrink-0">
                    <div className="text-red-brand">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Ask about financing options during your next visit, or contact us to learn more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
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

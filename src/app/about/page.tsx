import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family owned auto repair shop in Oakland, NJ since 2003. Founded by brothers Sam and Qadeer. ASE certified, AAA accredited. Proudly supporting Grace's Gladiators and JDRF.",
};

const values = [
  {
    title: "Honesty",
    description:
      "We believe every customer deserves a fair and transparent estimate. No hidden fees, no upselling, no surprises. Just honest work at honest prices.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "Our ASE certified technicians use quality parts and the latest diagnostic equipment. We stand behind every repair with our workmanship guarantee.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We are proud to serve Oakland, Wyckoff, and all of Northern New Jersey. Giving back to our community through charity and volunteerism is part of who we are.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Family",
    description:
      "As a family-owned business, we treat every customer like part of the family. That personal touch is what sets us apart from chain shops and dealerships.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/shop-interior.jpg"
          alt="Tire Tech auto repair shop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Family owned and operated since 2003
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="w-full lg:w-1/2">
              <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/shop-interior.jpg"
                  alt="The Tire Tech team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="w-full lg:w-1/2" delay={0.2}>
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by two brothers, Sam and Qadeer, in 2003 based on the principle that
                  everyone deserved a fair and honest auto repair estimate. What started as a small
                  tire shop in Oakland, New Jersey has grown into a full-service auto repair center
                  with two locations serving thousands of customers across Northern New Jersey.
                </p>
                <p>
                  From day one, Sam and Qadeer built their business on trust. They believed that
                  treating customers with respect and providing quality work at fair prices would
                  speak for itself. More than 20 years later, that philosophy continues to drive
                  everything they do.
                </p>
                <p>
                  Today, Tire Tech and Auto Repair Centers is proud to be an ASE certified and AAA
                  accredited facility. The team of skilled technicians handles everything from basic
                  oil changes and tire rotations to complex engine diagnostics and commercial truck
                  service. With over 25,000 tires in stock from top brands, they have one of the
                  largest selections in the region.
                </p>
                <p>
                  Whether you are a first-time customer or have been coming to Tire Tech for years,
                  the goal is always the same: get you back on the road safely, quickly, and at a
                  price you feel good about.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide every interaction, every repair, and every decision we make.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex gap-6">
                  <div className="w-16 h-16 bg-red-brand/10 rounded-xl flex items-center justify-center shrink-0">
                    <div className="text-red-brand">{value.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Grace's Gladiators / JDRF */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-red-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white">
              Grace's Gladiators
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Tire Tech and Auto Repair Centers is a proud supporter of Grace's Gladiators, a team
              dedicated to raising funds and awareness for the Juvenile Diabetes Research Foundation
              (JDRF). This cause holds a special place in the hearts of our team, and we are
              committed to supporting the fight for a cure for Type 1 Diabetes. Community is more
              than where we work. It is the people we serve and the causes that bring us together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AAA Accredited */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-gray-light rounded-2xl p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-navy rounded-2xl flex items-center justify-center shrink-0">
                <span className="font-[var(--font-oswald)] text-3xl font-bold text-white">AAA</span>
              </div>
              <div>
                <h3 className="font-[var(--font-oswald)] text-3xl font-bold text-navy">
                  AAA Accredited Facility
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Tire Tech and Auto Repair Centers is a AAA Approved Auto Repair facility. This
                  means we meet the highest standards for quality, customer satisfaction, and
                  professional competency. AAA inspects our facility, reviews customer feedback, and
                  verifies our technicians' qualifications. When you see the AAA badge, you can be
                  confident you are in good hands.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-4xl font-bold text-white">
              Experience the Tire Tech Difference
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Visit us today and see why thousands of Northern NJ drivers trust us with their vehicles.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-white/30"
              >
                Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Tire Service",
    description: "Installation, balancing, rotation, flat repair, and TPMS service for all vehicles.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Oil Changes",
    description: "Conventional, synthetic blend, and full synthetic oil changes to keep your engine running smoothly.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-8-9h1m16 0h1M5.636 5.636l.707.707m11.314 11.314l.707.707M5.636 18.364l.707-.707m11.314-11.314l.707-.707" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: "Brake Service",
    description: "Complete brake repair including pads, rotors, fluid service, and ABS diagnostics.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.97l-7-12a2 2 0 00-3.5 0l-7 12A2 2 0 005.07 19z" />
      </svg>
    ),
  },
  {
    title: "A/C Repair",
    description: "Diagnostics, recharge, and compressor repair to keep you comfortable year round.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6l6 6 6-6M6 9l6-6 6 6" />
      </svg>
    ),
  },
  {
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics for check engine lights, electrical systems, and more.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
  },
  {
    title: "Wheel Alignment",
    description: "Precision 2-wheel and 4-wheel alignment to extend tire life and improve handling.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
      </svg>
    ),
  },
];

const brands = [
  "Michelin",
  "BFGoodrich",
  "Uniroyal",
  "Firestone",
  "Goodyear",
  "Pirelli",
  "Continental",
  "General",
];

const whyChooseUs = [
  { title: "Family Owned Since 2003", description: "Built on trust and honest service by brothers Sam and Qadeer." },
  { title: "ASE Certified Technicians", description: "Our team holds the industry's most respected certification." },
  { title: "AAA Accredited Facility", description: "Meeting the highest standards of quality and customer care." },
  { title: "25,000+ Tires In Stock", description: "One of the largest tire selections in Northern New Jersey." },
  { title: "Emergency Road Service", description: "Available when you need us most with towing and roadside help." },
  { title: "Free Estimates", description: "Honest, transparent pricing with no hidden fees or surprises." },
];

const testimonials = [
  {
    name: "Garret",
    text: "I have been going to Tire Tech for years. Great guys. I am always confident that my car has been well taken care of and at a fair price. They are always friendly and make sure to explain what was done. I would recommend Tire Tech to anyone looking for a quality shop.",
  },
  {
    name: "Shoukat",
    text: "Tire Tech is an excellent auto repair shop. I have been going there for many years now. They do quality work at very reasonable prices. They are very honest and will not try to sell you stuff you don't need. I would highly recommend this place to everyone.",
  },
  {
    name: "Kevin",
    text: "I have been a customer for over 10 years. The team at Tire Tech has always provided excellent service and honest assessments. My entire family takes their cars here. Sam and his crew treat you like family. Best auto shop in the area.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                From tire installation to complete engine diagnostics, we keep your vehicle running safely and reliably.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href="/services"
                  className="group block bg-gray-light rounded-xl p-8 hover:bg-navy transition-all duration-300 hover:shadow-xl hover:shadow-navy/10 h-full"
                >
                  <div className="text-red-brand group-hover:text-red-brand-light transition-colors mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-navy hover:bg-navy-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tire Brands */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white">
                Top Tire Brands
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                We carry over 25,000 tires from the world's most trusted manufacturers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                  <p className="font-[var(--font-oswald)] text-xl font-bold text-white">
                    {brand}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/tires"
                className="inline-block bg-red-brand hover:bg-red-brand-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Our Tire Selection
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Why Choose Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                For over 20 years, drivers across Northern New Jersey have trusted Tire Tech for quality service and honest pricing.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                What Our Customers Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.15}>
                <div className="bg-gray-light rounded-xl p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-4 font-bold text-navy">
                    {review.name}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white">
                Our Locations
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-brand rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                    Retail Location
                  </h3>
                </div>
                <p className="text-gray-300">357 Ramapo Valley Rd</p>
                <p className="text-gray-300">Oakland, NJ 07436</p>
                <a href="tel:2013370016" className="text-steel hover:text-white transition-colors font-semibold mt-2 inline-block">
                  (201) 337-0016
                </a>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm">Mon-Fri: 8:00 AM to 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Sat: 7:00 AM to 5:00 PM</p>
                  <p className="text-gray-400 text-sm">Sun: Closed</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-red-brand hover:bg-red-brand-light text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm"
                >
                  Get Directions
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-steel rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                    Commercial Truck Location
                  </h3>
                </div>
                <p className="text-gray-300">56 Spruce Street</p>
                <p className="text-gray-300">Oakland, NJ 07436</p>
                <a href="tel:2016440800" className="text-steel hover:text-white transition-colors font-semibold mt-2 inline-block">
                  (201) 644-0800
                </a>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm">Mon-Fri: 8:00 AM to 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Sat: 7:00 AM to 5:00 PM</p>
                  <p className="text-gray-400 text-sm">Sun: Closed</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-steel hover:bg-blue-400 text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm"
                >
                  Get Directions
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

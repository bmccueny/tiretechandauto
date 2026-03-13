import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "ATV Tires",
  description: "Find the perfect ATV and UTV tires for mud, sand, hard pack, and all terrain riding at Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

const atvTires = [
  {
    title: "Mud Tires",
    description: "Deep lugs and aggressive tread patterns designed to bite through thick mud and propel you forward.",
  },
  {
    title: "Sand Tires",
    description: "Paddle tires and ribbed fronts engineered for maximum flotation and traction in sandy conditions.",
  },
  {
    title: "All Terrain Tires",
    description: "Versatile tires that perform well on dirt, gravel, and light trails, perfect for mixed riding.",
  },
  {
    title: "Hard Pack Tires",
    description: "Smooth tread patterns that provide superior grip on hard packed dirt and rocky trails.",
  },
];

export default function AtvPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/hero-1.jpg"
          alt="ATV Tires"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            ATV Tires
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Hit the trails with confidence on the right tires
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Tires for Every Terrain
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Whether you are riding through mud, sand, or hard packed trails, we have the ATV and UTV tires you need. Our selection includes top brands known for durability and performance in off road conditions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tire Types */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {atvTires.map((tire, i) => (
              <AnimatedSection key={tire.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy">
                    {tire.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {tire.description}
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
              Need ATV Tires?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us for a quote on the perfect tires for your ATV or UTV.
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

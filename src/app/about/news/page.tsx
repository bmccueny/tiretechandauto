import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "News",
  description: "Company news and updates from Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

const newsItems = [
  {
    date: "March 2026",
    title: "Spring Tire Sale",
    description: "Get ready for spring with our special tire sale. Save on all major brands including Michelin, Goodyear, and more.",
  },
  {
    date: "February 2026",
    title: "New Commercial Facility Update",
    description: "Our commercial facility at 56 Spruce Street has expanded its services to include additional heavy duty truck bays.",
  },
  {
    date: "January 2026",
    title: "Winter Driving Tips",
    description: "Check out our latest blog post on how to prepare your vehicle for winter driving conditions.",
  },
  {
    date: "December 2025",
    title: "Holiday Hours",
    description: "We will be closed on Christmas Day and New Year's Day. Regular hours resume the following day.",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            News
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Company news and updates from Tire Tech
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {newsItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <article className="bg-gray-light rounded-xl p-8">
                  <p className="text-red-brand font-semibold text-sm uppercase tracking-wider">
                    {item.date}
                  </p>
                  <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-navy mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </article>
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
              Stay Connected
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Follow us on social media for the latest updates and promotions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceDueSection />
      <ShopForTires />
    </>
  );
}

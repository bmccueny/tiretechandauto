import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Tire Care Tips",
  description: "Extend the life of your tires and stay safe on the road with these maintenance tips from our experts at Tire Tech and Auto Repair Centers.",
};

const tireTips = [
  {
    title: "Check Tire Pressure Monthly",
    description: "Under-inflated tires wear faster, reduce fuel economy, and can be dangerous. Check your pressure at least once a month and before long trips.",
  },
  {
    title: "Rotate Tires Every 5,000 to 7,500 Miles",
    description: "Regular rotation ensures even tread wear across all four tires, extending their lifespan and maintaining consistent handling.",
  },
  {
    title: "Inspect Tread Depth Regularly",
    description: "Use the penny test. Insert a penny into the tread with Lincoln's head facing down. If you can see the top of his head, it is time for new tires.",
  },
  {
    title: "Keep Your Wheels Aligned",
    description: "Misaligned wheels cause uneven tire wear and can affect steering. Have your alignment checked if your vehicle pulls to one side.",
  },
  {
    title: "Watch for Warning Signs",
    description: "Vibration, pulling, unusual noise, or visible damage like bulges and cracks mean it is time to have your tires inspected by a professional.",
  },
  {
    title: "Avoid Overloading Your Vehicle",
    description: "Exceeding your vehicle's load rating puts excessive stress on tires and can lead to overheating and failure. Check your door jamb sticker for limits.",
  },
];

export default function CareTipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Tire Care Tips
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Expert advice to keep your tires performing their best
          </p>
        </div>
      </section>

      {/* Tips Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Maintain Your Tires for Safety and Longevity
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Proper tire maintenance is essential for your safety on the road. Following these simple tips from our tire experts can extend the life of your tires and improve your vehicle&apos;s performance.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {tireTips.map((tip, i) => (
              <AnimatedSection key={tip.title} delay={i * 0.1}>
                <div className="bg-gray-light rounded-xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-red-brand/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-red-brand font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                        {tip.title}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
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
              Need New Tires or Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us for a free inspection. We will check your tires and let you know if they need attention.
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

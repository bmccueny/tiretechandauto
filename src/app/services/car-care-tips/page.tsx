import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Car Care Tips",
  description: "Tips for vehicle maintenance from the experts at Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

const carTips = [
  {
    title: "Check Your Fluids Regularly",
    description: "Oil, coolant, brake fluid, and transmission fluid levels should be checked monthly to ensure your vehicle runs smoothly.",
  },
  {
    title: "Replace Wipers Seasonally",
    description: "Worn wiper blades can reduce visibility in rain and snow. Replace them every six months or when they streak.",
  },
  {
    title: "Test Your Battery",
    description: "Extreme temperatures can affect battery life. Have your battery tested twice a year, especially before winter.",
  },
  {
    title: "Inspect Your Lights",
    description: "Check all exterior lights regularly, including headlights, brake lights, and turn signals, to ensure visibility and safety.",
  },
  {
    title: "Keep It Clean",
    description: "Washing your vehicle regularly protects the paint from dirt and debris. Don't forget to clean the undercarriage in winter to prevent rust.",
  },
  {
    title: "Follow the Maintenance Schedule",
    description: "Refer to your owner's manual for the manufacturer's recommended maintenance schedule and stick to it.",
  },
];

export default function CarCareTipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Car Care Tips
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Keep your vehicle running reliably for years
          </p>
        </div>
      </section>

      {/* Tips Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Simple Maintenance for Long Lasting Performance
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Regular maintenance is the key to keeping your vehicle safe, reliable, and efficient. These tips from our ASE certified technicians will help you stay ahead of potential problems.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carTips.map((tip, i) => (
              <AnimatedSection key={tip.title} delay={i * 0.1}>
                <div className="bg-gray-light rounded-xl p-8 h-full">
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                    {tip.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {tip.description}
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
              Need Professional Service?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Let our ASE certified technicians handle your vehicle maintenance.
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

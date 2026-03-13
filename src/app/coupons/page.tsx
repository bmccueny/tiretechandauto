import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Coupons & Specials",
  description:
    "Save on auto repairs and tires at Tire Tech Oakland, NJ. Current coupons, discounts, and special offers on brakes, oil changes, A/C service, and more.",
};

const coupons = [
  {
    amount: "$50 OFF",
    title: "Complete Brake Job",
    description: "Save $50 on a complete brake job including pads and rotors. Includes free brake inspection.",
    terms: "Must present coupon at time of service. Cannot be combined with other offers. One per customer.",
    color: "bg-red-brand",
  },
  {
    amount: "$39.99",
    title: "A/C Performance Check",
    description: "Full A/C system performance check and diagnostic. Includes pressure test and leak inspection.",
    terms: "Refrigerant and parts extra if needed. Must present coupon at time of service.",
    color: "bg-steel",
  },
  {
    amount: "FREE",
    title: "Tire Rotation with Oil Change",
    description: "Get a free tire rotation when you purchase any oil change service. Keeps your tires wearing evenly.",
    terms: "Valid for standard tire rotation. Must present coupon. Cannot be combined with other offers.",
    color: "bg-green-600",
  },
  {
    amount: "10% OFF",
    title: "First-Time Customer Discount",
    description: "Welcome to Tire Tech! New customers save 10% on any service. We look forward to earning your trust.",
    terms: "Valid for first-time customers only. Maximum discount $100. Must present coupon at time of service.",
    color: "bg-navy",
  },
  {
    amount: "10% OFF",
    title: "Senior Discount",
    description: "We appreciate our senior customers. Enjoy 10% off any service for customers 65 and older.",
    terms: "Valid with ID showing age 65 or older. Maximum discount $75. Cannot be combined with other offers.",
    color: "bg-navy-light",
  },
];

export default function CouponsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Coupons & Specials
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Great deals on tires and auto repair services
          </p>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
                Current Offers
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Print or show these coupons on your phone when you visit.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coupons.map((coupon, i) => (
              <AnimatedSection key={coupon.title} delay={i * 0.1}>
                <div className="coupon-card bg-white p-8 flex flex-col h-full">
                  {/* Amount Badge */}
                  <div className={`${coupon.color} text-white rounded-lg py-3 px-6 text-center mb-6`}>
                    <p className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold">
                      {coupon.amount}
                    </p>
                  </div>

                  {/* Content */}
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                    {coupon.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-1">
                    {coupon.description}
                  </p>

                  {/* Terms */}
                  <div className="mt-6 pt-4 border-t border-dashed border-gray-300">
                    <p className="text-xs text-gray-400">
                      {coupon.terms}
                    </p>
                  </div>

                  {/* Tire Tech Branding */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Tire Tech and Auto Repair Centers
                    </p>
                    <p className="text-xs text-gray-400">Oakland, NJ</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold text-navy">
              How to Use Our Coupons
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-brand font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-navy">Choose Your Coupon</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Browse our current offers and find the deal that fits your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-brand font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-navy">Show at Checkout</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Present the coupon on your phone or printed when you drop off your vehicle.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-brand font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-navy">Save Money</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Enjoy quality service at a great price. It is that simple.
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
              Ready to Save?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Schedule your service today and bring your coupon for instant savings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Schedule Service
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

import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Read Our Reviews",
  description: "Customer testimonials and reviews for Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

const reviews = [
  {
    name: "John D.",
    location: "Oakland, NJ",
    rating: 5,
    text: "Great service and fair prices. The team replaced my tires quickly and explained everything clearly. Highly recommend.",
  },
  {
    name: "Sarah M.",
    location: "Wyckoff, NJ",
    rating: 5,
    text: "I have been coming here for years. Honest advice and quality work. They never try to upsell you on things you do not need.",
  },
  {
    name: "Mike R.",
    location: "Franklin Lakes, NJ",
    rating: 5,
    text: "Needed an oil change and brake inspection. Got me in same day and finished on time. Professional and friendly staff.",
  },
  {
    name: "Lisa K.",
    location: "Mahwah, NJ",
    rating: 5,
    text: "The mobile service saved me when I had a flat tire. They came to my house and had me back on the road in no time.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Read Our Reviews
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            What our customers are saying
          </p>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.1}>
                <div className="bg-gray-light rounded-xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-red-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{review.text}</p>
                  <p className="font-semibold text-navy">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.location}</p>
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
              Leave a Review
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Let us know about your experience with Tire Tech and Auto Repair Centers.
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

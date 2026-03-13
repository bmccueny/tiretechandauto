import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos of Tire Tech and Auto Repair Centers in Oakland, NJ.",
};

const galleryImages = [
  {
    src: "/images/shop-interior.jpg",
    alt: "Shop Interior",
    caption: "Our main retail facility",
  },
  {
    src: "/images/tire-display.jpg",
    alt: "Tire Display",
    caption: "Over 25,000 tires in stock",
  },
  {
    src: "/images/commercial-truck.jpg",
    alt: "Commercial Truck",
    caption: "Commercial truck services",
  },
  {
    src: "/images/oil-change.jpg",
    alt: "Oil Change",
    caption: "Professional oil change service",
  },
  {
    src: "/images/brake-service.jpg",
    alt: "Brake Service",
    caption: "Brake repair and inspection",
  },
  {
    src: "/images/ac-service.jpg",
    alt: "AC Service",
    caption: "Air conditioning repair",
  },
];

export default function PhotoGalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Photo Gallery
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Take a look inside Tire Tech and Auto Repair Centers
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <AnimatedSection key={image.alt} delay={i * 0.1}>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.caption}</p>
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
              Visit Our Shop
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Come see our facility and meet our team. We are located at 357 Ramapo Valley Rd, Oakland, NJ.
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

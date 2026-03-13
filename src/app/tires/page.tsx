import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceDueSection from "@/components/ServiceDueSection";
import ShopForTires from "@/components/ShopForTires";

export const metadata: Metadata = {
  title: "Tires",
  description:
    "Over 25,000 tires in stock from Michelin, Goodyear, BFGoodrich, Firestone, Pirelli, Continental, and more. Car, truck, SUV, ATV, commercial, and trailer tires in Oakland, NJ.",
};

const categories = [
  {
    title: "Car, Truck, and SUV Tires",
    description:
      "From daily commuters to full-size trucks and SUVs, we carry the right tires for every passenger vehicle on the road. All-season, performance, winter, and all-terrain options available.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M8 17a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4M8 17v2a1 1 0 001 1h1a1 1 0 001-1v-2m4 0v2a1 1 0 001 1h1a1 1 0 001-1v-2" />
      </svg>
    ),
  },
  {
    title: "ATV Tires",
    description:
      "Hit the trails with confidence. We stock a wide range of ATV and UTV tires for mud, sand, hard pack, and all-terrain riding.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Commercial Tires",
    description:
      "Heavy-duty tires for commercial trucks, buses, and fleet vehicles. Visit our dedicated commercial facility at 56 Spruce Street for expert service.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1m8-1h4l3-4V8a1 1 0 00-1-1h-3" />
      </svg>
    ),
  },
  {
    title: "Lawn and Garden Tires",
    description:
      "Keep your lawn equipment rolling with our selection of lawn mower, garden tractor, and utility vehicle tires.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Trailer Tires",
    description:
      "Boat trailers, utility trailers, and cargo trailers all need reliable tires. We carry the right sizes and load ratings for your setup.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="8" width="16" height="8" rx="1" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="14" cy="18" r="2" />
        <path d="M18 12h4" />
      </svg>
    ),
  },
];

const brands = [
  { name: "Michelin", tagline: "A better way forward" },
  { name: "BFGoodrich", tagline: "Tires for the journey" },
  { name: "Uniroyal", tagline: "Built for rain and shine" },
  { name: "Firestone", tagline: "A tradition of quality" },
  { name: "Goodyear", tagline: "More driven" },
  { name: "Pirelli", tagline: "Power is nothing without control" },
  { name: "Continental", tagline: "The future in motion" },
  { name: "General", tagline: "Anywhere is possible" },
];

const tireTips = [
  {
    title: "Check Tire Pressure Monthly",
    description:
      "Under-inflated tires wear faster, reduce fuel economy, and can be dangerous. Check your pressure at least once a month and before long trips.",
  },
  {
    title: "Rotate Tires Every 5,000 to 7,500 Miles",
    description:
      "Regular rotation ensures even tread wear across all four tires, extending their lifespan and maintaining consistent handling.",
  },
  {
    title: "Inspect Tread Depth Regularly",
    description:
      "Use the penny test. Insert a penny into the tread with Lincoln's head facing down. If you can see the top of his head, it's time for new tires.",
  },
  {
    title: "Keep Your Wheels Aligned",
    description:
      "Misaligned wheels cause uneven tire wear and can affect steering. Have your alignment checked if your vehicle pulls to one side.",
  },
  {
    title: "Watch for Warning Signs",
    description:
      "Vibration, pulling, unusual noise, or visible damage like bulges and cracks mean it's time to have your tires inspected by a professional.",
  },
];

export default function TiresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image
          src="/images/tire-display.jpg"
          alt="Tire Tech tire display"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-white">
            Tires
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            Over 25,000 tires in stock from the brands you trust
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              The Right Tire for Every Vehicle
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              At Tire Tech, we maintain one of the largest tire inventories in Northern New Jersey
              with over 25,000 tires ready for installation. Whether you drive a compact car, a
              full-size truck, or a commercial vehicle, our tire experts will help you find the
              perfect match for your driving needs and budget. Every tire purchase includes
              professional mounting, balancing, and a courtesy vehicle inspection.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                Tire Categories
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="text-red-brand mb-4">{cat.icon}</div>
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold text-navy">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-white">
                Brands We Carry
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Premium tires from the world&apos;s leading manufacturers
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand.name} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:border-red-brand/50">
                  <p className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                    {brand.name}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{brand.tagline}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

       {/* Shop for Tires */}
       <section className="py-20 bg-gray-light">
         <div className="max-w-7xl mx-auto px-4">
           <AnimatedSection>
             <div className="text-center mb-16">
               <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                 Find Your Perfect Tires
               </h2>
               <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                 Select your vehicle details to find the perfect tires for your car, truck, or SUV.
               </p>
             </div>
           </AnimatedSection>
           
           <div className="bg-white rounded-xl p-8 shadow-sm">
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Vehicle Make</label>
                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-brand">
                     <option value="">Select Make</option>
                     <option value="toyota">Toyota</option>
                     <option value="honda">Honda</option>
                     <option value="ford">Ford</option>
                     <option value="chevrolet">Chevrolet</option>
                     <option value="nissan">Nissan</option>
                     <option value="bmw">BMW</option>
                     <option value="mercedes">Mercedes-Benz</option>
                     <option value="audi">Audi</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Vehicle Model</label>
                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-brand">
                     <option value="">Select Model</option>
                     <option value="camry">Camry</option>
                     <option value="civic">Civic</option>
                     <option value="f-150">F-150</option>
                     <option value="silverado">Silverado</option>
                     <option value="altima">Altima</option>
                     <option value="3-series">3 Series</option>
                     <option value="c-class">C-Class</option>
                     <option value="a4">A4</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-gray-700 font-medium mb-2">Year</label>
                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-brand">
                     <option value="">Select Year</option>
                     <option value="2024">2024</option>
                     <option value="2023">2023</option>
                     <option value="2022">2022</option>
                     <option value="2021">2021</option>
                     <option value="2020">2020</option>
                     <option value="2019">2019</option>
                     <option value="2018">2018</option>
                     <option value="2017">2017</option>
                   </select>
                 </div>
               </div>
               <div className="flex justify-center">
                 <button type="submit" className="bg-red-brand hover:bg-red-brand-light text-white font-bold py-3 px-8 rounded-lg transition-colors hover:scale-105">
                   Find My Tires
                 </button>
               </div>
             </form>
           </div>
         </div>
       </section>
       
       {/* Tire Care Tips */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4">
           <AnimatedSection>
             <div className="text-center mb-16">
               <h2 className="font-[var(--font-oswald)] text-4xl md:text-5xl font-bold text-navy">
                 Tire Care Tips
               </h2>
               <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                 Extend the life of your tires and stay safe on the road with these maintenance tips from our experts.
               </p>
             </div>
           </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tireTips.map((tip, i) => (
              <AnimatedSection key={tip.title} delay={i * 0.1}>
                <div className="bg-gray-light rounded-xl p-8 h-full">
                  <div className="w-10 h-10 bg-red-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-red-brand font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-navy text-lg">{tip.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
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
              Need New Tires?
            </h2>
            <p className="mt-4 text-red-100 text-lg">
              Contact us for a free quote. We will find the right tires for your vehicle at a price that fits your budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-brand hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get a Quote
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

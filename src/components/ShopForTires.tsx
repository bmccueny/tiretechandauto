"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ShopForTires() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [option, setOption] = useState("");
  const [size, setSize] = useState("");

  const years = Array.from({ length: 47 }, (_, i) => (2026 - i).toString());
  const makes = ["Select Make", "Ford", "Chevrolet", "Toyota", "Honda", "Nissan", "BMW", "Mercedes", "Volkswagen", "Hyundai", "Kia", "Subaru", "Mazda", "Jeep", "Dodge", "Chrysler", "GMC", "Cadillac", "Lexus", "Audi"];
  
  const handleFindTires = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would redirect to tire search
    alert(`Searching for tires: ${year} ${make} ${model}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-navy">
              Shop For Tires
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Select your vehicle information below to find the perfect tires for your car, truck, or SUV.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleFindTires} className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              {/* Year */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand focus:border-red-brand"
                >
                  <option value="">Select Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Make</label>
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand focus:border-red-brand"
                >
                  {makes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand focus:border-red-brand"
                >
                  <option value="">Select Model</option>
                </select>
              </div>

              {/* Option */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Option</label>
                <select
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand focus:border-red-brand"
                >
                  <option value="">Select Option</option>
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand focus:border-red-brand"
                >
                  <option value="">Select Size</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t">
              <div>
                <label className="text-sm font-semibold text-gray-700">My odometer reading is:</label>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    placeholder="Miles"
                    className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-brand"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="bg-red-brand hover:bg-red-brand-light text-white font-bold py-4 px-10 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                View Recommended Tires
              </button>
            </div>
          </form>
        </AnimatedSection>

        {/* Tire Brands Section */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">We carry all major tire brands including:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Michelin", "BFGoodrich", "Uniroyal", "Firestone", "Goodyear", "Pirelli", "Continental", "General"].map((brand) => (
                <span
                  key={brand}
                  className="bg-white px-6 py-3 rounded-lg shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

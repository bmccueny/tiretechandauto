"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function ServiceDueSection() {
  const [year, setYear] = useState("2026");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [odometer, setOdometer] = useState("");

  const years = Array.from({ length: 47 }, (_, i) => (2026 - i).toString());
  const makes = [
    "Select Make", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", 
    "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", 
    "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", 
    "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", 
    "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rolls-Royce", "Subaru", "Tesla", 
    "Toyota", "Volkswagen", "Volvo"
  ];

  const checkSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    // This would check the manufacturer maintenance schedule
    alert(`Checking maintenance schedule for ${year} ${make} ${model}. This would typically connect to manufacturer data to show recommended services.`);
  };

  return (
    <section className="py-16 bg-navy">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-oswald)] text-3xl md:text-4xl font-bold text-white">
              Are You Due for Service?
            </h2>
            <p className="mt-4 text-xl text-gray-200">
              We can help you find out. Enter your vehicle information below, and we will check the maintenance schedule from your vehicle manufacturer.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={checkSchedule} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 items-end mb-6">
              {/* My vehicle is a: */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-300 mb-2">My vehicle is a:</label>
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-red-brand"
                >
                  {makes.map((m) => (
                    <option key={m} value={m.replace("Select Make", "")}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div className="w-full md:w-32">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Year:</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-red-brand"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Model:</label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Enter model..."
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-red-brand"
                />
              </div>

              {/* Odometer */}
              <div className="w-full md:w-40">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Odometer:</label>
                <input
                  type="number"
                  value={odometer}
                  onChange={(e) => setOdometer(e.target.value)}
                  placeholder="Miles"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-red-brand"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="submit"
                className="bg-red-brand hover:bg-red-brand-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105"
              >
                View Recommended Services
              </button>
              <Link
                href="/services"
                className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg transition-colors hover:scale-105 border border-white/30 text-center"
              >
                View All Services
              </Link>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

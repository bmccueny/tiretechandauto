"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "retail",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", location: "retail", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-light focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition"
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-light focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-light focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition"
            placeholder="(201) 555-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-navy mb-1">
          Preferred Location
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-light focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition bg-white"
        >
          <option value="retail">Retail: 357 Ramapo Valley Rd, Oakland</option>
          <option value="commercial">Commercial: 56 Spruce Street, Oakland</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy-light focus:border-steel focus:ring-2 focus:ring-steel/20 outline-none transition resize-none"
          placeholder="Tell us about your vehicle and how we can help"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-red-brand hover:bg-red-brand-light text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-semibold text-center">
          Thank you! We will get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-brand font-semibold text-center">
          Something went wrong. Please call us at (201) 337-0016.
        </p>
      )}
    </form>
  );
}

import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tires", label: "Tires" },
  { href: "/about", label: "About Us" },
  { href: "/financing", label: "Financing" },
  { href: "/coupons", label: "Coupons" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Tire Service",
  "Oil Changes",
  "Brake Repair",
  "A/C Service",
  "Engine Diagnostics",
  "Wheel Alignment",
  "Commercial Truck Service",
  "Emergency Road Service",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-oswald)] text-2xl font-bold text-white mb-4">
              Tire Tech
              <span className="block text-sm font-normal text-gray-400 mt-1">
                and Auto Repair Centers
              </span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Family owned and operated since 2003. ASE certified technicians and AAA accredited
              facility serving Oakland, Wyckoff, and all of Northern New Jersey.
            </p>
            <a
              href="https://www.facebook.com/TireTechandAutoOakland/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold text-sm">Retail Location</p>
                <p className="text-sm">357 Ramapo Valley Rd</p>
                <p className="text-sm">Oakland, NJ 07436</p>
                <a href="tel:2013370016" className="text-steel hover:text-white transition-colors text-sm">
                  (201) 337-0016
                </a>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Commercial Truck Location</p>
                <p className="text-sm">56 Spruce Street</p>
                <p className="text-sm">Oakland, NJ 07436</p>
                <a href="tel:2016440800" className="text-steel hover:text-white transition-colors text-sm">
                  (201) 644-0800
                </a>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Hours</p>
                <p className="text-sm">Mon-Fri: 8:00 AM to 6:00 PM</p>
                <p className="text-sm">Sat: 7:00 AM to 5:00 PM</p>
                <p className="text-sm">Sun: Closed</p>
              </div>
              <div>
                <a
                  href="mailto:tiretechandauto@gmail.com"
                  className="text-steel hover:text-white transition-colors text-sm"
                >
                  tiretechandauto@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Tire Tech and Auto Repair Centers. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            ASE Certified &bull; AAA Accredited &bull; Family Owned Since 2003
          </p>
        </div>
      </div>
    </footer>
  );
}

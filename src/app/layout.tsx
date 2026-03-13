import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tire Tech and Auto Repair Centers | Oakland NJ Auto Repair & Tires",
    template: "%s | Tire Tech and Auto Repair Centers",
  },
  description:
    "Family owned auto repair and tire shop in Oakland, NJ. ASE certified technicians, AAA accredited. Tires, brakes, oil changes, diagnostics, and more. Serving Northern New Jersey since 2003.",
  keywords: [
    "auto repair Oakland NJ",
    "tires Oakland NJ",
    "tire shop Oakland NJ",
    "brake repair Oakland NJ",
    "oil change Oakland NJ",
    "ASE certified mechanic",
    "AAA accredited auto repair",
    "Tire Tech Oakland",
    "commercial truck tires NJ",
  ],
  openGraph: {
    title: "Tire Tech and Auto Repair Centers | Oakland NJ",
    description:
      "Family owned auto repair and tire shop serving Northern New Jersey since 2003. ASE certified, AAA accredited.",
    url: "https://tiretechandauto.com",
    siteName: "Tire Tech and Auto Repair Centers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

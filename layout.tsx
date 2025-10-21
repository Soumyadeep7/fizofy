import "./home.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/toast";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fizofy – India’s Most Optimized Wellness Platform",
  description:
    "Fizofy offers specialized physiotherapy services including aquatic therapy, sports injury rehabilitation, and personalized treatment plans. We aim to revolutionize physiotherapy through collaboration between patients, doctors, and hospitals while promoting healthy living. With pocket-friendly, accessible, and patient-centric care, Fizofy helps individuals unlock their full potential and build lasting trust in healthcare.",
  keywords: [
    "Fizofy",
    "physiotherapy",
    "wellness",
    "sports rehabilitation",
    "aquatic therapy",
    "healthcare platform",
    "personalized treatment",
  ],
  authors: [{ name: "Fizofy Health" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Fizofy – India’s Most Optimized Wellness Platform",
    description:
      "Revolutionizing physiotherapy through accessibility, collaboration, and trust. Join Fizofy to experience specialized, affordable care for every individual.",
    
    siteName: "Fizofy",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black antialiased min-h-screen flex flex-col`}
      >
        <ToastProvider>
          {/* HEADER / NAVBAR */}
          <header className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link href="/C:\Users\Admin\Downloads\hifizo\FizoFy logo 2 green text.jpg" className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Fizofy Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold text-green-900">
                  Fizofy
                </span>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                <Link
                  href="/"
                  className="hover:text-green-700 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-green-700 transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-green-700 transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-green-700 transition-colors duration-200"
                >
                  Contact
                </Link>
              </nav>

              {/* Call-to-Action Button */}
              <Link
                href="/membership"
                className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-green-800 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="bg-green-900 text-white text-center py-4 text-sm mt-12">
            <p>
              © {new Date().getFullYear()} Fizofy Health. All rights reserved. |
              Made with ❤️ in India
            </p>
          </footer>

          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}

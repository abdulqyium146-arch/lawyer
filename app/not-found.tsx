import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | NJB Legal",
  description: "The page you are looking for could not be found. Return to NJB Legal for commercial property and business law advice in Cheshire.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gold font-cormorant text-8xl font-light mb-4">404</p>
        <h1 className="text-white font-cormorant text-3xl font-semibold mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-300 mb-8 leading-relaxed">
          Sorry, we couldn&rsquo;t find that page. It may have moved or been removed.
          Use the links below to find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gold text-ink font-semibold px-6 py-3 rounded hover:bg-gold/90 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="border border-gold text-gold font-semibold px-6 py-3 rounded hover:bg-gold/10 transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-10 text-slate-400 text-sm">
          Need help?{" "}
          <a href="tel:07587723897" className="text-gold hover:underline">
            Call 07587 723897
          </a>
        </p>
      </div>
    </div>
  );
}

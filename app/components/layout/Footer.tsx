import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const services = [
  { name: "Commercial Property", href: "/services/commercial-property-solicitor-cheshire" },
  { name: "Corporate & Commercial", href: "/services/corporate-commercial-lawyer-north-west" },
  { name: "Agricultural Law", href: "/services/agricultural-law-solicitor-uk" },
  { name: "Commercial Leases", href: "/services/commercial-lease-solicitor-cheshire" },
  { name: "Land & Development", href: "/services/land-development-solicitor-cheshire" },
  { name: "Business Contracts", href: "/services/business-contracts-solicitor-cheshire" },
];

const locations = [
  { name: "Solicitors in Cheshire", href: "/locations/solicitor-cheshire" },
  { name: "Solicitors in Chester", href: "/locations/solicitor-chester" },
  { name: "Solicitors in Crewe", href: "/locations/solicitor-crewe" },
  { name: "Solicitors in Northwich", href: "/locations/solicitor-northwich" },
  { name: "Solicitors in Warrington", href: "/locations/solicitor-warrington" },
  { name: "Solicitors in Manchester", href: "/locations/solicitor-manchester" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand + NAP */}
          <div>
            <Link href="/" aria-label="NJB Legal — Home">
              <Image
                src="/Njb-LEGAL-logo-on-grey-gradient-300x200.webp"
                alt="NJB Legal"
                width={150}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Commercial property, corporate & commercial and agricultural law solicitors based in Winsford, Cheshire. Serving clients across the North West and nationwide. SRA regulated via Nexa Law.
            </p>
            <p className="mt-4 text-xs text-white/50 font-medium uppercase tracking-wider">
              Regulated via Nexa Law · SRA No. 633024
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.linkedin.com/company/njb-legal" target="_blank" rel="noopener noreferrer"
                aria-label="NJB Legal on LinkedIn"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 hover:bg-gold transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-cormorant font-semibold text-lg text-gold-light mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services"
                  className="text-sm text-gold hover:text-gold-light transition-colors font-medium">
                  All Practice Areas →
                </Link>
              </li>
            </ul>
            <h3 className="font-cormorant font-semibold text-lg text-gold-light mt-6 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Case Results", href: "/case-results" },
                { name: "FAQ", href: "/faq" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations — GEO SEO */}
          <div>
            <h3 className="font-cormorant font-semibold text-lg text-gold-light mb-4">
              Areas We Serve
            </h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Also serving Nantwich, Knutsford, Wilmslow, Macclesfield, Winsford, Stockport, Liverpool, Preston and clients UK-wide.
            </p>
          </div>

          {/* Col 4: Contact / NAP */}
          <div>
            <h3 className="font-cormorant font-semibold text-lg text-gold-light mb-4">
              Contact NJB Legal
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-sm text-white/70 leading-relaxed">
                  7 Charter Court<br />
                  Winsford<br />
                  Cheshire, CW7 2FY
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" aria-hidden="true" />
                <a href="tel:+447587723897"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                  aria-label="Call NJB Legal on 07587 723897">
                  07587 723897
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" aria-hidden="true" />
                <a href="mailto:info@njblegal.co.uk"
                  className="text-sm text-white/70 hover:text-gold transition-colors">
                  info@njblegal.co.uk
                </a>
              </div>
            </address>
            <div className="mt-4 text-xs text-white/50 leading-relaxed space-y-1">
              <p>Monday – Friday: 9:00am – 5:30pm</p>
              <p>Enquire online any time</p>
            </div>
            <Link href="/contact" className="btn-primary mt-6 text-sm w-full justify-center">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 max-w-3xl leading-relaxed">
            Copyright 2026. NJB Legal is a trading name of NJB Legal Limited, a company registered
            in England and Wales (No. 16921195). Registered Office: 7 Charter Court, Winsford,
            Cheshire CW7 2FY. Neither NJB Legal nor NJB Legal Limited provide legal advice to the
            public. NJB Legal Limited is a Consultant Practice of Nexa Law Limited, which is
            Authorised and Regulated by the Solicitors Regulation Authority (SRA No. 633024).
            All legal work is conducted via Nexa Law.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/50 hover:text-gold transition-colors">
              Terms
            </Link>
            <Link href="/disclaimer" className="text-xs text-white/50 hover:text-gold transition-colors">
              Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

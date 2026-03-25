"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, ArrowUp, MapPin } from "lucide-react";

/* ── Nav data ─────────────────────────────────────────── */
const serviceLinks = [
  {
    label: "Commercial Property",
    desc:  "Acquisitions, disposals & investment",
    href:  "/services/commercial-property-solicitor-cheshire",
  },
  {
    label: "Corporate & Commercial",
    desc:  "Business law across the North West",
    href:  "/services/corporate-commercial-lawyer-north-west",
  },
  {
    label: "Agricultural Law",
    desc:  "Land, tenancies & rural matters",
    href:  "/services/agricultural-law-solicitor-uk",
  },
  {
    label: "Commercial Leases",
    desc:  "Landlord & tenant advice",
    href:  "/services/commercial-lease-solicitor-cheshire",
  },
  {
    label: "Land & Development",
    desc:  "Planning, s106 & site acquisitions",
    href:  "/services/land-development-solicitor-cheshire",
  },
  {
    label: "Business Contracts",
    desc:  "Drafting, review & negotiation",
    href:  "/services/business-contracts-solicitor-cheshire",
  },
];

const locationLinks = [
  { label: "Solicitor in Cheshire",    href: "/locations/solicitor-cheshire" },
  { label: "Solicitor in Winsford",    href: "/locations/solicitor-winsford" },
  { label: "Solicitor in Chester",     href: "/locations/solicitor-chester" },
  { label: "Solicitor in Crewe",       href: "/locations/solicitor-crewe" },
  { label: "Solicitor in Macclesfield",href: "/locations/solicitor-macclesfield" },
  { label: "Solicitor in Northwich",   href: "/locations/solicitor-northwich" },
  { label: "Solicitor in Manchester",  href: "/locations/solicitor-manchester" },
  { label: "North West",               href: "/locations/solicitor-north-west" },
];

/* ── Component ────────────────────────────────────────── */
export default function StickyNav() {
  const [scrolled,       setScrolled]       = useState(false);
  const [hidden,         setHidden]         = useState(false);
  const [progress,       setProgress]       = useState(0);
  const [showTop,        setShowTop]        = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [locationsOpen,  setLocationsOpen]  = useState(false);

  const lastScrollY    = useRef(0);
  const servicesRef    = useRef<HTMLDivElement>(null);
  const locationsRef   = useRef<HTMLDivElement>(null);
  const pathname       = usePathname();

  /* ── Scroll ─────────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    const y         = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(maxScroll > 0 ? Math.min((y / maxScroll) * 100, 100) : 0);
    setScrolled(y > 60);
    setShowTop(y > 400);
    if (y > 120) {
      setHidden(y > lastScrollY.current + 4);
    } else {
      setHidden(false);
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Route change → close everything ────────────────── */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  /* ── Body lock when mobile menu open ────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Outside click closes dropdowns ─────────────────── */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (servicesRef.current  && !servicesRef.current.contains(e.target as Node))  setServicesOpen(false);
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) setLocationsOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Desktop nav-link helper ─────────────────────────── */
  const navLink = (href: string, label: string, exact = false) => {
    const active = exact ? pathname === href : pathname?.startsWith(href);
    return (
      <Link
        href={href}
        className={`relative px-3 py-2 text-sm font-outfit font-medium transition-colors duration-200 rounded group ${
          active ? "text-gold" : "text-ink hover:text-gold"
        }`}
        aria-current={active ? "page" : undefined}
      >
        {label}
        <span
          className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full transition-transform duration-200 origin-left ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
          aria-hidden="true"
        />
      </Link>
    );
  };

  /* ── Dropdown trigger helper ─────────────────────────── */
  const dropdownTrigger = (
    label: string,
    isOpen: boolean,
    isActive: boolean,
    onClick: () => void,
  ) => (
    <button
      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-outfit font-medium transition-colors duration-200 rounded group ${
        isActive ? "text-gold" : "text-ink hover:text-gold"
      }`}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={onClick}
    >
      {label}
      <ChevronDown
        size={13}
        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
      <span
        className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full transition-transform duration-200 origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        aria-hidden="true"
      />
    </button>
  );

  return (
    <>
      {/* ── Gold scroll-progress bar ─────────────────────── */}
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-gold transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* ── Header ───────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-mist transition-all duration-300 ease-in-out ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-nav" : "bg-white"
        } ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"}`}
        role="banner"
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16 lg:h-20"}`}>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0"
              aria-label="NJB Legal — Home"
            >
              <Image
                src="/Njb-LEGAL-logo-on-grey-gradient-300x200.webp"
                alt="NJB Legal"
                width={150}
                height={100}
                className={`w-auto brightness-0 transition-all duration-300 ${scrolled ? "h-9" : "h-11 lg:h-12"}`}
                priority
              />
            </Link>

            {/* ── Desktop nav ──────────────────────────── */}
            <div className="hidden lg:flex items-center gap-0.5">

              {navLink("/", "Home", true)}
              {navLink("/about", "About", true)}

              {/* Services ▾ */}
              <div ref={servicesRef} className="relative">
                {dropdownTrigger(
                  "Services",
                  servicesOpen,
                  !!pathname?.startsWith("/services"),
                  () => { setServicesOpen((o) => !o); setLocationsOpen(false); },
                )}
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-white border border-mist rounded-xl shadow-card-hover z-50 transition-all duration-200 origin-top-left ${
                    servicesOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                >
                  <div className="p-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors group/item ${
                          pathname === s.href ? "bg-gold/10 text-gold" : "hover:bg-cream"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0 mt-1.5" aria-hidden="true" />
                        <span>
                          <span className={`block text-sm font-medium leading-tight ${
                            pathname === s.href ? "text-gold" : "text-ink group-hover/item:text-gold"
                          } transition-colors`}>
                            {s.label}
                          </span>
                          <span className="block text-xs text-slate mt-0.5">{s.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-mist px-2 py-2">
                    <Link
                      href="/services"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-gold hover:bg-cream rounded-lg transition-colors"
                    >
                      All Services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Locations ▾ */}
              <div ref={locationsRef} className="relative">
                {dropdownTrigger(
                  "Locations",
                  locationsOpen,
                  !!pathname?.startsWith("/locations"),
                  () => { setLocationsOpen((o) => !o); setServicesOpen(false); },
                )}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white border border-mist rounded-xl shadow-card-hover z-50 transition-all duration-200 origin-top-left ${
                    locationsOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                >
                  <div className="p-2">
                    {locationLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        role="menuitem"
                        onClick={() => setLocationsOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                          pathname === l.href
                            ? "bg-gold/10 text-gold"
                            : "text-ink hover:bg-cream hover:text-gold"
                        }`}
                      >
                        <MapPin size={12} className="text-gold/60 shrink-0" aria-hidden="true" />
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLink("/blog", "Blog")}
              {navLink("/contact", "Contact", true)}
            </div>

            {/* ── Desktop CTAs ─────────────────────────── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+447587723897"
                className="flex items-center gap-1.5 text-sm font-outfit font-medium text-ink hover:text-gold transition-colors"
                aria-label="Call NJB Legal on 07587 723897"
              >
                <Phone size={14} aria-hidden="true" />
                07587 723897
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm py-2 px-5"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded text-ink hover:text-gold transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className={`block transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </nav>

        {/* ── Mobile menu ──────────────────────────────────── */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-white border-t border-mist transition-all duration-300 ease-in-out overflow-hidden ${
            mobileOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
          }`}
          role="dialog"
          aria-label="Mobile navigation"
          aria-hidden={!mobileOpen}
        >
          <div className="px-4 py-4 space-y-1">

            {/* Primary links */}
            <nav aria-label="Primary pages">
              {[
                { href: "/",        label: "Home",    exact: true },
                { href: "/about",   label: "About",   exact: true },
                { href: "/blog",    label: "Blog",    exact: false },
                { href: "/contact", label: "Contact", exact: true },
              ].map(({ href, label, exact }) => {
                const active = exact ? pathname === href : pathname?.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active ? "bg-gold/10 text-gold" : "text-ink hover:bg-cream hover:text-gold"
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Services */}
            <div className="border-t border-mist pt-3">
              <p className="px-3 py-1.5 text-xs font-semibold text-slate uppercase tracking-wider">
                Services
              </p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    pathname === s.href ? "bg-gold/10 text-gold" : "text-ink hover:bg-cream hover:text-gold"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0 mt-1.5" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium leading-tight">{s.label}</span>
                    <span className="block text-xs text-slate mt-0.5">{s.desc}</span>
                  </span>
                </Link>
              ))}
              <Link
                href="/services"
                className="block px-3 py-2.5 text-sm font-semibold text-gold hover:bg-cream rounded-lg transition-colors"
              >
                All Services →
              </Link>
            </div>

            {/* Locations */}
            <div className="border-t border-mist pt-3">
              <p className="px-3 py-1.5 text-xs font-semibold text-slate uppercase tracking-wider">
                Locations
              </p>
              <div className="grid grid-cols-2 gap-0.5">
                {locationLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                      pathname === l.href ? "text-gold bg-gold/10" : "text-slate hover:text-gold hover:bg-cream"
                    }`}
                  >
                    <MapPin size={11} className="text-gold/50 shrink-0" aria-hidden="true" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="border-t border-mist pt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:+447587723897"
                className="flex items-center justify-center gap-2 btn-secondary text-sm py-3"
                aria-label="Call NJB Legal"
              >
                <Phone size={14} aria-hidden="true" />
                07587 723897
              </a>
              <Link href="/contact" className="btn-primary text-sm py-3 text-center">
                Enquire Now
              </Link>
            </div>

            {/* NAP — mobile local SEO */}
            <p className="text-xs text-slate/50 font-outfit text-center pt-2 pb-1 leading-relaxed">
              7 Charter Court, Winsford, Cheshire CW7 2FY
              <br />SRA via Nexa Law · No. 633024
            </p>
          </div>
        </div>
      </header>

      {/* Spacer matches nav height */}
      <div
        className={`transition-all duration-300 ${scrolled ? "h-14" : "h-16 lg:h-20"}`}
        aria-hidden="true"
      />

      {/* ── Back to top ──────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-ink text-gold shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </>
  );
}

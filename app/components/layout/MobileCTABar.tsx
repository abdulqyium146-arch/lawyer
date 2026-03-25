import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex">
        <a
          href="tel:+447587723897"
          className="flex-1 flex items-center justify-center gap-2 bg-gold text-ink font-outfit font-semibold text-sm py-4 hover:bg-gold-light transition-colors"
          aria-label="Call NJB Legal on 07587 723897"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-ink text-white font-outfit font-semibold text-sm py-4 hover:bg-slate transition-colors"
          aria-label="Send an enquiry to NJB Legal"
        >
          <Mail size={16} />
          Enquire
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface LocationCardProps {
  town: string;
  href: string;
  description?: string;
}

export default function LocationCard({
  town,
  href,
  description,
}: LocationCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 bg-white border border-mist rounded-lg px-4 py-3 transition-all duration-200 hover:shadow-card-hover hover:border-gold"
      aria-label={`Commercial property solicitor in ${town}`}
    >
      <MapPin size={16} className="text-gold shrink-0" />
      <div className="flex-1 min-w-0">
        <span className="block font-outfit font-medium text-sm text-ink group-hover:text-gold transition-colors">
          {town}
        </span>
        {description && (
          <span className="block text-xs text-slate truncate">{description}</span>
        )}
      </div>
      <ArrowRight
        size={14}
        className="text-slate group-hover:text-gold group-hover:translate-x-0.5 transition-all shrink-0"
      />
    </Link>
  );
}

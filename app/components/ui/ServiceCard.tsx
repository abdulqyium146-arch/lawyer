import Link from "next/link";
import {
  Building2,
  FileText,
  Briefcase,
  Tractor,
  Hammer,
  Scale,
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  href: string;
}

const iconMap: Record<string, React.ReactNode> = {
  building: <Building2 size={24} className="text-gold" />,
  filetext: <FileText size={24} className="text-gold" />,
  briefcase: <Briefcase size={24} className="text-gold" />,
  tractor: <Tractor size={24} className="text-gold" />,
  hammer: <Hammer size={24} className="text-gold" />,
  scale: <Scale size={24} className="text-gold" />,
};

export default function ServiceCard({
  icon,
  name,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-mist rounded-lg p-6 transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
      aria-label={`Learn about our ${name} services`}
    >
      <div className="mb-4">{iconMap[icon] ?? iconMap.scale}</div>
      <h3 className="font-cormorant font-semibold text-xl text-ink mb-2">
        {name}
      </h3>
      <p className="text-sm font-outfit text-slate leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-outfit font-semibold text-gold group-hover:gap-2 transition-all">
        Learn More
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

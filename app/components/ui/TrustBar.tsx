import { Star, Award, Network, MapPin } from "lucide-react";

const items = [
  {
    icon: <Star size={18} className="text-gold" fill="#B8973A" />,
    label: "5.0 Google Rating",
    sub: "12 Reviews",
  },
  {
    icon: <Award size={18} className="text-gold" />,
    label: "12+ Years Experience",
    sub: "Specialist Solicitor",
  },
  {
    icon: <Network size={18} className="text-gold" />,
    label: "Nexa Law Network",
    sub: "National Coverage",
  },
  {
    icon: <MapPin size={18} className="text-gold" />,
    label: "Winsford, Cheshire",
    sub: "Serving the North West",
  },
];

export default function TrustBar() {
  return (
    <div className="bg-white/10 backdrop-blur-sm border-t border-white/20 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.icon}
            <div>
              <p className="text-sm font-outfit font-semibold text-white">
                {item.label}
              </p>
              <p className="text-xs font-outfit text-white/60">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

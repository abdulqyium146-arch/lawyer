import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <figure className="bg-white border border-mist rounded-lg p-6 flex flex-col gap-4">
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-gold"
            fill="#B8973A"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote>
        <p className="font-outfit text-sm text-slate leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-auto">
        <p className="font-outfit font-semibold text-sm text-ink">{author}</p>
        <p className="font-outfit text-xs text-slate">{location}</p>
      </figcaption>
    </figure>
  );
}

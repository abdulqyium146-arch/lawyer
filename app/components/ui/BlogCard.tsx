import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  readTime: string;
  category?: string;
}

export default function BlogCard({
  title,
  excerpt,
  href,
  date,
  readTime,
  category,
}: BlogCardProps) {
  return (
    <article className="group bg-white border border-mist rounded-lg overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5">
      <div className="p-6">
        {category && (
          <span className="inline-block text-xs font-outfit font-semibold text-gold uppercase tracking-wider mb-3">
            {category}
          </span>
        )}
        <h3 className="font-cormorant font-semibold text-xl text-ink mb-3 leading-snug group-hover:text-gold transition-colors">
          <Link href={href} aria-label={`Read: ${title}`}>
            {title}
          </Link>
        </h3>
        <p className="text-sm font-outfit text-slate leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-mist">
          <div className="flex items-center gap-3 text-xs text-slate">
            <time dateTime={date}>{date}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {readTime}
            </span>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-xs font-outfit font-semibold text-gold group-hover:gap-2 transition-all"
          >
            Read
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}

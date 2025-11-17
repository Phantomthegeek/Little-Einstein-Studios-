import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import AnimatedReveal from "./AnimatedReveal";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  author,
}: BlogCardProps) {
  return (
    <AnimatedReveal direction="up" className="h-full">
      <Link
        href={`/insights/${id}`}
        className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
            <span className="px-3 py-1 text-xs font-medium text-purple bg-purple/10 rounded-full">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {readTime}
            </div>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-purple transition-colors">
            {title}
          </h3>
          <p className="text-charcoal/70 leading-relaxed">{excerpt}</p>
          {author && (
            <div className="mt-4 text-sm text-charcoal/60">By {author}</div>
          )}
        </div>
      </Link>
    </AnimatedReveal>
  );
}


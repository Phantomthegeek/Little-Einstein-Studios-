import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedReveal from "./AnimatedReveal";

interface CaseStudyCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags?: string[];
}

export default function CaseStudyCard({
  id,
  title,
  description,
  category,
  image,
  tags = [],
}: CaseStudyCardProps) {
  return (
    <AnimatedReveal direction="up" className="h-full">
      <Link
        href={`/portfolio/${id}`}
        className="group block h-full bg-white rounded-3xl overflow-hidden shadow-glow-soft hover:shadow-glow-purple transition-all duration-500 border border-purple/10 hover:border-purple/30 hover-lift"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-block px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple to-pink rounded-full shadow-lg backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 group-hover:text-gradient-purple transition-all duration-300">
            {title}
          </h3>
          <p className="text-charcoal/70 mb-4 leading-relaxed">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium text-charcoal/70 bg-purple/5 border border-purple/10 rounded-lg hover:bg-purple/10 hover:border-purple/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-gradient-purple font-semibold group-hover:gap-4 transition-all duration-300 text-sm sm:text-base">
            View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </AnimatedReveal>
  );
}


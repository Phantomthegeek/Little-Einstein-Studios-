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
        className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
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
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-purple rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-purple transition-colors">
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
                  className="px-2 py-1 text-xs font-medium text-charcoal/60 bg-gray-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-purple font-medium group-hover:gap-4 transition-all">
            View Case Study <ArrowRight size={18} />
          </div>
        </div>
      </Link>
    </AnimatedReveal>
  );
}


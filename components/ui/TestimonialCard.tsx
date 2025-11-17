import { Star } from "lucide-react";
import AnimatedReveal from "./AnimatedReveal";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  avatar?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatar,
}: TestimonialCardProps) {
  return (
    <AnimatedReveal direction="up" className="h-full">
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col border border-gray-100">
        {rating > 0 && (
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        )}
        <blockquote className="text-charcoal/80 mb-6 flex-grow text-lg leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-blue-electric flex items-center justify-center text-white font-semibold">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-charcoal">{author}</div>
            <div className="text-sm text-charcoal/60">
              {role} at {company}
            </div>
          </div>
        </div>
      </div>
    </AnimatedReveal>
  );
}


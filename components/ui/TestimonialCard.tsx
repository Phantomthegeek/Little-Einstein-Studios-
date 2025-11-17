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
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-glow-soft hover:shadow-glow-purple transition-all duration-300 h-full flex flex-col border border-purple/10 hover:border-purple/20 hover-lift">
        {rating > 0 && (
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-default text-yellow-default drop-shadow-sm"
              />
            ))}
          </div>
        )}
        <blockquote className="text-charcoal/80 mb-6 flex-grow text-base sm:text-lg leading-relaxed">
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
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple via-purple-light to-blue-electric flex items-center justify-center text-white font-semibold shadow-glow-purple">
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


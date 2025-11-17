import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  tag,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-8 sm:mb-12", alignClasses[align], className)}>
      {tag && (
        <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold text-purple bg-purple/10 border border-purple/20 rounded-full mb-3 sm:mb-4 shadow-sm">
          {tag}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-3 sm:mb-4">
        <span className="bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed px-2 sm:px-0">
          {description}
        </p>
      )}
    </div>
  );
}


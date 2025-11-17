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
    <div className={cn("max-w-3xl mb-12", alignClasses[align], className)}>
      {tag && (
        <span className="inline-block px-3 py-1 text-sm font-medium text-purple bg-purple/10 rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-charcoal/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}


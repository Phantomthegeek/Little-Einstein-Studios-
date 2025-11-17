import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  showArrow?: boolean;
  sparkle?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      href,
      children,
      showArrow = false,
      sparkle = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative overflow-hidden group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95";

    const variants = {
      primary:
        "bg-gradient-to-r from-purple via-purple-light to-blue-electric text-white hover:shadow-glow-purple hover:scale-105 hover:from-purple-dark hover:via-purple hover:to-blue-dark",
      secondary: "bg-charcoal text-white hover:bg-charcoal-light hover:shadow-glow-soft",
      outline:
        "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:shadow-glow-soft hover:scale-105",
      ghost: "text-charcoal hover:bg-purple/10 hover:text-purple",
    };

    const content = (
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight size={18} />}
      </span>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, variants[variant], className)}
        >
          {content}
          {sparkle && (
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sparkle-glow" />
          )}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {content}
        {sparkle && (
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sparkle-glow" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;


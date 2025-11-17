"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { aboutContent } from "@/data/content";

export default function Values() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE0F0]/20 via-white to-[#DFF2FF]/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Values"
          title="What We Stand For"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {aboutContent.values.map((value, index) => (
            <AnimatedReveal
              key={value.title}
              direction="up"
              delay={index * 0.1}
              className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-lg border border-white/60 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {value.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {value.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


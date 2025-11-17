"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { aboutContent } from "@/data/content";

export default function WhyUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF2CC]/20 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={aboutContent.why.title}
          description={aboutContent.why.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {aboutContent.why.points.map((point, index) => (
            <AnimatedReveal
              key={index}
              direction="left"
              delay={index * 0.1}
              className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/60"
            >
              <div className="w-2 h-2 rounded-full bg-purple mt-2 flex-shrink-0" />
              <p className="text-lg text-charcoal">{point}</p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


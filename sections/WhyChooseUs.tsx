"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { siteContent } from "@/data/content";

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF6ED] text-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Why Us"
          title="Why Choose Little Einstein Studio?"
          description="We combine expertise, innovation, and dedication to deliver exceptional results."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.whyChooseUs.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              direction="up"
              delay={index * 0.1}
              className="group text-center bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-6 shadow-glow-soft hover:shadow-glow-purple border border-purple/10 hover:border-purple/20 hover-lift transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-charcoal mb-3 group-hover:text-gradient-purple transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


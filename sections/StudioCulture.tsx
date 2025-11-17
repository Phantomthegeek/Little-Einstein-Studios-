"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteContent } from "@/data/content";

export default function StudioCulture() {
  const culture = siteContent.culture || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E0EAFF] via-white to-[#FFE4F3]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Studio Rhythm"
          title="How we keep creativity curious"
          description="Culture rituals that make Little Einstein Studio feel like a playground for grown-up makers."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {culture.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              direction="up"
              delay={index * 0.1}
              className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/70"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-xl font-display font-bold text-charcoal">
                  {item.title}
                </h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed font-playful">
                {item.description}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


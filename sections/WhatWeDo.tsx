"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { siteContent } from "@/data/content";
import { Code, Palette, Target } from "lucide-react";

const icons = {
  "📱": Code,
  "🎨": Palette,
  "🎯": Target,
};

export default function WhatWeDo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag={siteContent.services.tag}
          title={siteContent.services.title}
          description={siteContent.services.description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.services.items.map((service, index) => {
            const IconComponent =
              icons[service.icon as keyof typeof icons] || Code;
            return (
              <AnimatedReveal
                key={service.title}
                direction="up"
                delay={index * 0.1}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-blue-electric flex items-center justify-center mb-6">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


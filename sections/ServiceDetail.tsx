"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    deliverables: string[];
    tools: string[];
    cta: string;
  };
  isEven: boolean;
}

export default function ServiceDetail({ service, isEven }: ServiceDetailProps) {
  return (
    <section
      id={service.id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isEven ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isEven ? "lg:grid-flow-dense" : ""
          }`}
        >
          <AnimatedReveal
            direction={isEven ? "right" : "left"}
            className={isEven ? "lg:col-start-2" : ""}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-6">
              {service.title}
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              {service.description}
            </p>
            <Button href="/contact" showArrow>
              {service.cta}
            </Button>
          </AnimatedReveal>

          <AnimatedReveal
            direction={isEven ? "left" : "right"}
            className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple mt-1">✓</span>
                      <span className="text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-100 text-charcoal rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}


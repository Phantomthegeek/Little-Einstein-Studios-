"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteContent } from "@/data/content";

export default function TeamSpotlight() {
  const team = siteContent.team || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF4EA] via-white to-[#F0F9FF]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="The Studio Crew"
          title="Meet the humans making the sparks fly"
          description="A colourful mix of designers, engineers, and strategists who pour curiosity into every sprint."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedReveal
              key={member.name}
              direction="up"
              delay={index * 0.1}
              className="bg-white rounded-3xl p-6 shadow-xl border border-white/70 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-[#FF8BD4] to-[#7C3AED] rounded-full blur-3xl" />
                <div className="absolute -left-8 bottom-0 w-24 h-24 bg-gradient-to-br from-[#93C5FD] to-[#4ADE80] rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFDEE2] to-[#D2E1FF] flex items-center justify-center text-charcoal font-bold text-2xl">
                  {member.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    member.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                  )}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-charcoal/60">
                    {member.location}
                  </p>
                  <h3 className="text-xl font-display font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
                {member.funFact && (
                  <div className="text-xs bg-charcoal/5 rounded-full px-3 py-1 text-charcoal/70 inline-flex items-center gap-1">
                    <span role="img" aria-label="sparkles">
                      ✨
                    </span>
                    {member.funFact}
                  </div>
                )}
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


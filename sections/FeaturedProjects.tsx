"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Portfolio"
          title="Featured Projects"
          description="Discover some of our recent work that showcases our expertise in app development, design, and digital strategy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteContent.featuredProjects.map((project) => (
            <CaseStudyCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/portfolio" variant="outline" showArrow>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}


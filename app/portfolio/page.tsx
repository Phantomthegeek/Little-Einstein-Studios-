import type { Metadata } from "next";
import PortfolioHero from "@/sections/PortfolioHero";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { portfolioContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Portfolio | Little Einstein Studio",
  description:
    "Explore our portfolio of successful projects including mobile apps, web platforms, and digital solutions.",
  openGraph: {
    title: "Portfolio | Little Einstein Studio",
    description: "Our portfolio of successful digital projects.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioContent.map((project) => (
              <CaseStudyCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.solution}
                category={project.category}
                image={project.images[0]}
                tags={project.techStack}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


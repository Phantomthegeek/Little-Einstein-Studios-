import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Button from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/data";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects(3);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Portfolio"
          title="Featured Projects"
          description="Discover some of our recent work that showcases our expertise in app development, design, and digital strategy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <CaseStudyCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.summary}
              category={project.category}
              image={project.coverImage}
              tags={(project.tools as string[]) || []}
            />
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


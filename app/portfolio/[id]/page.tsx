import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { portfolioContent } from "@/data/content";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = portfolioContent.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Little Einstein Studio`,
    description: project.solution,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = portfolioContent.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-charcoal/70 hover:text-purple transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple bg-purple/10 rounded-full mb-4">
            {project.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
            {project.title}
          </h1>
        </div>

        <div className="space-y-12 mb-12">
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Problem</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Solution</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Process</h2>
            <ul className="space-y-3">
              {project.process.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center font-bold mt-1">
                    {i + 1}
                  </span>
                  <p className="text-lg text-charcoal/70 leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 text-charcoal rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 gap-6">
              {project.images.map((image, i) => (
                <div key={i} className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {project.results && (
            <section className="bg-gradient-to-br from-purple to-blue-electric rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-lg text-white/90">{project.results}</p>
            </section>
          )}
        </div>

        <div className="border-t border-gray-200 pt-12 text-center">
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            Start a Project Like This
          </h3>
          <p className="text-charcoal/70 mb-6">
            Ready to bring your vision to life? Let&apos;s discuss how we can help.
          </p>
          <Button href="/contact" showArrow>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}


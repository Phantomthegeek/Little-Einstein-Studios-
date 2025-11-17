import type { Metadata } from "next";
import InsightsHero from "@/sections/InsightsHero";
import BlogCard from "@/components/ui/BlogCard";
import { blogContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Insights | Little Einstein Studio",
  description:
    "Read our latest insights on app development, UI/UX design, digital strategy, and technology trends.",
  openGraph: {
    title: "Insights | Little Einstein Studio",
    description: "Our latest insights and articles on digital innovation.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogContent.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


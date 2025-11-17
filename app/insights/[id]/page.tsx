import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogContent } from "@/data/content";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = blogContent.find((p) => p.id === params.id);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} | Little Einstein Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogContent.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-charcoal/70 hover:text-purple transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Insights
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple bg-purple/10 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-charcoal/60">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </div>
            {post.author && (
              <div>
                By <span className="font-medium">{post.author}</span>
              </div>
            )}
          </div>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg text-charcoal/70 leading-relaxed whitespace-pre-line">
            {post.content || (
              <div>
                <p>{post.excerpt}</p>
                <p className="mt-4">
                  This is a placeholder article. Replace this content with your
                  actual blog post content. You can format it using markdown or
                  plain HTML as needed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}


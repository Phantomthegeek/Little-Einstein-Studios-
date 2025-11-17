import { prisma } from "./prisma";
import { siteContent, servicesContent, blogContent } from "@/data/content";
import { Service, Testimonial, Experiment, Post, Project } from "@prisma/client";

// Fallback data helpers
function getFallbackServices(): Service[] {
  return servicesContent.map((s, i) => ({
    id: s.id,
    slug: s.id,
    name: s.title,
    description: s.description,
    deliverables: s.deliverables as any,
    tools: s.tools as any,
    highlight: s.cta,
  })) as Service[];
}

function getFallbackTestimonials(): Testimonial[] {
  return siteContent.testimonials.map((t, i) => ({
    id: `testimonial-${i}`,
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    avatarUrl: null,
    rating: t.rating,
  })) as Testimonial[];
}

function getFallbackExperiments(): Experiment[] {
  return [
    {
      id: "exp-1",
      slug: "exp-1",
      name: "Mini Hack Night Prototype",
      description: "Quick experiments from our monthly hack sessions.",
      impact: "Research & Play",
      image: "/1032569.png",
      createdAt: new Date(),
    },
  ] as Experiment[];
}

function getFallbackProjects(): Project[] {
  return siteContent.featuredProjects.map((p) => ({
    id: p.id,
    slug: p.id,
    title: p.title,
    category: p.category,
    summary: p.description,
    challenge: "",
    solution: "",
    impact: null,
    coverImage: p.image,
    gallery: [],
    deliverables: [] as any,
    tools: p.tags as any,
    createdAt: new Date(),
    updatedAt: new Date(),
  })) as Project[];
}

export async function getFeaturedProjects(limit = 3) {
  try {
    return await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
      include: { gallery: true },
    });
  } catch (error) {
    // Fallback to static data during build or when DB unavailable
    const fallback = getFallbackProjects().slice(0, limit);
    return fallback.map((p) => ({
      ...p,
      gallery: [] as { id: string; imageUrl: string; caption: string | null; projectId: string }[],
    }));
  }
}

export async function getServices() {
  try {
    return await prisma.service.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    // Fallback to static data during build or when DB unavailable
    return getFallbackServices();
  }
}

export async function getTestimonials(limit = 6) {
  try {
    return await prisma.testimonial.findMany({
      orderBy: { id: "asc" },
      take: limit,
    });
  } catch (error) {
    // Fallback to static data during build or when DB unavailable
    return getFallbackTestimonials().slice(0, limit);
  }
}

export async function getExperiments() {
  try {
    return await prisma.experiment.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    // Fallback to static data during build or when DB unavailable
    return getFallbackExperiments();
  }
}

export async function getPosts(limit = 3) {
  try {
    return await prisma.post.findMany({
      orderBy: { publishedAt: "desc" },
      take: limit,
    });
  } catch (error) {
    // Fallback to static data during build or when DB unavailable
    return blogContent.slice(0, limit).map((post) => ({
      id: post.id,
      slug: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      coverImage: post.image,
      publishedAt: new Date(post.date),
    })) as Post[];
  }
}


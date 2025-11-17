import { prisma } from "./prisma";

export async function getFeaturedProjects(limit = 3) {
  return prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    include: { gallery: true },
  });
}

export async function getServices() {
  return prisma.service.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getTestimonials(limit = 6) {
  return prisma.testimonial.findMany({
    orderBy: { id: "asc" },
    take: limit,
  });
}

export async function getExperiments() {
  return prisma.experiment.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getPosts(limit = 3) {
  return prisma.post.findMany({
    orderBy: { publishedAt: "desc" },
    take: limit,
  });
}


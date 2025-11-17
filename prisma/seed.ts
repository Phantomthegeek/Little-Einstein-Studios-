import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {
    slug: "app-experiments",
    name: "App Experiments",
    description:
      "Rapid prototyping, native builds, and playful micro-interactions crafted for little learners.",
    deliverables: [
      "Research-backed prototypes",
      "Cross-platform builds",
      "Accessibility + parental controls",
      "Launch & growth plan",
    ],
    tools: ["React Native", "Expo", "SwiftUI", "Firebase"],
    highlight: "Perfect for MVPs that need to feel magical on day one.",
  },
  {
    slug: "design-systems",
    name: "Design Systems",
    description:
      "Pixel-perfect UI kits, illustration systems, and storytelling guidelines for colourful brands.",
    deliverables: [
      "Interactive design system",
      "Illustration + motion kits",
      "Voice & tone playbook",
      "Developer handoff package",
    ],
    tools: ["Figma", "Lottie", "After Effects"],
  },
  {
    slug: "digital-strategy",
    name: "Digital Strategy",
    description:
      "Experiment roadmaps, analytics rituals, and KPI dashboards that keep learning products curious.",
    deliverables: [
      "Experiment roadmap",
      "Insights & analytics setup",
      "Research interviews",
      "Growth campaign support",
    ],
    tools: ["Notion", "Amplitude", "UserTesting"],
  },
];

const projects = [
  {
    slug: "galaxy-math-lab",
    title: "Galaxy Math Lab",
    category: "Learning Games",
    summary:
      "An adaptive space-themed math adventure that keeps 6–9 year olds curious.",
    challenge:
      "Create a math product that balances curriculum goals with delight.",
    solution:
      "We built a galaxy explorer with daily missions, parent dashboards, and teacher co-play modes.",
    impact: "4.9⭐ App Store rating, 35k DAU within 90 days.",
    coverImage: "/1032569.png",
    deliverables: [
      "UX research & testing",
      "React Native build",
      "Brand & illustration system",
      "Launch campaigns",
    ],
    tools: ["React Native", "Expo", "Figma", "Firebase"],
    gallery: ["/1032569.png", "/1032569.png", "/1032569.png"].map(
      (imageUrl, idx) => ({
        imageUrl,
        caption: `Mission preview ${idx + 1}`,
      })
    ),
  },
  {
    slug: "alphabet-adventure",
    title: "Alphabet Adventure",
    category: "Early Literacy",
    summary:
      "Handcrafted tracing interactions with real-time pronunciation coaching.",
    challenge: "Help first-time readers stay engaged without ads or noise.",
    solution:
      "A friendly mascot guides children through letter gardens, breathing exercises, and badge quests.",
    impact: "Adoption in 180 classrooms across UK & NG.",
    coverImage: "/1032569.png",
    deliverables: [
      "Service blueprint",
      "Storyboards & motion",
      "Audio pipeline",
      "Teacher toolkit",
    ],
    tools: ["Unity", "Figma", "Audition"],
    gallery: ["/1032569.png", "/1032569.png"].map((imageUrl, idx) => ({
      imageUrl,
      caption: `Letter flow ${idx + 1}`,
    })),
  },
];

const posts = [
  {
    slug: "designing-for-curious-minds",
    title: "Designing for Curious Minds",
    excerpt:
      "Playtesting rituals we use to keep kid-facing products joyful and data-informed.",
    content:
      "We run mini lab sessions every Thursday... (extend with markdown-ready copy).",
    author: "Stacey Salami",
    category: "Playtesting",
    coverImage: "/1032569.png",
  },
  {
    slug: "motion-for-learning",
    title: "Motion Systems for Learning Apps",
    excerpt:
      "How micro-interactions reinforce positive behaviour without overwhelming kids.",
    content: "From easing curves to haptic cues...",
    author: "Abdussamad Abdussalam",
    category: "UI/UX",
    coverImage: "/1032569.png",
  },
];

const testimonials = [
  {
    quote:
      "The team translated our research into a playful interface quickly and thoughtfully.",
    author: "Sarah Malik",
    role: "Product Lead",
    company: "BrightPath",
    avatarUrl: "/1032569.png",
    rating: 5,
  },
  {
    quote:
      "Every milestone felt collaborative—they brought wild ideas and delivered on time.",
    author: "Daniel Okoye",
    role: "Founder",
    company: "HoloLearn",
    avatarUrl: "/1032569.png",
    rating: 5,
  },
];

const experiments = [
  {
    slug: "rhythm-maker",
    name: "Rhythm Maker",
    description: "A tappable beat toy that teaches fractions through sound.",
    impact: "Used by 120+ classrooms",
    image: "/1032569.png",
  },
  {
    slug: "story-shuffler",
    name: "Story Shuffler",
    description: "AI-assisted story prompts that adapt to a child’s mood.",
    impact: "10k prompts generated",
    image: "/1032569.png",
  },
  {
    slug: "calm-quests",
    name: "Calm Quests",
    description: "Breathing adventures that reward mindful moments.",
    impact: "Avg 3 sessions/day per user",
    image: "/1032569.png",
  },
];

async function main() {
  await prisma.projectGallery.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();
  await prisma.post.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.experiment.deleteMany();

  for (const project of projects) {
    await prisma.project.create({
      data: {
        slug: project.slug,
        title: project.title,
        category: project.category,
        summary: project.summary,
        challenge: project.challenge,
        solution: project.solution,
        impact: project.impact,
        coverImage: project.coverImage,
        deliverables: project.deliverables,
        tools: project.tools,
        gallery: {
          create: project.gallery,
        },
      },
    });
  }

  for (const service of services) {
    await prisma.service.create({ data: service });
  }

  for (const post of posts) {
    await prisma.post.create({ data: post });
  }

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial });
  }

  for (const experiment of experiments) {
    await prisma.experiment.create({ data: experiment });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


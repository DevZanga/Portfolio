export const designFocus = [
  { value: "4+", label: "Years designing", sub: "Products people use" },
  { value: "7+", label: "Figma strengths", sub: "UI · Systems · Handoff" },
  { value: "100%", label: "People-first", sub: "Every screen, every review" },
  { value: "UK", label: "Based in Sheffield", sub: "Open to remote work" },
];

export const services = [
  {
    title: "UI/UX Design",
    description:
      "Interfaces shaped around real people, from first wireframe to polished screens your team can build with confidence.",
    variant: "ui" as const,
    highlights: ["User flows", "Hi-fi UI", "Prototypes"],
  },
  {
    title: "Design Critique & Review",
    description:
      "Honest, structured feedback on layouts and visuals: what helps users, what confuses them, and how to improve the experience.",
    variant: "care" as const,
    highlights: ["Clarity", "Empathy", "Polish"],
  },
  {
    title: "Design Systems & Handoff",
    description:
      "Shared components and clear specs so design and engineering stay aligned, and users get a consistent experience.",
    variant: "systems" as const,
    highlights: ["Tokens", "Components", "Handoff"],
  },
];

export const whyHireMe = {
  title: "Why work with me?",
  description:
    "I bring warmth and precision to every project. Whether I'm designing in Figma, reviewing visuals, or helping ship a product, I keep real people at the centre and communicate in plain, honest language.",
  stats: [
    { value: "4+", label: "Years in design & product" },
    { value: "7", label: "Core design practices" },
    { value: "100%", label: "Human-centred approach" },
  ],
};

export const testimonials = [
  {
    initials: "TM",
    name: "Team Lead",
    role: "Product collaboration",
    rating: "5.0",
    quote:
      "Thoughtful, calm, and sharp on detail. Feedback always feels constructive, never harsh, always useful.",
  },
  {
    initials: "PD",
    name: "Product Designer",
    role: "Cross-functional partner",
    rating: "5.0",
    quote:
      "Genuinely cares how things feel for users. Easy to work with and brings clarity when projects get messy.",
  },
];

export const designProcess = [
  {
    step: "01",
    title: "Listen",
    description:
      "Understand who will use the product, what they need, and what success looks like for them.",
  },
  {
    step: "02",
    title: "Sketch",
    description:
      "Map flows and layouts early so everyone shares the same picture before high-fidelity work.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Craft interfaces in Figma with care, spacing, type, and states that feel natural to use.",
  },
  {
    step: "04",
    title: "Ship together",
    description:
      "Hand off with clarity and stay close to engineering until the live product matches the intent.",
  },
];

export const selectedWork = [
  {
    title: "Human-Centred Visual Review",
    category: "UX & Quality · Outlier",
    description:
      "Helped teams improve how digital products look and feel, clear feedback on layout, hierarchy, and everyday usability.",
    tags: ["User empathy", "Visual craft", "Clear feedback"],
    accent: "bg-gradient-to-br from-amber-900/25 to-violet-900/35",
    featured: true,
  },
  {
    title: "Enterprise Product UI",
    category: "Full-Stack · Nabtech",
    description:
      "Built enterprise experiences where usability and polish mattered as much as functionality.",
    tags: ["Figma handoff", "Design systems", "React"],
    accent: "bg-gradient-to-br from-rose-900/20 to-violet-900/35",
    featured: false,
  },
  {
    title: "Design-to-Code Partnership",
    category: "Product · Emjay Solutions",
    description:
      "Worked alongside UX to ship accessible, consistent interfaces people could actually enjoy using.",
    tags: ["Accessibility", "Consistency", "Next.js"],
    accent: "bg-gradient-to-br from-indigo-900/25 to-slate-900/40",
    featured: false,
  },
];

export const tools = [
  "Figma",
  "FigJam",
  "User research",
  "Prototyping",
  "Design systems",
  "Wireframing",
  "React",
  "Accessibility",
  "Collaboration",
  "Clear handoff",
];

export const designFocus = [
  { value: "4+", label: "Years experience", sub: "Design & engineering" },
  { value: "7+", label: "Figma disciplines", sub: "UI · Systems · Handoff" },
  { value: "1000s", label: "Visual evaluations", sub: "AI & media QA" },
  { value: "Remote", label: "Global collaboration", sub: "Async · UK-based" },
];

export const services = [
  {
    title: "UI/UX Design",
    description:
      "End-to-end interface design in Figma — from wireframes and user flows to polished, high-fidelity screens your team can ship.",
    variant: "ui" as const,
    highlights: ["User flows", "Hi-fi UI", "Prototypes"],
  },
  {
    title: "AI Evaluation & QA",
    description:
      "Structured visual critique of AI-generated UI, media, and layouts — rating hierarchy, polish, and coherence at scale.",
    variant: "ai" as const,
    highlights: ["Visual QA", "Critique", "At scale"],
  },
  {
    title: "Design Systems & Handoff",
    description:
      "Component libraries, tokens, and annotated specs so engineering receives everything needed to build pixel-perfect UI.",
    variant: "systems" as const,
    highlights: ["Tokens", "Components", "Dev handoff"],
  },
];

export const whyHireMe = {
  title: "Why hire me?",
  description:
    "I combine visual craft, design systems thinking, and hands-on engineering. From evaluating AI outputs at Outlier to shipping enterprise UI at Nabtech — I care how products look, feel, and perform for real users.",
  stats: [
    { value: "4+", label: "Years in product & UI" },
    { value: "7", label: "Core Figma practices" },
    { value: "1000s", label: "Visual QA tasks delivered" },
  ],
};

export const testimonials = [
  {
    initials: "NT",
    name: "Design Lead",
    role: "Enterprise product team",
    rating: "5.0",
    quote:
      "Brings rare attention to spacing, hierarchy, and polish — feedback is always clear, constructive, and actionable.",
  },
  {
    initials: "UX",
    name: "UX Collaborator",
    role: "Cross-functional squad",
    rating: "5.0",
    quote:
      "Translates Figma intent into shipped UI without losing the original vision. Strong partner from critique to handoff.",
  },
];

export const designProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "Map user goals, constraints, and existing patterns before touching pixels.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "Wireframes and flows that align stakeholders early — fewer surprises later.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "High-fidelity UI in Figma with tokens, components, and interaction states.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Annotated handoff and engineering partnership until the shipped UI matches intent.",
  },
];

export const selectedWork = [
  {
    title: "AI Visual Quality Systems",
    category: "UX Evaluation · Outlier",
    description:
      "Rated and critiqued AI-generated UI screenshots and media at scale — layout, hierarchy, polish, and coherence.",
    tags: ["Visual QA", "Design Critique", "Structured Feedback"],
    accent: "bg-gradient-to-br from-violet-600/30 to-indigo-900/40",
    featured: true,
  },
  {
    title: "Enterprise Product UI",
    category: "Full-Stack · Nabtech",
    description:
      "Translated Figma specs into enterprise web apps where feel and function both matter — design reviews to production.",
    tags: ["Figma Handoff", "Design Systems", "React"],
    accent: "bg-gradient-to-br from-fuchsia-600/25 to-violet-900/40",
    featured: false,
  },
  {
    title: "Design-to-Code Pipeline",
    category: "Product · Emjay Solutions",
    description:
      "Partnered with UX to ship accessible interfaces from wireframes — consistent components across Next.js products.",
    tags: ["Prototyping", "Accessibility", "Next.js"],
    accent: "bg-gradient-to-br from-indigo-500/30 to-slate-900/50",
    featured: false,
  },
];

export const tools = [
  "Figma",
  "FigJam",
  "Design Systems",
  "Prototyping",
  "Wireframing",
  "React",
  "Next.js",
  "Tailwind",
  "User Flows",
  "Developer Handoff",
  "UI/UX Design",
  "Visual QA",
];

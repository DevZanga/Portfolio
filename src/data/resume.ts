import type { Resume } from "@/types/resume";

export const resume: Resume = {
  personal: {
    name: "Adebayo Ibrahim",
    headline:
      "Product Design & UX | AI Data Annotation | Figma Specialist",
    location: "Sheffield, United Kingdom",
    email: "adebayoibrahim808@gmail.com",
    phone: "07478616720",
    linkedin: "https://linkedin.com/in/adebayo-ibrahim-6b1106385",
    github: "https://github.com/DevZanga",
  },
  about:
    "I'm a designer and technologist who genuinely cares about how things look and feel. My background spans UI/UX design in Figma, AI data annotation, and full-stack engineering, which means I bring both a visual sensibility and a technical understanding to every project I work on. I have hands-on experience evaluating the aesthetic and functional quality of digital content, from rating AI-generated outputs at Outlier to annotating images and videos at Braintrust. I enjoy dissecting what makes a design work the balance of spacing, the weight of type, the logic of a layout and I communicate that thinking clearly and precisely.",
  experience: [
    {
      title: "AI Generalist & Aether Generalist",
      company: "Outlier",
      type: "Contract",
      bullets: [
        "Complete image, video, and audio micro-tasks designed to improve the performance of AI models essentially acting as a quality filter for machine generated content.",
        "Rate and rank visual outputs, including UI screenshots, design compositions, and media assets, assessing them on layout, coherence, visual hierarchy, and overall polish.",
        "Write structured qualitative feedback explaining why something scores as it does a skill that translates directly into design critique and UX evaluation.",
        "Operate independently in a fully remote, asynchronous environment, meeting high-quality standards consistently across large volumes of tasks.",
      ],
    },
    {
      title: "Data Annotator",
      company: "Braintrust",
      type: "Contract",
      bullets: [
        "Annotated and categorized images and videos to build reliable training datasets for machine learning models, with a focus on visual content.",
        "Applied a careful eye for composition, colour, subject matter, and design attributes to classify content with precision and consistency.",
        "Maintained annotation quality across long running projects, adapting quickly whenever guidelines were updated or refined by project leads.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Nabtech Limited",
      type: null,
      bullets: [
        "Lead the development of enterprise grade web applications, with particular attention to how the product feels to use, not just how it functions under the hood.",
        "Work closely with design teams, consuming Figma specs, CSS annotations, and component documentation to implement interfaces that stay true to the original vision.",
        "Build and maintain RESTful and GraphQL APIs using Node.js, and contribute to AI-integrated product features across the stack.",
        "Contribute to sprint planning, design reviews, and continuous delivery, comfortable operating at both the design and engineering side of a project.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Emjay Solutions Limited",
      type: null,
      bullets: [
        "Built and shipped full-stack products using React, Next.js, and Node.js, with a consistent focus on UI consistency and user experience quality.",
        "Collaborated with UX designers to turn wireframes and prototypes into accessible, polished interfaces that matched the intended design system.",
        "Improved database performance across PostgreSQL, MySQL, and MongoDB, and championed better QA practices within the team.",
      ],
    },
  ],
  figmaSkills: [
    {
      name: "UI/UX Design",
      description:
        "I design app, website, and software interfaces from scratch, thinking through visual hierarchy, spacing, and usability at every stage.",
    },
    {
      name: "Prototyping",
      description:
        "I build clickable, interactive mockups that simulate how a product actually behaves, useful for testing flows before a single line of code is written.",
    },
    {
      name: "Design Systems",
      description:
        "I maintain libraries of reusable components, colour tokens, and shared styles that keep products visually consistent at scale.",
    },
    {
      name: "Wireframing",
      description:
        "I sketch user flows and layouts early, which saves time and aligns teams before committing to high-fidelity designs.",
    },
    {
      name: "Collaboration",
      description:
        "I use Figma as a shared workspace, leaving comments, reviewing other people's work, and iterating in real time alongside teammates.",
    },
    {
      name: "Developer Handoff",
      description:
        "I prepare annotated specs with measurements, CSS snippets, and exportable assets so engineers have everything they need without guessing.",
    },
    {
      name: "FigJam & Whiteboarding",
      description:
        "I run brainstorming sessions and journey mapping workshops using FigJam, helping teams think visually and align early.",
    },
  ],
  technicalSkills: {
    Design: ["Figma", "FigJam", "Prototyping", "Design Systems", "Wireframing"],
    Frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "TailwindCSS",
    ],
    Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
    Languages: ["Python", "JavaScript", "TypeScript", "Java"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS", "Docker", "Netlify", "Vercel", "CI/CD"],
    Testing: ["Jest", "Mocha", "Cypress", "Pytest"],
    Other: ["Git", "GitHub", "Jira"],
  },
  certifications: [
    "AI & LLM Evaluation Practice — Outlier / Freelance",
    "Agile Software Development & QA Practices",
  ],
  workingStyle:
    "I pay close attention to detail without getting precious about it, I can give and receive design feedback constructively. I'm organized, self-directed, and comfortable working across time zones or asynchronously. I take quality seriously, but I also know when something is good enough to ship.",
};

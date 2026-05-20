import type { Resume } from "@/types/resume";

export const resume: Resume = {
  personal: {
    name: "Adebayo Ibrahim",
    headline: "Product Design & UX | Figma Specialist | Design Systems",
    location: "Sheffield, United Kingdom",
    email: "adebayoibrahim808@gmail.com",
    phone: "07478616720",
    linkedin: "https://linkedin.com/in/adebayo-ibrahim-6b1106385",
    github: "https://github.com/DevZanga",
  },
  about:
    "I'm a designer who cares about how people actually experience digital products, not just how they look in a mockup. My work spans UI/UX in Figma, thoughtful visual review, and hands-on engineering, so I understand both the craft of design and what it takes to ship it. I listen carefully, explain my thinking clearly, and treat every screen as something a real person will use.",
  experience: [
    {
      title: "Visual Quality & UX Specialist",
      company: "Outlier",
      type: "Contract",
      bullets: [
        "Reviewed images, video, and interface layouts with a focus on clarity, hierarchy, and how they would feel to a real user.",
        "Gave structured, honest feedback on visual work: what works, what confuses, and what could feel more polished.",
        "Worked independently across remote teams, keeping quality consistent even on high-volume projects.",
        "Bridged design critique and practical UX thinking in every review.",
      ],
    },
    {
      title: "Visual Content Specialist",
      company: "Braintrust",
      type: "Contract",
      bullets: [
        "Organised and assessed visual content with attention to composition, colour, and how information comes across to people.",
        "Stayed consistent and reliable across long projects, adapting when guidelines changed.",
        "Collaborated calmly with project leads and teammates in a fully remote setup.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Nabtech Limited",
      type: null,
      bullets: [
        "Led development of enterprise web apps with a strong focus on how the product feels in everyday use.",
        "Worked closely with designers, turning Figma specs into interfaces that stayed true to the original intent.",
        "Built and maintained APIs with Node.js while keeping the user experience at the centre of decisions.",
        "Joined design reviews and sprint planning, comfortable on both design and engineering sides.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Emjay Solutions Limited",
      type: null,
      bullets: [
        "Shipped full-stack products with React and Next.js, prioritising consistency and ease of use.",
        "Partnered with UX designers to turn wireframes into accessible, polished interfaces.",
        "Improved performance and quality practices so the team could deliver with confidence.",
      ],
    },
  ],
  figmaSkills: [
    {
      name: "UI/UX Design",
      description:
        "I design interfaces from scratch with real people in mind, hierarchy, spacing, and flows that feel natural.",
    },
    {
      name: "Prototyping",
      description:
        "I build clickable mockups so teams can feel the product before development starts.",
    },
    {
      name: "Design Systems",
      description:
        "I create shared components and tokens so products stay consistent and easier for everyone to use.",
    },
    {
      name: "Wireframing",
      description:
        "I sketch flows early so teams align on the human journey before polishing pixels.",
    },
    {
      name: "Collaboration",
      description:
        "I work openly in Figma, comments, reviews, and honest conversation with teammates.",
    },
    {
      name: "Developer Handoff",
      description:
        "I prepare clear specs so engineers can build what people actually need, without guesswork.",
    },
    {
      name: "FigJam & Whiteboarding",
      description:
        "I facilitate workshops that help teams think together and agree on direction early.",
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
    "Visual Quality & UX Practice (Outlier / Freelance)",
    "Agile Software Development & QA Practices",
  ],
  workingStyle:
    "I'm easy to work with, I listen, give honest feedback kindly, and respect people's time. I'm organised, self-directed, and happy working async across time zones. I care about quality, but I also know when something is ready for real users.",
};

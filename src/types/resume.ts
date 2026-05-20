export interface Personal {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  type: string | null;
  bullets: string[];
}

export interface FigmaSkill {
  name: string;
  description: string;
}

export interface Resume {
  personal: Personal;
  about: string;
  experience: Experience[];
  figmaSkills: FigmaSkill[];
  technicalSkills: Record<string, string[]>;
  certifications: string[];
  workingStyle: string;
}

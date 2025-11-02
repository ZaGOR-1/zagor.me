export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    university: string;
    description: string;
    cta: {
      projects: string;
      contact: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    philosophy: string;
    funFact: string;
    achievements: {
      title: string;
      items: string[];
    };
    interests: {
      title: string;
      items: string[];
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      languages: string;
      tools: string;
    };
  };
  education: {
    title: string;
    subtitle: string;
    current: {
      degree: string;
      institution: string;
      speciality: string;
      year: string;
      description: string;
      courses: string[];
    };
    certificates?: {
      title: string;
      items: Array<{
        name: string;
        issuer: string;
        description: string;
      }>;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewDemo: string;
    items: Array<{
      title: string;
      description: string;
      technologies: string[];
      github?: string;
      demo?: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
    };
    info: {
      email: string;
      location: string;
      locationValue: string;
    };
  };
  footer: {
    description: string;
    rights: string;
    social: string;
  };
  theme: {
    light: string;
    dark: string;
    toggle: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  languages: Skill[];
  tools: Skill[];
}

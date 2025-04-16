import { resumeConfig } from './config';

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}

export interface SocialLinks {
  github?: string;
  email?: string;
}

export interface Project {
  title: string;
  description: string;
  links: string[];
  images: string[];
  language: string[];
}

export interface Team {
  name: string;
  role: string;
  contributions: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: 1 | 0;
}

export interface ResumeData {
  personal_info: PersonalInfo;
  social_links: SocialLinks;
  projects: {
    items: Project[];
  };
  teams?: {
    items: Team[];
  };
  skills?: {
    items: Skill[];
  };
}

export async function loadResumeData(): Promise<ResumeData> {
  return resumeConfig;
}
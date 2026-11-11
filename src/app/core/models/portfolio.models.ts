import type { Language } from '../i18n/translations';

export type AccentColor = 'violet' | 'pink' | 'lime' | 'sky';

export interface Profile {
  name: string;
  /** Name used for compact branding (logo, badge, signature). */
  shortName: string;
  role: string;
  languages: string[];
  available: boolean;
  email: string;
  linkedinUrl: string;
  /** CV PDF path per language (raw paths: they are URL-encoded where used). */
  cv: Record<Language, string>;
}

export interface StoryChapter {
  id: string;
  index: string;
  kicker: string;
  title: string;
  body: string;
  highlights: string[];
  accent: AccentColor;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  /** Homepage capture of the live site (top 1800px of a 1440px viewport, scaled to 1000px). */
  image: string;
  /** Dominant colours sampled from the live site's computed styles. */
  palette: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export type ExperienceKind = 'work' | 'education';

export interface Experience {
  id: string;
  kind: ExperienceKind;
  organization: string;
  role: string;
  period?: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export type SkillGroupId = 'frontend' | 'design' | 'backend' | 'ai-devops';

export interface SkillGroup {
  id: SkillGroupId;
  label: string;
  skills: string[];
}

export interface Outfit {
  id: string;
  index: string;
  name: string;
  status: string;
  image: string;
  accent: AccentColor;
}

export interface InterviewEntry {
  id: string;
  topic: string;
  question: string;
  answer: string;
  accent: AccentColor;
}

export interface Obsession {
  emoji: string;
  label: string;
}

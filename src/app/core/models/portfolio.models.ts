export type AccentColor = 'violet' | 'pink' | 'lime' | 'sky';

export interface Profile {
  name: string;
  /** Name used for compact branding (logo, badge, signature). */
  shortName: string;
  role: string;
  age: number;
  languages: string[];
  available: boolean;
  email: string;
  linkedinUrl: string;
  cvUrl: string;
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

export type ProjectCategory = 'web-app' | 'editorial' | 'landing' | 'interactive' | 'dashboard';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categories: ProjectCategory[];
  tags: string[];
  accent: AccentColor;
  /** Short glyph used in the generated cover art. */
  glyph: string;
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
  icon: string;
  accent: AccentColor;
  skills: string[];
}

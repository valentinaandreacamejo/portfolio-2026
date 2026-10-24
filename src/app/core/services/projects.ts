import { Service, computed, inject } from '@angular/core';
import { Project, ProjectCategory } from '../models/portfolio.models';
import { TranslationKey, TranslationService } from './translation.service';

export const CATEGORY_KEYS: Record<ProjectCategory, TranslationKey> = {
  'web-app': 'category.web-app',
  editorial: 'category.editorial',
  landing: 'category.landing',
  interactive: 'category.interactive',
  dashboard: 'category.dashboard',
};

@Service()
export class Projects {
  private readonly i18n = inject(TranslationService);

  readonly all = computed<Project[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      {
        id: 'office-99',
        title: 'OFFICE 99',
        subtitle: t('project.office-99.subtitle'),
        description: t('project.office-99.description'),
        categories: ['editorial', 'web-app'],
        tags: ['Angular', 'Editorial', 'Retro UI'],
        accent: 'violet',
        glyph: '99',
        liveUrl: 'https://office-99.vercel.app/',
      },
      {
        id: 'funky-vino',
        title: 'THE FUNKY VINO',
        subtitle: t('project.funky-vino.subtitle'),
        description: t('project.funky-vino.description'),
        categories: ['landing'],
        tags: ['Landing Page', 'Hospitality', 'Branding'],
        accent: 'pink',
        glyph: '🍷',
        liveUrl: 'https://the-funky-vino.vercel.app/',
      },
      {
        id: 'dreamy-chaos',
        title: 'DREAMY CHAOS FESTIVAL',
        subtitle: t('project.dreamy-chaos.subtitle'),
        description: t('project.dreamy-chaos.description'),
        categories: ['interactive', 'landing'],
        tags: ['Interactive', 'Y2K', 'Motion'],
        accent: 'lime',
        glyph: '✺',
        liveUrl: 'https://dreamy-chaos.vercel.app/',
      },
      {
        id: 'dang-studio',
        title: 'DANG! STUDIO',
        subtitle: t('project.dang-studio.subtitle'),
        description: t('project.dang-studio.description'),
        categories: ['landing'],
        tags: ['Agency', 'Gen Z', 'Brutalism'],
        accent: 'sky',
        glyph: '!',
        liveUrl: 'https://dang-studio.vercel.app/',
      },
      {
        id: 'nexus-operations',
        title: 'NEXUS_OPERATIONS',
        subtitle: t('project.nexus-operations.subtitle'),
        description: t('project.nexus-operations.description'),
        categories: ['dashboard', 'web-app'],
        tags: ['SaaS', 'Dashboard', 'KPI'],
        accent: 'violet',
        glyph: '▦',
        liveUrl: 'https://nexus-operations-sooty.vercel.app',
      },
    ];
  });

  readonly categories = computed<ProjectCategory[]>(() => [
    ...new Set(this.all().flatMap((p) => p.categories)),
  ]);

  byCategory(category: ProjectCategory | null): Project[] {
    return category ? this.all().filter((p) => p.categories.includes(category)) : this.all();
  }
}

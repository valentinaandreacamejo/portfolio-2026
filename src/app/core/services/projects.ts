import { Service, computed, inject } from '@angular/core';
import { Project } from '../models/portfolio.models';
import { TranslationService } from './translation.service';

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
        tags: ['Angular', 'Editorial', 'Retro UI'],
        image: 'assets/projects/office-99.webp',
        palette: ['#51000e', '#bde0ff', '#f4f6f9', '#111111'],
        liveUrl: 'https://office-99.vercel.app/',
      },
      {
        id: 'funky-vino',
        title: 'THE FUNKY VINO',
        subtitle: t('project.funky-vino.subtitle'),
        description: t('project.funky-vino.description'),
        tags: ['Landing Page', 'Hospitality', 'Branding'],
        image: 'assets/projects/funky-vino.webp',
        palette: ['#8b1e1e', '#e8a598', '#f5efe6', '#2b1b17'],
        liveUrl: 'https://the-funky-vino.vercel.app/',
      },
      {
        id: 'dreamy-chaos',
        title: 'DREAMY CHAOS FESTIVAL',
        subtitle: t('project.dreamy-chaos.subtitle'),
        description: t('project.dreamy-chaos.description'),
        tags: ['Interactive', 'Y2K', 'Motion'],
        image: 'assets/projects/dreamy-chaos.webp',
        palette: ['#e8ff00', '#ff007a', '#7000ff', '#0e0e12'],
        liveUrl: 'https://dreamy-chaos.vercel.app/',
      },
      {
        id: 'dang-studio',
        title: 'DANG! STUDIO',
        subtitle: t('project.dang-studio.subtitle'),
        description: t('project.dang-studio.description'),
        tags: ['Agency', 'Gen Z', 'Brutalism'],
        image: 'assets/projects/dang-studio.webp',
        palette: ['#ff5500', '#7d8d34', '#2aa8e0', '#f5f2eb'],
        liveUrl: 'https://dang-studio.vercel.app/',
      },
      {
        id: 'nexus-operations',
        title: 'NEXUS_OPERATIONS',
        subtitle: t('project.nexus-operations.subtitle'),
        description: t('project.nexus-operations.description'),
        tags: ['SaaS', 'Dashboard', 'KPI'],
        image: 'assets/projects/nexus-operations.webp',
        palette: ['#d1f366', '#7c3aed', '#10b981', '#16191f'],
        liveUrl: 'https://nexus-operations-sooty.vercel.app',
      },
    ];
  });
}

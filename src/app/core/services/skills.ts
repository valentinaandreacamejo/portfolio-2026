import { Service, computed, inject } from '@angular/core';
import { SkillGroup } from '../models/portfolio.models';
import { TranslationService } from './translation.service';

@Service()
export class Skills {
  private readonly i18n = inject(TranslationService);

  readonly groups = computed<SkillGroup[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      {
        id: 'frontend',
        label: t('skills.group.frontend'),
        icon: '</>',
        accent: 'pink',
        skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Bootstrap'],
      },
      {
        id: 'design',
        label: t('skills.group.design'),
        icon: '◐',
        accent: 'violet',
        skills: ['Figma', t('skill.colorTheory'), t('skill.trendAnalysis'), 'Wireframing'],
      },
      {
        id: 'backend',
        label: t('skills.group.backend'),
        icon: '{ }',
        accent: 'sky',
        skills: ['Java', 'SQL'],
      },
      {
        id: 'ai-devops',
        label: t('skills.group.ai-devops'),
        icon: '✦',
        accent: 'lime',
        skills: ['Claude Code', 'Gemini', 'Docker', 'AWS'],
      },
    ];
  });
}

import { Service, computed, inject, signal } from '@angular/core';
import { Experience, Profile as ProfileData, StoryChapter } from '../models/portfolio.models';
import { TranslationService } from './translation.service';

@Service()
export class Profile {
  // TODO: fill in the LinkedIn URL.
  readonly data = signal<ProfileData>({
    name: 'Valentina Andrea Camejo',
    shortName: 'Valentina Camejo',
    role: 'Front-end Developer & UX Engineer',
    age: 26,
    languages: ['Italiano', 'Español', 'English'],
    available: true,
    email: 'valentina_camejo@outlook.com',
    linkedinUrl: 'https://www.linkedin.com/in/valentina-andrea-camejo-4aa95a164/',
    cv: {
      it: 'assets/CV design per Valentina Camejo IT.pdf',
      es: 'assets/CV design per Valentina Camejo ES.pdf',
      en: 'assets/CV design per Valentina Camejo.pdf',
    },
  });

  private readonly i18n = inject(TranslationService);

  readonly story = computed<StoryChapter[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      {
        id: 'origins',
        index: '01',
        kicker: t('story.origins.kicker'),
        title: t('story.origins.title'),
        body: t('story.origins.body'),
        highlights: ['Venezuela', t('story.origins.italy'), t('story.origins.dublin'), 'IT · ES · EN'],
        accent: 'lime',
      },
      {
        id: 'design-eye',
        index: '02',
        kicker: t('story.design.kicker'),
        title: t('story.design.title'),
        body: t('story.design.body'),
        highlights: [
          t('story.design.bologna'),
          'Condé Nast College Madrid',
          t('skill.colorTheory'),
          t('skill.trendAnalysis'),
        ],
        accent: 'pink',
      },
      {
        id: 'engineering',
        index: '03',
        kicker: t('story.engineering.kicker'),
        title: t('story.engineering.title'),
        body: t('story.engineering.body'),
        highlights: ['IFTS · Cisita Parma', 'KEDOS srl', 'Angular', 'Java · SQL · AWS · Docker'],
        accent: 'sky',
      },
      {
        id: 'ai-workflow',
        index: '04',
        kicker: t('story.ai.kicker'),
        title: t('story.ai.title'),
        body: t('story.ai.body'),
        highlights: ['Claude Code', 'Gemini', t('story.ai.assisted')],
        accent: 'violet',
      },
    ];
  });

  readonly experience = computed<Experience[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      {
        id: 'kedos-frontend',
        kind: 'work',
        organization: 'KEDOS srl',
        role: t('exp.kedos-frontend.role'),
        period: `2023 — ${t('timeline.present')}`,
        description: t('exp.kedos-frontend.description'),
        tags: ['Angular', 'Figma', 'ERP', 'AWS', 'Docker'],
        current: true,
      },
      {
        id: 'kedos-junior',
        kind: 'work',
        organization: 'KEDOS srl',
        role: t('exp.kedos-junior.role'),
        period: '2022 — 2023',
        description: t('exp.kedos-junior.description'),
        tags: ['HTML', 'CSS', 'Angular'],
      },
      {
        id: 'e-project',
        kind: 'work',
        organization: 'e-Project srl',
        role: t('exp.e-project.role'),
        period: '2022',
        description: t('exp.e-project.description'),
        tags: ['ASP.NET', 'SQL', 'PayPal'],
      },
      {
        id: 'cisita',
        kind: 'education',
        organization: 'Cisita Parma',
        role: t('exp.cisita.role'),
        description: t('exp.cisita.description'),
        tags: ['Software Engineering'],
      },
      {
        id: 'next-fashion',
        kind: 'education',
        organization: 'Next Fashion School',
        role: t('exp.next-fashion.role'),
        description: t('exp.next-fashion.description'),
        tags: ['Fashion Design'],
      },
      {
        id: 'conde-nast',
        kind: 'education',
        organization: 'Condé Nast College Madrid',
        role: t('exp.conde-nast.role'),
        description: t('exp.conde-nast.description'),
        tags: ['Fashion', t('skill.trendAnalysis')],
      },
      {
        id: 'seda',
        kind: 'education',
        organization: 'SEDA College Dublin',
        role: t('exp.seda.role'),
        description: t('exp.seda.description'),
        tags: ['English'],
      },
      {
        id: 'pio-xii',
        kind: 'education',
        organization: 'Liceo Scientifico Pio XII',
        role: t('exp.pio-xii.role'),
        description: t('exp.pio-xii.description'),
        tags: ['Science'],
      },
    ];
  });
}

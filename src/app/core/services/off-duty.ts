import { Service, computed, inject } from '@angular/core';
import { InterviewEntry, Obsession, Outfit } from '../models/portfolio.models';
import { TranslationService } from './translation.service';

@Service()
export class OffDuty {
  private readonly i18n = inject(TranslationService);

  /** Outfit names and statuses are fashion copy: they stay in English in every language. */
  readonly outfits: readonly Outfit[] = [
    {
      id: 'bomber-denim',
      index: '01',
      name: 'Bomber & Denim',
      status: 'Coding Mode',
      image: 'assets/frontend-developer-avatar-fullbody.jpg',
      accent: 'lime',
    },
    {
      id: 'longsleeve-satin',
      index: '02',
      name: 'White Longsleeve & Satin Skirt',
      status: 'Event & Design Vibe',
      image: 'assets/frontend-developer-avatar-outfit2.jpg',
      accent: 'pink',
    },
    {
      id: 'blazer-sneakers',
      index: '03',
      name: 'Black Blazer & Sneakers',
      status: 'Client Pitch / Tech Mode',
      image: 'assets/frontend-developer-avatar-outfit3.jpg',
      accent: 'sky',
    },
    {
      id: 'yellow-cardigan',
      index: '04',
      name: 'Yellow Cardigan',
      status: 'Late Night Angular Coding',
      image: 'assets/frontend-developer-avatar-outfit6.jpg',
      accent: 'lime',
    },
    {
      id: 'trench-olive-bag',
      index: '05',
      name: 'Trench & Olive Bag',
      status: 'Coffee Run & Milan Vibe',
      image: 'assets/frontend-developer-avatar-outfit7-olive-bag.jpg',
      accent: 'violet',
    },
    {
      id: 'olive-polka',
      index: '06',
      name: 'Olive Sweater & Polka Dot Skirt',
      status: 'Creative Direction',
      image: 'assets/frontend-developer-avatar-outfit4.jpg',
      accent: 'pink',
    },
    {
      id: 'burgundy-bermudas',
      index: '07',
      name: 'Burgundy Blazer & Bermudas',
      status: 'Full-stack & Fashion Mindset',
      image: 'assets/frontend-developer-avatar-outfit5.jpg',
      accent: 'violet',
    },
  ];

  readonly interview = computed<InterviewEntry[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      {
        id: 'q1',
        topic: 'Tech & Design',
        question: t('interview.q1.question'),
        answer: t('interview.q1.answer'),
        accent: 'violet',
      },
      {
        id: 'q2',
        topic: 'Red Flag',
        question: t('interview.q2.question'),
        answer: t('interview.q2.answer'),
        accent: 'pink',
      },
      {
        id: 'q3',
        topic: 'Superpower',
        question: t('interview.q3.question'),
        answer: t('interview.q3.answer'),
        accent: 'lime',
      },
      {
        id: 'q4',
        topic: 'Vibe Check',
        question: t('interview.q4.question'),
        answer: t('interview.q4.answer'),
        accent: 'sky',
      },
      {
        id: 'q5',
        topic: 'Quick Fire',
        question: t('interview.q5.question'),
        answer: t('interview.q5.answer'),
        accent: 'violet',
      },
    ];
  });

  readonly obsessions = computed<Obsession[]>(() => {
    const t = this.i18n.t.bind(this.i18n);
    return [
      { emoji: '☕', label: t('obsession.coffee') },
      { emoji: '⚡', label: 'Angular Signals & Tailwind' },
      { emoji: '🐱', label: t('obsession.cats') },
      { emoji: '📚', label: t('obsession.vogue') },
    ];
  });
}

import { Component, computed, inject, signal } from '@angular/core';
import { ExperienceKind } from '../../../../core/models/portfolio.models';
import { Profile } from '../../../../core/services/profile';
import { TranslationKey, TranslationService } from '../../../../core/services/translation.service';
import { Reveal } from '../../../../shared/directives/reveal';

type TimelineFilter = ExperienceKind | 'all';

@Component({
  imports: [Reveal],
  selector: 'app-experience-timeline',
  styleUrl: './experience-timeline.scss',
  templateUrl: './experience-timeline.html',
})
export class ExperienceTimeline {
  private readonly experience = inject(Profile).experience;

  protected readonly i18n = inject(TranslationService);

  protected readonly filters: { id: TimelineFilter; label: TranslationKey }[] = [
    { id: 'all', label: 'timeline.filter.all' },
    { id: 'work', label: 'timeline.kind.work' },
    { id: 'education', label: 'timeline.kind.education' },
  ];
  protected readonly active = signal<TimelineFilter>('all');
  protected readonly items = computed(() => {
    const filter = this.active();
    return filter === 'all'
      ? this.experience()
      : this.experience().filter((item) => item.kind === filter);
  });
}

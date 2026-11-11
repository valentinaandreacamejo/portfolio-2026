import { Component, computed, inject } from '@angular/core';
import { Profile } from '../../../../core/services/profile';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-experience-timeline',
  styleUrl: './experience-timeline.scss',
  templateUrl: './experience-timeline.html',
})
export class ExperienceTimeline {
  private readonly experience = inject(Profile).experience;

  protected readonly i18n = inject(TranslationService);

  /** Work carries dates and detail; education is a compact, undated list. */
  protected readonly work = computed(() => this.experience().filter((item) => item.kind === 'work'));
  protected readonly education = computed(() =>
    this.experience().filter((item) => item.kind === 'education'),
  );
}

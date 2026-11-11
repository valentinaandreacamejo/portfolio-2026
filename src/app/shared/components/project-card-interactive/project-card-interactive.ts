import { Component, computed, inject, input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';
import { TranslationService } from '../../../core/services/translation.service';

/** One "look" of the projects lookbook: a live-site capture plus its credits. */
@Component({
  imports: [],
  selector: 'app-project-card-interactive',
  styleUrl: './project-card-interactive.scss',
  templateUrl: './project-card-interactive.html',
})
export class ProjectCardInteractive {
  readonly project = input.required<Project>();
  readonly index = input(0);
  readonly total = input(1);
  readonly featured = input(false);

  protected readonly i18n = inject(TranslationService);

  protected readonly number = computed(() => String(this.index() + 1).padStart(2, '0'));
  protected readonly totalLabel = computed(() => String(this.total()).padStart(2, '0'));
  /** Lets "NEXUS_OPERATIONS" wrap after the underscore instead of mid-word. */
  protected readonly displayTitle = computed(() => this.project().title.replaceAll('_', '_\u200B'));
}

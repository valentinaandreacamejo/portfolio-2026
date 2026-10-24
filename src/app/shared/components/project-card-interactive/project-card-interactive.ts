import { Component, computed, inject, input, signal } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';
import { CATEGORY_KEYS } from '../../../core/services/projects';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-project-card-interactive',
  styleUrl: './project-card-interactive.scss',
  templateUrl: './project-card-interactive.html',
})
export class ProjectCardInteractive {
  readonly project = input.required<Project>();
  readonly index = input(0);

  protected readonly i18n = inject(TranslationService);

  protected readonly number = computed(() => String(this.index() + 1).padStart(2, '0'));
  protected readonly categoryLabels = computed(() =>
    this.project().categories.map((c) => this.i18n.t(CATEGORY_KEYS[c])),
  );

  /** Pointer position over the card, normalised to [0, 1]. */
  protected readonly pointer = signal({ x: 0.5, y: 0.5 });

  protected onPointerMove(event: PointerEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.pointer.set({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  }

  protected resetPointer(): void {
    this.pointer.set({ x: 0.5, y: 0.5 });
  }
}

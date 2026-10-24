import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCategory } from '../../../../core/models/portfolio.models';
import { CATEGORY_KEYS, Projects } from '../../../../core/services/projects';
import { TranslationService } from '../../../../core/services/translation.service';
import { ProjectCardInteractive } from '../../../../shared/components/project-card-interactive/project-card-interactive';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  imports: [ProjectCardInteractive, Reveal],
  selector: 'app-projects-directory',
  styleUrl: './projects-directory.scss',
  templateUrl: './projects-directory.html',
})
export class ProjectsDirectory {
  private readonly projects = inject(Projects);

  protected readonly i18n = inject(TranslationService);
  protected readonly categoryKeys = CATEGORY_KEYS;
  protected readonly categories = this.projects.categories;
  protected readonly total = computed(() => this.projects.all().length);
  protected readonly active = signal<ProjectCategory | null>(null);
  protected readonly visible = computed(() => this.projects.byCategory(this.active()));

  protected countFor(category: ProjectCategory): number {
    return this.projects.byCategory(category).length;
  }
}

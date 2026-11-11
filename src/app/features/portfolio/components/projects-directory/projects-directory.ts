import { Component, inject } from '@angular/core';
import { Projects } from '../../../../core/services/projects';
import { TranslationService } from '../../../../core/services/translation.service';
import { ProjectCardInteractive } from '../../../../shared/components/project-card-interactive/project-card-interactive';

@Component({
  imports: [ProjectCardInteractive],
  selector: 'app-projects-directory',
  styleUrl: './projects-directory.scss',
  templateUrl: './projects-directory.html',
})
export class ProjectsDirectory {
  protected readonly i18n = inject(TranslationService);
  protected readonly all = inject(Projects).all;
}

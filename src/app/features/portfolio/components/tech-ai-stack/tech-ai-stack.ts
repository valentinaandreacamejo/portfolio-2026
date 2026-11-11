import { Component, inject } from '@angular/core';
import { Skills } from '../../../../core/services/skills';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-tech-ai-stack',
  styleUrl: './tech-ai-stack.scss',
  templateUrl: './tech-ai-stack.html',
})
export class TechAiStack {
  protected readonly i18n = inject(TranslationService);
  protected readonly groups = inject(Skills).groups;
}

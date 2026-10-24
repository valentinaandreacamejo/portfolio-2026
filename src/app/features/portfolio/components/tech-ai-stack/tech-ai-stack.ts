import { Component, computed, inject, signal } from '@angular/core';
import { SkillGroupId } from '../../../../core/models/portfolio.models';
import { Skills } from '../../../../core/services/skills';
import { TranslationService } from '../../../../core/services/translation.service';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-tech-ai-stack',
  styleUrl: './tech-ai-stack.scss',
  templateUrl: './tech-ai-stack.html',
})
export class TechAiStack {
  protected readonly i18n = inject(TranslationService);
  protected readonly groups = inject(Skills).groups;
  protected readonly totalSkills = computed(() =>
    this.groups().reduce((sum, group) => sum + group.skills.length, 0),
  );

  /** Group currently spotlighted by hover/focus; the others are dimmed. */
  protected readonly focused = signal<SkillGroupId | null>(null);
}

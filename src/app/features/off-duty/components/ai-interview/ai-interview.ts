import { Component, inject } from '@angular/core';
import { OffDuty } from '../../../../core/services/off-duty';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-ai-interview',
  styleUrl: './ai-interview.scss',
  templateUrl: './ai-interview.html',
})
export class AiInterview {
  protected readonly i18n = inject(TranslationService);
  protected readonly entries = inject(OffDuty).interview;
}

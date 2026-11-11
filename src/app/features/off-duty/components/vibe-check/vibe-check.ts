import { Component, inject } from '@angular/core';
import { OffDuty } from '../../../../core/services/off-duty';
import { TranslationService } from '../../../../core/services/translation.service';
import { NowPlaying } from '../now-playing/now-playing';

@Component({
  imports: [NowPlaying],
  selector: 'app-vibe-check',
  styleUrl: './vibe-check.scss',
  templateUrl: './vibe-check.html',
})
export class VibeCheck {
  protected readonly i18n = inject(TranslationService);
  protected readonly obsessions = inject(OffDuty).obsessions;
}

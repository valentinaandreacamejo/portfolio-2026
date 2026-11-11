import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { Ticker } from '../../shared/components/ticker/ticker';
import { OutfitLookbook } from './components/outfit-lookbook/outfit-lookbook';

// AiInterview and VibeCheck are paused in the template: their imports go back here
// together with <app-ai-interview /> and <app-vibe-check />, so they stay out of the bundle.
@Component({
  imports: [RouterLink, Ticker, OutfitLookbook],
  selector: 'app-off-duty-page',
  styleUrl: './off-duty-page.scss',
  templateUrl: './off-duty-page.html',
})
export class OffDutyPage {
  protected readonly i18n = inject(TranslationService);
  /** Translated ticker row (the bottom row is proper nouns and loanwords). */
  protected readonly tickerTop = computed(() => [
    'Off-Duty',
    'Dual Soul Lab',
    this.i18n.t('ticker.dualSoul'),
    this.i18n.t('teaser.title').replace(/\.$/, ''),
  ]);
  protected readonly sections = [
    { anchor: 'lookbook', label: 'offDuty.jump.lookbook' },
    // { anchor: 'interview', label: 'offDuty.jump.interview' },
    // { anchor: 'vibe', label: 'offDuty.jump.vibe' },
  ] as const;
}

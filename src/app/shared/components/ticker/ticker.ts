import { Component, computed, inject, input } from '@angular/core';
import { Profile } from '../../../core/services/profile';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-ticker',
  styleUrl: './ticker.scss',
  templateUrl: './ticker.html',
})
export class Ticker {
  private readonly i18n = inject(TranslationService);
  private readonly profile = inject(Profile).data;

  /** Optional overrides; without them the rows show the translated defaults below. */
  readonly top = input<string[]>();
  readonly bottom = input<string[]>();

  protected readonly topItems = computed(
    () =>
      this.top() ?? [
        this.profile().name,
        this.i18n.t('ticker.dualSoul'),
        this.i18n.t('ticker.angular'),
        this.i18n.t('ticker.route'),
      ],
  );
  // proper nouns only: they read the same in every language
  protected readonly bottomItems = computed(
    () =>
      this.bottom() ?? [
        'Venezuela',
        'Bologna',
        'Madrid',
        'Dublin',
        'Parma',
        'KEDOS srl',
        'Claude Code',
        'Gemini',
      ],
  );

  /** Each row is rendered twice so the -50% translate loops seamlessly. */
  protected readonly copies = [0, 1];
}

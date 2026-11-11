import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Profile } from '../../../core/services/profile';
import { TranslationService } from '../../../core/services/translation.service';
import { LegalDialog } from '../legal-dialog/legal-dialog';

@Component({
  imports: [LegalDialog],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);
  protected readonly year = new Date().getFullYear();

  private readonly scroller = inject(ViewportScroller);

  /** Works on every route: a bare "#home" link would resolve against <base href> and leave /off-duty. */
  protected scrollToTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}

import { Component, ElementRef, computed, inject, viewChild } from '@angular/core';
import { AccentColor } from '../../../core/models/portfolio.models';
import { Profile } from '../../../core/services/profile';
import { Language, TranslationService } from '../../../core/services/translation.service';

const OPTIONS: { code: Language; name: string; accent: AccentColor }[] = [
  { code: 'it', name: 'Italiano', accent: 'lime' },
  { code: 'es', name: 'Español', accent: 'pink' },
  { code: 'en', name: 'English', accent: 'sky' },
];

/** Modal that lets the visitor pick which language of the CV to download. */
@Component({
  imports: [],
  selector: 'app-cv-dialog',
  styleUrl: './cv-dialog.scss',
  templateUrl: './cv-dialog.html',
})
export class CvDialog {
  protected readonly i18n = inject(TranslationService);
  private readonly profile = inject(Profile).data;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly options = computed(() =>
    OPTIONS.map((option) => ({
      ...option,
      // the PDFs have spaces in their names
      href: encodeURI(this.profile().cv[option.code]),
      fileName: `Valentina-Camejo-CV-${option.code.toUpperCase()}.pdf`,
      current: option.code === this.i18n.lang(),
    })),
  );

  open(): void {
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  /** A click that lands on the <dialog> itself (not the panel) is a click on the backdrop. */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}

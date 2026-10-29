import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TranslationKey, TranslationService } from '../../../core/services/translation.service';

const SECTIONS: { title: TranslationKey; body: TranslationKey }[] = [
  { title: 'legal.privacyTitle', body: 'legal.privacyBody' },
  { title: 'legal.cookieTitle', body: 'legal.cookieBody' },
  { title: 'legal.copyrightTitle', body: 'legal.copyrightBody' },
];

/** Modal with the privacy, cookie and copyright notes, opened from the footer. */
@Component({
  imports: [],
  selector: 'app-legal-dialog',
  styleUrl: './legal-dialog.scss',
  templateUrl: './legal-dialog.html',
})
export class LegalDialog {
  protected readonly i18n = inject(TranslationService);
  protected readonly sections = SECTIONS;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

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

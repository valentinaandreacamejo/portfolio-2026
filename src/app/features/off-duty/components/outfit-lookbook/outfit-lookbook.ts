import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { OffDuty } from '../../../../core/services/off-duty';
import { Profile } from '../../../../core/services/profile';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-outfit-lookbook',
  styleUrl: './outfit-lookbook.scss',
  templateUrl: './outfit-lookbook.html',
})
export class OutfitLookbook {
  protected readonly i18n = inject(TranslationService);
  protected readonly profile = inject(Profile).data;
  protected readonly outfits = inject(OffDuty).outfits;
  protected readonly total = String(this.outfits.length).padStart(2, '0');
  protected readonly activeIndex = signal(0);
  protected readonly active = computed(() => this.outfits[this.activeIndex()]);

  protected step(delta: number): void {
    const count = this.outfits.length;
    this.activeIndex.update((i) => (i + delta + count) % count);
  }
}

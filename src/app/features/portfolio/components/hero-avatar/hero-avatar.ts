import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../../../core/services/profile';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-hero-avatar',
  styleUrl: './hero-avatar.scss',
  templateUrl: './hero-avatar.html',
})
export class HeroAvatar {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);

  /** Pointer position over the showcase, normalised to [-1, 1]. */
  protected readonly tilt = signal({ x: 0, y: 0 });

  protected onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.tilt.set({
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((event.clientY - rect.top) / rect.height) * 2 - 1,
    });
  }

  protected resetTilt(): void {
    this.tilt.set({ x: 0, y: 0 });
  }
}

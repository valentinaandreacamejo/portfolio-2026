import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { Profile } from '../../../../core/services/profile';
import { TranslationService } from '../../../../core/services/translation.service';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);
  protected readonly copied = signal(false);
  // Split around "@" so the template can offer a clean line break there on narrow screens.
  protected readonly emailUser = computed(() => this.profile().email.split('@')[0]);
  protected readonly emailDomain = computed(() => this.profile().email.split('@')[1] ?? '');

  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile().email);
    } catch {
      // Clipboard unavailable (insecure context / denied): fall back to the mail client.
      window.location.href = `mailto:${this.profile().email}`;
      return;
    }
    this.copied.set(true);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
  }
}

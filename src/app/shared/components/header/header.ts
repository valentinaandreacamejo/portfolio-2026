import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../../core/services/profile';
import { TranslationKey, TranslationService } from '../../../core/services/translation.service';

interface NavLink {
  label: TranslationKey;
  anchor: string;
}

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'nav.about', anchor: 'about' },
    { label: 'nav.projects', anchor: 'projects' },
    { label: 'nav.timeline', anchor: 'timeline' },
    { label: 'nav.skills', anchor: 'skills' },
    { label: 'nav.contact', anchor: 'contact' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}

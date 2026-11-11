import { NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Profile } from '../../../core/services/profile';
import { TranslationKey, TranslationService } from '../../../core/services/translation.service';

interface NavLink {
  label: TranslationKey;
  anchor: string;
}

@Component({
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'menuOpen.set(false)',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class Header {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    // same order as the sections on the page
    { label: 'nav.projects', anchor: 'projects' },
    { label: 'nav.about', anchor: 'about' },
    { label: 'nav.timeline', anchor: 'timeline' },
    { label: 'nav.skills', anchor: 'skills' },
    { label: 'nav.contact', anchor: 'contact' },
  ];

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** A tap outside the header closes the mobile menu. */
  protected onDocumentClick(event: MouseEvent): void {
    if (this.menuOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.menuOpen.set(false);
    }
  }
}

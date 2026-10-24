import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Profile } from '../../../../core/services/profile';
import { TranslationService } from '../../../../core/services/translation.service';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  imports: [NgOptimizedImage, Reveal],
  selector: 'app-about-story',
  styleUrl: './about-story.scss',
  templateUrl: './about-story.html',
})
export class AboutStory {
  private readonly profile = inject(Profile);

  protected readonly i18n = inject(TranslationService);
  protected readonly data = this.profile.data;
  protected readonly chapters = this.profile.story;
}

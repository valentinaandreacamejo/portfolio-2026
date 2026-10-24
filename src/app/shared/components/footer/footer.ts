import { Component, inject } from '@angular/core';
import { Profile } from '../../../core/services/profile';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly profile = inject(Profile).data;
  protected readonly i18n = inject(TranslationService);
  protected readonly year = new Date().getFullYear();
}

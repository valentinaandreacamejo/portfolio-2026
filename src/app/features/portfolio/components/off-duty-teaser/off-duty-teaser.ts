import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OffDuty } from '../../../../core/services/off-duty';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  imports: [RouterLink],
  selector: 'app-off-duty-teaser',
  styleUrl: './off-duty-teaser.scss',
  templateUrl: './off-duty-teaser.html',
})
export class OffDutyTeaser {
  protected readonly i18n = inject(TranslationService);
  /** A fan of three looks as a preview of the lookbook (JPGs only: the landing stays light). */
  protected readonly previews = inject(OffDuty).outfits.filter((outfit) =>
    ['longsleeve-satin', 'olive-polka', 'burgundy-bermudas'].includes(outfit.id),
  );
}

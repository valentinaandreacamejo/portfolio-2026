import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ticker',
  styleUrl: './ticker.scss',
  templateUrl: './ticker.html',
})
export class Ticker {
  readonly top = input<string[]>([
    'Valentina Andrea Camejo',
    'Fashion meets Code',
    'Angular & AI-powered dev',
    'Venezuela Ireland Italy',
  ]);
  readonly bottom = input<string[]>([
    'Venezuela',
    'Italia',
    'Dublin',
    'Condé Nast Madrid',
    'KEDOS srl',
    'Claude Code',
    'Gemini',
  ]);

  /** Each row is rendered twice so the -50% translate loops seamlessly. */
  protected readonly copies = [0, 1];
}

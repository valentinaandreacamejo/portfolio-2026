import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { LOOP_SECONDS, LofiLoop } from './lofi-loop';

const BAR_COUNT = 14;
const IDLE_BARS: number[] = Array(BAR_COUNT).fill(0);

function clock(seconds: number): string {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

@Component({
  imports: [],
  selector: 'app-now-playing',
  styleUrl: './now-playing.scss',
  templateUrl: './now-playing.html',
})
export class NowPlaying {
  protected readonly i18n = inject(TranslationService);
  protected readonly supported = LofiLoop.supported;
  protected readonly playing = signal(false);
  protected readonly progress = signal(0);
  protected readonly bars = signal(IDLE_BARS);
  protected readonly elapsed = computed(() => clock(this.progress() * LOOP_SECONDS));
  protected readonly duration = clock(LOOP_SECONDS);

  private readonly loop = new LofiLoop();
  private frame = 0;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      cancelAnimationFrame(this.frame);
      this.loop.dispose();
    });
  }

  protected async toggle(): Promise<void> {
    if (this.playing()) {
      this.loop.pause();
      cancelAnimationFrame(this.frame);
      this.playing.set(false);
      this.bars.set(IDLE_BARS);
      return;
    }
    this.playing.set(true);
    await this.loop.play();
    this.tick();
  }

  private readonly tick = (): void => {
    this.progress.set(this.loop.progress());
    this.bars.set(this.loop.levels(BAR_COUNT));
    this.frame = requestAnimationFrame(this.tick);
  };
}

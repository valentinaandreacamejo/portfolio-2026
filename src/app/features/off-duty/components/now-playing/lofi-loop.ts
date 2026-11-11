// A tiny lo-fi beat synthesised with the Web Audio API: no audio file to ship or license.
// Four bars at 84 BPM (Fmaj7 – Em7 – Dm7 – Cmaj7), swung hats, boom-bap drums and vinyl crackle,
// all scheduled a little ahead of the audio clock so timers never cause audible gaps.

const BPM = 84;
const SIXTEENTH = 60 / BPM / 4;
const STEPS = 64;
const SWING = SIXTEENTH * 0.18;
const LOOKAHEAD = 0.15;
const TICK_MS = 25;

export const LOOP_SECONDS = SIXTEENTH * STEPS;

/** One chord per bar, as MIDI notes. */
const CHORDS = [
  [53, 57, 60, 64],
  [52, 55, 59, 62],
  [50, 53, 57, 60],
  [48, 52, 55, 59],
];
const BASS = [41, 40, 38, 36];
/** Sparse electric-piano melody: loop step → MIDI note, one line per bar. */
// prettier-ignore
const MELODY: Record<number, number> = {
  2: 72, 6: 76, 10: 74, 14: 69,
  18: 71, 22: 74, 27: 76,
  34: 72, 38: 69, 42: 72, 46: 77,
  50: 76, 54: 71, 58: 67,
};
const KICKS = new Set([0, 7, 10]);
const SNARES = new Set([4, 12]);

const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

export class LofiLoop {
  private ctx?: AudioContext;
  private bus!: AudioNode;
  private analyser!: AnalyserNode;
  private noise!: AudioBuffer;
  private levelData!: Uint8Array<ArrayBuffer>;
  private timer?: ReturnType<typeof setInterval>;
  private step = 0;
  private nextTime = 0;
  private startTime = 0;

  static get supported(): boolean {
    return typeof AudioContext !== 'undefined';
  }

  async play(): Promise<void> {
    const ctx = (this.ctx ??= this.build());
    await ctx.resume();
    this.timer ??= setInterval(() => this.schedule(), TICK_MS);
    this.schedule();
  }

  /** Suspending freezes the audio clock, so the loop resumes exactly where it stopped. */
  pause(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    void this.ctx?.suspend();
  }

  dispose(): void {
    this.pause();
    void this.ctx?.close();
    this.ctx = undefined;
  }

  /** Position inside the loop, 0–1. */
  progress(): number {
    if (!this.ctx) return 0;
    const elapsed = Math.max(0, this.ctx.currentTime - this.startTime);
    return (elapsed % LOOP_SECONDS) / LOOP_SECONDS;
  }

  /** `count` spectrum levels (0–1), low to high frequencies. */
  levels(count: number): number[] {
    if (!this.ctx) return Array(count).fill(0);
    this.analyser.getByteFrequencyData(this.levelData);
    return Array.from({ length: count }, (_, i) => this.levelData[i + 1] / 255);
  }

  private build(): AudioContext {
    const ctx = new AudioContext();

    // Musical voices go through a dull "tape" low-pass; crackle bypasses it to stay crisp.
    const tape = ctx.createBiquadFilter();
    tape.type = 'lowpass';
    tape.frequency.value = 2200;
    tape.Q.value = 0.5;
    const wobble = ctx.createOscillator();
    const wobbleDepth = ctx.createGain();
    wobble.frequency.value = 0.15;
    wobbleDepth.gain.value = 400;
    wobble.connect(wobbleDepth).connect(tape.frequency);
    wobble.start();

    const compressor = ctx.createDynamicsCompressor();
    const master = ctx.createGain();
    master.gain.value = 0.6;
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 64;
    this.analyser.smoothingTimeConstant = 0.75;
    this.levelData = new Uint8Array(this.analyser.frequencyBinCount);

    tape.connect(compressor).connect(master).connect(this.analyser).connect(ctx.destination);
    this.bus = tape;

    this.noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const white = this.noise.getChannelData(0);
    for (let i = 0; i < white.length; i++) white[i] = Math.random() * 2 - 1;

    const vinyl = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const dust = vinyl.getChannelData(0);
    for (let i = 0; i < dust.length; i++) {
      const pop = Math.random() < 0.0004 ? (Math.random() * 2 - 1) * 0.5 : 0;
      dust[i] = (Math.random() * 2 - 1) * 0.004 + pop;
    }
    const crackle = ctx.createBufferSource();
    crackle.buffer = vinyl;
    crackle.loop = true;
    crackle.connect(master);
    crackle.start();

    this.nextTime = ctx.currentTime + 0.05;
    this.startTime = this.nextTime;
    return ctx;
  }

  private schedule(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    while (this.nextTime < ctx.currentTime + LOOKAHEAD) {
      this.playStep(this.step, this.nextTime + (this.step % 2 ? SWING : 0));
      this.nextTime += SIXTEENTH;
      this.step = (this.step + 1) % STEPS;
    }
  }

  private playStep(step: number, time: number): void {
    const bar = Math.floor(step / 16);
    const beat = step % 16;

    if (beat === 0) {
      for (const note of CHORDS[bar]) this.pad(note, time, SIXTEENTH * 16);
      this.bass(BASS[bar], time, SIXTEENTH * 9);
    }
    if (beat === 10) this.bass(BASS[bar], time, SIXTEENTH * 5);
    if (KICKS.has(beat)) this.kick(time);
    if (SNARES.has(beat)) this.snare(time);
    if (beat % 2 === 0) this.hat(time, beat % 4 === 0 ? 0.05 : 0.03);
    if (step in MELODY) this.keys(MELODY[step], time);
  }

  private envelope(time: number, peak: number, attack: number, length: number): GainNode {
    const gain = this.ctx!.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + length);
    gain.connect(this.bus);
    return gain;
  }

  private tone(
    type: OscillatorType,
    freq: number,
    time: number,
    length: number,
    out: AudioNode,
    detune = 0,
  ): void {
    const osc = this.ctx!.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    osc.detune.value = detune;
    osc.connect(out);
    osc.start(time);
    osc.stop(time + length + 0.05);
  }

  private pad(note: number, time: number, length: number): void {
    const out = this.envelope(time, 0.035, 0.4, length);
    this.tone('triangle', hz(note), time, length, out, -6);
    this.tone('sine', hz(note), time, length, out, 7);
  }

  private bass(note: number, time: number, length: number): void {
    this.tone('sine', hz(note), time, length, this.envelope(time, 0.3, 0.02, length));
  }

  private keys(note: number, time: number): void {
    const out = this.envelope(time, 0.07, 0.01, 1.2);
    this.tone('sine', hz(note), time, 1.2, out);
    this.tone('sine', hz(note + 12), time, 0.4, this.envelope(time, 0.015, 0.005, 0.4));
  }

  private kick(time: number): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.12);
    osc.connect(this.envelope(time, 0.9, 0.005, 0.35));
    osc.start(time);
    osc.stop(time + 0.4);
  }

  private snare(time: number): void {
    this.burst(time, 'bandpass', 1800, 0.22, 0.18);
  }

  private hat(time: number, peak: number): void {
    this.burst(time, 'highpass', 7000, peak, 0.04);
  }

  private burst(
    time: number,
    type: BiquadFilterType,
    freq: number,
    peak: number,
    length: number,
  ): void {
    const ctx = this.ctx!;
    const source = ctx.createBufferSource();
    source.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    source.connect(filter).connect(this.envelope(time, peak, 0.002, length));
    source.start(time, Math.random() * 0.5);
    source.stop(time + length + 0.05);
  }
}

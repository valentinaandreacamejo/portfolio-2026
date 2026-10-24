import { DOCUMENT, Service, effect, inject, signal } from '@angular/core';
import { Language, TRANSLATIONS, TranslationKey } from '../i18n/translations';

export type { Language, TranslationKey } from '../i18n/translations';

const STORAGE_KEY = 'portfolio.lang';
const HTML_LANG: Record<Language, string> = { it: 'it', es: 'es-VE', en: 'en' };

function storedLanguage(): Language | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value && value in TRANSLATIONS ? (value as Language) : null;
  } catch {
    return null;
  }
}

@Service()
export class TranslationService {
  readonly languages: readonly { code: Language; label: string; name: string }[] = [
    { code: 'it', label: 'IT', name: 'Italiano' },
    { code: 'es', label: 'ES', name: 'Español (Venezuela)' },
    { code: 'en', label: 'EN', name: 'English' },
  ];

  private readonly current = signal<Language>(storedLanguage() ?? 'it');
  readonly lang = this.current.asReadonly();

  constructor() {
    const document = inject(DOCUMENT);
    // Keep <html lang> in sync for screen readers and remember the choice for the next visit.
    effect(() => {
      const lang = this.current();
      document.documentElement.lang = HTML_LANG[lang];
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Storage unavailable (private mode): the choice just won't persist.
      }
    });
  }

  setLanguage(lang: Language): void {
    this.current.set(lang);
  }

  /**
   * Returns the text for `key` in the active language, filling `{placeholders}` from `params`.
   * Reads the language signal, so templates and computeds re-render on `setLanguage`.
   */
  t(key: TranslationKey, params?: Record<string, string | number>): string {
    const text = TRANSLATIONS[this.current()][key];
    return params
      ? text.replace(/\{(\w+)\}/g, (match, name: string) => String(params[name] ?? match))
      : text;
  }
}

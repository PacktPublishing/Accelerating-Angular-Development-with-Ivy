import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LanguageTag } from '../../shared/ui/language-tag';
import { LocaleStore } from '../data-access/locale.store';
import { allLocales } from '../ui/all-locales';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-locale',
  styles: [':host { display: block; }'],
  template: `
    <app-locale-picker
      [locales]="locales"
      (localeChange)="onLocaleChange($event)"
    ></app-locale-picker>
  `,
})
export class LocaleContainerComponent {
  locales = allLocales;

  constructor(private localeState: LocaleStore) {}

  onLocaleChange(locale: LanguageTag): void {
    this.localeState.selectLocale(locale);
  }
}

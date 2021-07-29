import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { LanguageTag } from '../../shared/ui/language-tag';
import { validValueChanges } from '../../shared/ui/valid-value-changes';
import { localeValidator } from './locale-validator';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-locale-picker',
  styles: [':host { display: block; }'],
  template: `
    <label>
      Pick a locale
      <input list="locales" [formControl]="selectedLocale" />
    </label>
    <datalist id="locales">
      <option *ngFor="let locale of locales" [value]="locale"></option>
    </datalist>
  `,
})
export class LocalePickerComponent {
  selectedLocale = new FormControl('', [Validators.required, localeValidator]);

  @Input()
  set locale(value: LanguageTag) {
    this.selectedLocale.setValue(value, {
      emitEvent: false,
      emitViewToModelChange: false,
    });
  }
  @Input()
  locales: ReadonlyArray<LanguageTag> = [];

  @Output()
  localeChange: Observable<LanguageTag> = validValueChanges(
    this.selectedLocale
  );
}

import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { languageTagPattern } from '../../shared/ui/language-tag';
import { allLocales } from './all-locales';

const knownLocaleValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const isValid = allLocales.includes(control.value);

  return isValid ? null : { locale: true };
};

export const localeValidator = Validators.compose([
  Validators.pattern(languageTagPattern),
  knownLocaleValidator,
]) as ValidatorFn;

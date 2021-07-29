import { Injectable } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

import { LanguageTag } from '../../shared/ui/language-tag';

@Injectable({
  providedIn: 'root',
})
export class LocaleLoader {
  load(locale: LanguageTag): Observable<void> {
    return from(import(`@angular/common/locales/global/${locale}`)).pipe(
      catchError(() => {
        console.error(`Error when loading locale "${locale}"`);

        return EMPTY;
      }),
      mapTo(undefined)
    );
  }
}

import { Direction } from '@angular/cdk/bidi';
import { getLocaleDirection } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { filter, map, switchMap } from 'rxjs/operators';

import { createLanguageTag, LanguageTag } from '../../shared/ui/language-tag';
import { LocaleLoader } from './locale-loader.service';

export interface LocaleState {
  readonly direction: Direction;
  readonly locale: LanguageTag;
}

@Injectable({
  providedIn: 'root',
})
export class LocaleStateService extends RxState<LocaleState> {
  locale$ = this.select('locale');
  direction$ = this.select('direction');

  constructor(
    @Inject(LOCALE_ID) appLocale: string,
    private loader: LocaleLoader
  ) {
    super();

    this.loadLocaleOnChange();
    this.initializeState(appLocale);
  }

  private initializeState(appLocale: string): void {
    const locale = createLanguageTag(appLocale);
    const direction = this.localeToDirection(locale);
    this.set({
      direction,
      locale,
    });
  }

  private loadLocaleOnChange(): void {
    // en-US comes pre-bundled with Angular unless we specify otherwise in the
    // build configuration
    const bundledLocale = createLanguageTag('en-US');
    const loadLocaleOnChange$ = this.locale$.pipe(
      filter((locale) => locale !== bundledLocale),
      switchMap((locale) =>
        this.loader.load(locale).pipe(map(() => this.localeToDirection(locale)))
      )
    );

    // We pessimistically update the direction state, because it might trigger a
    // layout direction switch for the entire app.
    this.hold(loadLocaleOnChange$, (direction) => this.set({ direction }));
  }

  private localeToDirection(locale: string): Direction {
    return getLocaleDirection(locale);
  }
}

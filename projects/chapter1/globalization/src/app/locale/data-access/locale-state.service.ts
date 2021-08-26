import { Direction } from '@angular/cdk/bidi';
import { getLocaleDirection } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { mapTo, switchMap, tap } from 'rxjs/operators';

import { createLanguageTag, LanguageTag } from '../../shared/ui/language-tag';
import { LocaleLoader } from './locale-loader.service';

interface LocaleState {
  readonly loadedLocale: LanguageTag;
  readonly selectedLocale: LanguageTag;
}

@Injectable({
  providedIn: 'root',
})
export class LocaleStateService extends ComponentStore<LocaleState> {
  /**
   * The app locale is automatically bundled.
   */
  #appLocale: LanguageTag;
  /**
   * en-US comes pre-bundled with Angular unless we specify otherwise in the
   * build configuration.
   */
  #bundledLocale: LanguageTag = createLanguageTag('en-US');
  #loadedLocale: Observable<LanguageTag> = this.select(
    (state) => state.loadedLocale
  );
  #selectedLocale$: Observable<LanguageTag> = this.select(
    (state) => state.selectedLocale
  );

  /**
   * We pessimistically update the direction state, because it might trigger a
   * layout direction switch for the entire app.
   */
  direction$: Observable<Direction> = this.select(
    this.#loadedLocale,
    (loadedLocale) => this.localeToDirection(loadedLocale),
    {
      debounce: true,
    }
  );
  locale$: Observable<LanguageTag> = this.select(
    (state) => state.loadedLocale,
    {
      debounce: true,
    }
  );

  constructor(
    @Inject(LOCALE_ID) appLocale: string,
    private loader: LocaleLoader
  ) {
    super();
    this.#appLocale = createLanguageTag(appLocale);

    this.setState({
      loadedLocale: this.#appLocale,
      selectedLocale: this.#appLocale,
    });
    this.loadLocaleOnSelection(this.#selectedLocale$);
  }

  selectLocale = this.updater<LanguageTag>(
    (state, selectedLocale): LocaleState => ({
      ...state,
      selectedLocale,
    })
  );

  private isBundled(locale: LanguageTag): boolean {
    return [this.#appLocale, this.#bundledLocale].includes(locale);
  }

  private loadLocaleOnSelection = this.effect<LanguageTag>((selectedLocale$) =>
    selectedLocale$.pipe(
      switchMap((locale) =>
        this.isBundled(locale)
          ? of(locale)
          : this.loader.load(locale).pipe(mapTo(locale))
      ),
      tap((locale) => this.updateLoadedLocale(locale))
    )
  );

  private localeToDirection(locale: string): Direction {
    return getLocaleDirection(locale);
  }

  private updateLoadedLocale = this.updater<LanguageTag>(
    (state, loadedLocale) => ({
      ...state,
      loadedLocale,
    })
  );
}

import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { RxState } from '@rx-angular/state';

import { LocaleStateService } from '../../locale/data-access/locale-state.service';
import { LanguageTag } from './language-tag';

export interface HostLanguageState {
  readonly language: LanguageTag;
}

@Injectable()
export class HostLanguageService extends RxState<HostLanguageState> {
  constructor(
    localeState: LocaleStateService,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    super();

    this.connect('language', localeState.locale$);

    this.hold(this.select('language'), (language) =>
      this.#setHostLanguage(language)
    );
  }

  #setHostLanguage = (language: LanguageTag): void => {
    this.renderer.setAttribute(this.host.nativeElement, 'lang', language);
  };
}

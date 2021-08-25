import { ElementRef, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocaleStore } from '../../locale/data-access/locale.store';
import { LanguageTag } from './language-tag';

@Injectable()
export class HostLanguageService implements OnDestroy {
  #destroy = new Subject<void>();

  constructor(
    private locale: LocaleStore,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.locale.locale$
      .pipe(takeUntil(this.#destroy))
      .subscribe((language) => this.setHostLanguage(language));
  }

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }

  private setHostLanguage(language: LanguageTag): void {
    this.renderer.setAttribute(this.host.nativeElement, 'lang', language);
  }
}

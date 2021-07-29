import { Direction } from '@angular/cdk/bidi';
import { getLocaleDirection } from '@angular/common';
import { ElementRef, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { LanguageTag } from './language-tag';

abstract class LocaleStateService {
  readonly locale$: Observable<LanguageTag>;
}

@Injectable()
export class HostDirectionService implements OnDestroy {
  #destroy = new Subject<void>();
  #direction$: Observable<Direction> = this.localeState.locale$.pipe(
    map((locale) => getLocaleDirection(locale))
  );

  constructor(
    private localeState: LocaleStateService,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.#direction$
      .pipe(takeUntil(this.#destroy))
      .subscribe((direction) => this.setHostDirection(direction));
  }

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }

  private setHostDirection(direction: Direction): void {
    this.renderer.setAttribute(this.host.nativeElement, 'dir', direction);
  }
}

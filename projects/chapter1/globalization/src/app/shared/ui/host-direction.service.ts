import { Direction } from '@angular/cdk/bidi';
import { ElementRef, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocaleStateService } from '../../locale/data-access/locale-state.service';

@Injectable()
export class HostDirectionService implements OnDestroy {
  #destroy = new Subject<void>();

  constructor(
    localeState: LocaleStateService,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    localeState.direction$
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

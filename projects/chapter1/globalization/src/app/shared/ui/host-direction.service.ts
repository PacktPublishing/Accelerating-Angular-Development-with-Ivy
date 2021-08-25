import { Direction } from '@angular/cdk/bidi';
import { ElementRef, Injectable, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LocaleStore } from '../../locale/data-access/locale.store';

@Injectable()
export class HostDirectionService implements OnDestroy, OnInit {
  #destroy = new Subject<void>();

  constructor(
    private localeState: LocaleStore,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }

  ngOnInit(): void {
    this.localeState.direction$
      .pipe(takeUntil(this.#destroy))
      .subscribe((direction) => this.setHostDirection(direction));
  }

  private setHostDirection(direction: Direction): void {
    this.renderer.setAttribute(this.host.nativeElement, 'dir', direction);
  }
}

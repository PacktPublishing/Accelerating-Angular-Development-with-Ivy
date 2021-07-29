import { Direction } from '@angular/cdk/bidi';
import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { RxState } from '@rx-angular/state';

import { LocaleStateService } from '../../locale/data-access/locale-state.service';

@Injectable()
export class HostDirectionService extends RxState<{}> {
  constructor(
    localeState: LocaleStateService,
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    super();

    this.hold(localeState.direction$, (direction) =>
      this.setHostDirection(direction)
    );
  }

  private setHostDirection(direction: Direction): void {
    this.renderer.setAttribute(this.host.nativeElement, 'dir', direction);
  }
}

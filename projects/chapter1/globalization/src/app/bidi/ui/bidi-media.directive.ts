import { Direction } from '@angular/cdk/bidi';
import {
  Directive,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { RxState } from '@rx-angular/state';
import { filter } from 'rxjs/operators';

import { LocaleStateService } from '../../locale/data-access/locale-state.service';

export interface BidiMediaState {
  readonly appDirection: Direction;
  readonly queryDirection: Direction;
}

const directionQueryPattern = /^\(dir: (?<direction>ltr|rtl)\)$/;

@Directive({
  exportAs: 'bidiMedia',
  // tslint:disable-next-line: directive-selector
  selector: '[media]',
})
export class BidiMediaDirective extends RxState<BidiMediaState> {
  #validState$ = this.$.pipe(
    filter(
      ({ appDirection, queryDirection }) =>
        appDirection !== undefined && queryDirection !== undefined
    )
  );
  #view?: EmbeddedViewRef<HTMLSourceElement>;

  @Input()
  set media(query: string) {
    if (!this.isDirection(query)) {
      throw new Error(
        `Invalid direction media query "${query}". Use format "(dir: ltr|rtl)"`
      );
    }

    const queryDirection = this.queryToDirection(query);
    this.set({ queryDirection });
  }

  constructor(
    private template: TemplateRef<HTMLSourceElement>,
    private container: ViewContainerRef,
    localeState: LocaleStateService
  ) {
    super();

    this.attachElementOnDirectionMatch();
    this.removeElementOnDirectionMismatch();

    this.connect('appDirection', localeState.direction$);
  }

  private attachElement(): void {
    if (this.#view) {
      return;
    }

    this.#view = this.container.createEmbeddedView(this.template);
  }

  private attachElementOnDirectionMatch(): void {
    const directionMatch$ = this.#validState$.pipe(
      filter(
        ({ appDirection, queryDirection }) => queryDirection === appDirection
      )
    );

    this.hold(directionMatch$, () => this.attachElement());
  }

  private isDirection(query: string): boolean {
    return directionQueryPattern.test(query);
  }

  private queryToDirection(query: string): Direction {
    // tslint:disable-next-line: no-non-null-assertion
    const { groups: { direction } = {} } = query.match(directionQueryPattern)!;

    return direction as Direction;
  }

  private removeElement(): void {
    this.container.clear();
  }

  private removeElementOnDirectionMismatch(): void {
    const directionMismatch$ = this.#validState$.pipe(
      filter(
        ({ appDirection, queryDirection }) => queryDirection !== appDirection
      )
    );

    this.hold(directionMismatch$, () => this.removeElement());
  }
}

import { Direction } from '@angular/cdk/bidi';
import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';

import { LocaleStore } from '../../locale/data-access/locale.store';

export interface BidiMediaState {
  readonly appDirection: Direction;
  readonly queryDirection: Direction;
}

const directionQueryPattern = /^\(dir: (?<direction>ltr|rtl)\)$/;

@Directive({
  exportAs: 'bidiMedia',
  selector: '[media]',
})
export class BidiMediaDirective implements OnDestroy, OnInit {
  #destroy = new Subject<void>();
  #queryDirection = new Subject<Direction>();
  #queryDirection$ = this.#queryDirection.pipe(distinctUntilChanged());
  #validState$ = this.#queryDirection$.pipe(
    withLatestFrom(this.localeState.direction$),
    map(([queryDirection, appDirection]) => ({ appDirection, queryDirection })),
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

    this.#queryDirection.next(this.queryToDirection(query));
  }

  constructor(
    private template: TemplateRef<HTMLSourceElement>,
    private container: ViewContainerRef,
    private localeState: LocaleStore
  ) {}

  ngOnInit(): void {
    this.attachElementOnDirectionMatch();
    this.removeElementOnDirectionMismatch();
  }

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
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

    directionMatch$
      .pipe(takeUntil(this.#destroy))
      .subscribe(() => this.attachElement());
  }

  private isDirection(query: string): boolean {
    return directionQueryPattern.test(query);
  }

  private queryToDirection(query: string): Direction {
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

    directionMismatch$
      .pipe(takeUntil(this.#destroy))
      .subscribe(() => this.removeElement());
  }
}

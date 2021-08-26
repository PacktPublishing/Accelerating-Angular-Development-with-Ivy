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
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

import { LocaleStateService } from '../../locale/data-access/locale-state.service';

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
  #queryDirection = new ReplaySubject<Direction>(1);
  #queryDirection$ = this.#queryDirection.pipe(distinctUntilChanged());
  #validState$: Observable<BidiMediaState>;
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
    localeState: LocaleStateService
  ) {
    this.#validState$ = combineLatest([
      this.#queryDirection$,
      localeState.direction$,
    ]).pipe(
      map(([queryDirection, appDirection]) => ({
        appDirection,
        queryDirection,
      })),
      filter(
        ({ appDirection, queryDirection }) =>
          appDirection !== undefined && queryDirection !== undefined
      )
    );
  }

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

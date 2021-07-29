import { Component, Input } from '@angular/core';

import { BaseSearchComponent } from './base-search.component';

@Component({
  selector: 'app-suggested-search',
  styleUrls: ['./base-search.scss'],
  template: `
    <input
      list="search-suggestions"
      [placeholder]="placeholder"
      (input)="onSearch($event)"
    />
    <datalist id="search-suggestions">
      <option *ngFor="let suggestion of suggestions" [value]="suggestion">
        {{ suggestion }}
      </option>
    </datalist>
  `,
})
export class SuggestedSearchComponent extends BaseSearchComponent {
  @Input()
  suggestions: readonly string[] = [];
}

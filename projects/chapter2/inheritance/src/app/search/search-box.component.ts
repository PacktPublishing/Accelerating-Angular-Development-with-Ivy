import { Component } from '@angular/core';

import { BaseSearchComponent } from './base-search.component';

@Component({
  selector: 'app-search-box',
  styleUrls: ['./base-search.scss'],
  template: `
    <input
      type="search"
      [placeholder]="placeholder"
      (input)="onSearch($event)"
    />
  `,
})
export class SearchBoxComponent extends BaseSearchComponent {}

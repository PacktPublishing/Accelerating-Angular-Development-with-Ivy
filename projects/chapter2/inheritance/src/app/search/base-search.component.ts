import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-base-search',
  template: '',
})
export class BaseSearchComponent {
  #search = new EventEmitter<string>();

  @Input()
  placeholder = 'Search...';
  @Output()
  search = this.#search.pipe(debounceTime(150), distinctUntilChanged());

  onSearch(inputEvent: Event): void {
    const query = (inputEvent.target as HTMLInputElement)?.value;

    if (query == null) {
      return;
    }

    this.#search.next(query);
  }
}

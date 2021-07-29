import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './search-box.component';
import { SuggestedSearchComponent } from './suggested-search.component';

@NgModule({
  declarations: [SearchBoxComponent, SuggestedSearchComponent],
  exports: [SearchBoxComponent, SuggestedSearchComponent],
  imports: [CommonModule],
})
export class SearchModule {}

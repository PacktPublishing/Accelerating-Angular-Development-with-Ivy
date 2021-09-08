import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RandomNumberComponent } from './random-number.component';
import { RandomNumberDirective } from './random-number.directive';

@NgModule({
  declarations: [RandomNumberComponent, RandomNumberDirective],
  exports: [RandomNumberComponent],
  imports: [MatCardModule, MatButtonModule],
})
export class RandomNumberModule {}

import { NgModule } from '@angular/core';

import { HostBindingComponent } from './host-binding.component';
import { HostBindingDirective } from './host-binding.directive';

@NgModule({
  declarations: [HostBindingComponent, HostBindingDirective],
  exports: [HostBindingComponent, HostBindingDirective],
})
export class HostBindingModule {}

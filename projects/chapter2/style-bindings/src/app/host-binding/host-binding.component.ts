import { Component } from '@angular/core';

@Component({
  host: {
    '[style.background]': "'gray'",
    style: 'background: green;',
  },
  selector: 'app-host-binding',
  template: '<ng-content></ng-content>',
})
export class HostBindingComponent {}

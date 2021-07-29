import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[style.background]': "'gray'",
    style: 'background: green;',
  },
  selector: 'app-host-binding',
  template: '<ng-content></ng-content>',
})
export class HostBindingComponent {}

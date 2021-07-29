import { Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[style.background]': "'blue'",
    style: 'background: purple;',
  },
  selector: '[appHostBinding]',
})
export class HostBindingDirective {}

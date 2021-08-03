import { Directive } from '@angular/core';

@Directive({
  host: {
    '[style.background]': "'blue'",
    style: 'background: purple;',
  },
  selector: '[appHostBinding]',
})
export class HostBindingDirective {}

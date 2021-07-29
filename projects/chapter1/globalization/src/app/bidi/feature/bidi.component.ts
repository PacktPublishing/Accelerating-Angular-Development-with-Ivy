import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-bidi',
  styles: [':host { display: block; }'],
  template: `
    <picture>
      <source
        *media="'(dir: ltr)'"
        srcset="https://via.placeholder.com/150?text=LTR"
      />
      <source
        *media="'(dir: rtl)'"
        srcset="https://via.placeholder.com/150?text=RTL"
      />
      <img src="https://via.placeholder.com/150?text=LTR" />
    </picture>
  `,
})
export class BidiComponent {}

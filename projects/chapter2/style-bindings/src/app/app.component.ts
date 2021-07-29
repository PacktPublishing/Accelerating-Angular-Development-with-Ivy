import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-host-binding
      [ngStyle]="{ background: 'pink' }"
      [style.background]="'red'"
      [style]="{ background: 'orange' }"
      style="background: yellow;"
      appHostBinding
      >Content</app-host-binding
    >
  `,
})
export class AppComponent {}

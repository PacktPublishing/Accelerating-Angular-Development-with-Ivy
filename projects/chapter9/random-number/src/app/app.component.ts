import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-random-number></app-random-number>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}

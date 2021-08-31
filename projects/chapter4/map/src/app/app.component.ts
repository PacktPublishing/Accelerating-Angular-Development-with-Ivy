import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-map></app-map>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}

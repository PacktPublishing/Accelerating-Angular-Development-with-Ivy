import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>RandomNumber</h1>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}

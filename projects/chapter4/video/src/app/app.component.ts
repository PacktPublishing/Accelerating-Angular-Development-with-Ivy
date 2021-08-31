import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-video></app-video>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}

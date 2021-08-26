import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="panel">This panel is purple.</div>

    <div class="panel contrast">This panel is pink.</div>

    <div class="contrast">
      This element is transparent.

      <div class="panel">This panel is also pink.</div>
    </div>
  `,
})
export class AppComponent {}

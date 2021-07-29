import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label>
      Text size
      <input type="number" min="10" max="48" step="2" [(ngModel)]="textSize" />
    </label>
    px

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan,
      nisi sed aliquet lobortis, est lorem euismod libero, at rutrum lacus
      tellus non metus. Proin a nunc a libero vehicula egestas pretium id ipsum.
    </p>
  `,
})
export class AppComponent {
  @HostBinding('style.--text-size.px')
  textSize = 16;
}

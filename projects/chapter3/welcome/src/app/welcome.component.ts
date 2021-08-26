import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  styles: [
    `
      .welcome-banner > .welcome-content::before {
        display: inline-block;
        content: '' var(--welcome-text) '';
      }
    `,
  ],
  template: `
    <button (click)="onLanguageSelect('en')">EN</button>
    <button (click)="onLanguageSelect('fr')">FR</button>

    <p class="welcome-banner">
      <span class="welcome-content" [lang]="language"></span>
    </p>
  `,
})
export class WelcomeComponent {
  language = 'en';

  onLanguageSelect(language: string): void {
    this.language = language;
  }
}

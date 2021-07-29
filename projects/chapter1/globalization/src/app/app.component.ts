import { Component } from '@angular/core';

import { HostDirectionService } from './shared/ui/host-direction.service';
import { HostLanguageService } from './shared/ui/host-language.service';

@Component({
  selector: 'app-root',
  styles: [':host { display: block; }'],
  template: `
    <app-locale></app-locale>
    <app-bidi></app-bidi>
  `,
  viewProviders: [HostDirectionService, HostLanguageService],
})
export class AppComponent {
  constructor(
    // Inject to eagerly instantiate
    hostDirection: HostDirectionService,
    // Inject to eagerly instantiate
    hostLanguage: HostLanguageService
  ) {}
}

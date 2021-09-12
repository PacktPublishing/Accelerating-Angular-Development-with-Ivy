import { Component } from '@angular/core';

import { FeatureFlagService } from './feature-flag.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-slide-toggle
        [checked]="featureFlagService.isEnabled('middleOutCompression')"
      >
        Middle-out compression
      </mat-slide-toggle>
    </div>

    <div>
      <mat-slide-toggle
        [checked]="featureFlagService.isEnabled('decentralized')"
      >
        Decentralized application
      </mat-slide-toggle>
    </div>
  `,
})
export class AppComponent {
  constructor(public featureFlagService: FeatureFlagService) {}
}

import { Component, Inject } from '@angular/core';

import { featureFlagsToken } from './feature-flags.token';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let feature of features | keyvalue">
      <mat-slide-toggle [checked]="feature.value">
        {{ feature.key }}
      </mat-slide-toggle>
    </div>
  `,
})
export class AppComponent {
  constructor(
    @Inject(featureFlagsToken)
    public features: { [feature: string]: boolean }
  ) {}
}

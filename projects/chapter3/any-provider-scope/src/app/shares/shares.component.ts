import { Component } from '@angular/core';

import { BackendService } from '../data-access/backend.service';

@Component({
  selector: 'workspace-shares',
  templateUrl: './shares.component.html',
})
export class SharesComponent {
  shares$ = this.backend.get('shares');

  constructor(private backend: BackendService) {}
}

import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ThemeService } from './theme.service';

@Component({
  selector: 'workspace-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  themeService: ThemeService;

  get background(): string {
    return this.themeService.getSetting('background');
  }

  get headerBackground(): string {
    return this.themeService.getSetting('headerBackground');
  }

  get tileBackground(): string {
    return this.themeService.getSetting('tileBackground');
  }

  get textSize(): string {
    return this.themeService.getSetting('textSize') || '';
  }

  get videoSize(): string {
    return this.themeService.getSetting('videoSize') || '';
  }

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }

  setSize(name: string, event: MatSliderChange): void {
    this.themeService.setSetting(name, event.value?.toString() || '1');
  }

  setSetting(event: any): void {
    this.themeService.setSetting(event.target?.name, event.target?.value);
  }
}

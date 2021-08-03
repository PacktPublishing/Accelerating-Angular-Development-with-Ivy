import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('style.--background')
  background: string;

  @HostBinding('style.--headerbackground')
  headerBackground: string;

  @HostBinding('style.--tilebackground')
  tileBackground: string;

  @HostBinding('style.--videosize')
  videoSize: string;

  @HostBinding('style.--textsize')
  textSize: string;

  constructor(themeService: ThemeService) {
    this.background = themeService.getSetting('background');
    this.headerBackground = themeService.getSetting('headerBackground');
    this.tileBackground = themeService.getSetting('tileBackground');
    this.videoSize = themeService.getSetting('videoSize');
    this.textSize = themeService.getSetting('textSize');
  }
}

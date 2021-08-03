import { Inject, Injectable } from '@angular/core';

import { themeToken } from '../theme.token';
import { ITheme } from './theme.model';

@Injectable({
  providedIn: 'any',
})
export class ThemeService {
  constructor(@Inject(themeToken) private theme: ITheme) {
    console.log('creating theme service with these settings', theme);
  }
  public setSetting(name: string, value: string): void {
    this.setItem(name, value);
  }

  public getSetting(name: string): string {
    switch (name) {
      case 'background':
        return this.getItem(name) || this.theme.background;
      case 'tileBackground':
        return this.getItem(name) || this.theme.tileBackground;
      case 'headerBackground':
        return this.getItem(name) || this.theme.headerBackground;
      case 'textSize':
        return this.getItem(name) || this.theme.textSize;
      case 'videoSize':
        return this.getItem(name) || this.theme.videoSize;
    }
    return 'white';
  }

  private setItem(name: string, value: string): void {
    localStorage.setItem(this.prefix(name), value);
  }

  private getItem(name: string): string | null {
    return localStorage.getItem(this.prefix(name));
  }

  private prefix(name: string): string {
    return this.theme.id + '_' + name;
  }
}

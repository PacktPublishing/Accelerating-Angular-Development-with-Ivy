import { InjectionToken } from '@angular/core';
import { ITheme } from './theme/theme.model';

export const themeToken = new InjectionToken<ITheme>('theme');

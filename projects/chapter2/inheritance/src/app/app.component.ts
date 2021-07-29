import { FormStyle, getLocaleDayNames, TranslationWidth } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  daysOfWeek: ReadonlyArray<string> = [];

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.daysOfWeek = getLocaleDayNames(
      localeId,
      FormStyle.Format,
      TranslationWidth.Wide
    );
  }
}

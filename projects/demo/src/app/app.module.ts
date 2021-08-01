import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.Module';

import { themeToken } from './theme.token';
import { theme } from '../green.theme';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TweetCourseComponent } from './tweetcourse/tweetcourse.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavigationModule,
    AppRoutingModule,
  ],

  providers: [
    {
      provide: themeToken,
      useValue: theme,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(TweetCourseComponent, {
      injector: this.injector,
    });
    customElements.define('tweet-course', el);
  }
  ngDoBootstrap(): void {}
}

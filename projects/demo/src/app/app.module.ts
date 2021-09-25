import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { theme } from '../green.theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { MaterialModule } from './shared/material.module';
import { themeToken } from './theme.token';
import { TweetCourseComponent } from './tweetcourse/tweetcourse.component';
import { TweetCourseModule } from './tweetcourse/tweetcourse.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    TweetCourseModule,
    MaterialModule,
    NavigationModule,
    AppRoutingModule,
  ],
  providers: [{ provide: themeToken, useValue: theme }],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const el = createCustomElement(TweetCourseComponent, {
      injector: this.injector,
    });
    customElements.define('tweet-course', el);
  }
  ngDoBootstrap(): void {}
}

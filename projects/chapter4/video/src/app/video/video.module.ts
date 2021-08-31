import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  exports: [VideoComponent],
  imports: [YouTubePlayerModule],
})
export class VideoModule {}

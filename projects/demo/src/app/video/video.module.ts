import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, YouTubePlayerModule, ClipboardModule],
  exports: [VideoComponent],
})
export class VideoModule {}

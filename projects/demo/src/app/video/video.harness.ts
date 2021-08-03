import { ComponentHarness } from '@angular/cdk/testing';
import { IVideo } from '../course.model';

export class VideoHarness extends ComponentHarness {
  static hostSelector = 'workspace-video';

  protected getTextElement = this.locatorFor('.text');
  protected getVideoElement = this.locatorFor(YoutubePlayerHarness);

  async getText(): Promise<string | null> {
    const textElement = await this.getTextElement();
    return textElement.text();
  }

  async getVideoId(): Promise<string | null> {
    const videoElement = await this.getVideoElement();
    return videoElement.getVideoId();
  }

  textEquals(video: IVideo, text: string): boolean {
    return text
      ?.toLowerCase()
      .trim()
      .includes(video.title.trim().toLowerCase());
  }
}

class YoutubePlayerHarness extends ComponentHarness {
  static hostSelector = 'youtube-player';

  async getVideoId(): Promise<string | null> {
    const host = await this.host();
    return await host.getAttribute('ng-reflect-video-id');
  }
}

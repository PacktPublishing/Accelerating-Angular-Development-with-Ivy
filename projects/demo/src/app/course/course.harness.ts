import { ComponentHarness } from '@angular/cdk/testing';
import { VideoHarness } from '../video/video.harness';

export class CourseHarness extends ComponentHarness {
  static hostSelector = 'workspace-course';

  getVideos = this.locatorForAll(VideoHarness);
}

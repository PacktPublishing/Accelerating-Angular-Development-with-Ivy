import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseComponent } from './course.component';
import { VideoModule } from '../video/video.module';
import { MaterialModule } from '../shared/material.module';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { CommonModule } from '@angular/common';
import { VideoHarness } from '../video/video.harness';
import { CourseService } from '../course.service';

describe('CoursesComponent', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let loader: HarnessLoader;
  let courseService: CourseService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientModule,
        MaterialModule,
        VideoModule,
      ],
      declarations: [CourseComponent],
    }).compileComponents();

    courseService = TestBed.inject(CourseService);

    fixture = TestBed.createComponent(CourseComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  }));

  it('should render the course video titles on screen', waitForAsync(() => {
    loader.getAllHarnesses(VideoHarness).then ( (renderedVideos)=> {
      courseService.getCourse('1').subscribe((course) => {
        renderedVideos.forEach((video: VideoHarness) => {
          video.getText().then((text) => {
            expect(text).toBeDefined();
            if (text) {
              expect(
                course.videos.find((v) => video.textEquals(v, text))
              ).toBeTruthy();
            }
          }) 
        });
      });
    })
 }));

  it('should have the videoId available when rendering the video',  waitForAsync(() => {
    loader.getAllHarnesses(VideoHarness).then( (renderedVideos) => {
      renderedVideos.forEach(async (video: VideoHarness) => {
        const videoId = await video.getVideoId();
        expect(videoId).toBeTruthy();
      });
    });
  }));
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [YouTubePlayerModule],
      declarations: [VideoComponent],
    }).compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSliderHarness } from '@angular/material/slider/testing';
import { MatInputHarness } from '@angular/material/input/testing';

import { ThemeComponent } from './theme.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MaterialModule } from '../shared/material.module';
import { ThemeService } from './theme.service';
import { themeToken } from '../theme.token';
import { theme } from '../../green.theme';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ThemeComponent', () => {
  let fixture: ComponentFixture<ThemeComponent>;
  let loader: HarnessLoader;
  let themeService: ThemeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [ThemeComponent],
      providers: [
        {
          provide: themeToken,
          useValue: theme,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeComponent);
    themeService = TestBed.inject(ThemeService);
    loader = TestbedHarnessEnvironment.loader(fixture);
  }));

  it('should be able to check default text and video slider settings', async () => {
    localStorage.clear();
    const videoSizeSetting = Number(themeService.getSetting('videoSize'));
    expect(videoSizeSetting).toBe(7);
    
    const videoSizeSlider = await loader.getHarness(
      MatSliderHarness.with({ selector: '#videoSizeSlider' })
    );
    expect (await videoSizeSlider.getId()).toBe('videoSizeSlider');
    expect (await videoSizeSlider.getValue()).toBe(videoSizeSetting);

    const textSizeSlider = await loader.getHarness(
      MatSliderHarness.with({ selector: '#textSizeSlider' })
    )
    const textSizeSetting = Number(themeService.getSetting('textSize'));
    expect(textSizeSetting).toBe(3);
    expect(await textSizeSlider.getId()).toBe('textSizeSlider');
    expect(await textSizeSlider.getValue()).toBe(textSizeSetting);
  });

  it('should be able to update video size slider setting', async () => {
    const videoSizeSlider = await loader.getHarness(
      MatSliderHarness.with({ selector: '#videoSizeSlider' })
    );
    await  videoSizeSlider.setValue(5);
    const videoSizeSetting: number = Number( themeService.getSetting('videoSize'));
    expect(videoSizeSetting).toBe(5);
  });

  it('should be able to read default header background color theme setting', async () => {
    localStorage.clear();
    const headerBackground = await loader.getHarness(
      MatInputHarness.with({ selector: '#headerBackground' })
    )
    expect(await headerBackground.getValue()).toBe(('#00aa00') );
  });

  it('should be able to change the header background color theme setting', async () => {
    const headerBackground = await loader.getHarness(
      MatInputHarness.with({ selector: '#headerBackground' })
    )
    await headerBackground.setValue('#ffbbcc');
    await headerBackground.blur();
    expect(themeService.getSetting('headerBackground')).toBe('#ffbbcc');
  });
});

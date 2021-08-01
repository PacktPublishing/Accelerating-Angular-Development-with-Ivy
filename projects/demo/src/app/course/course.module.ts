import { NgModule } from '@angular/core';
import { MaterialModule } from './../shared/material.module';
import { ThemeModule } from '../theme/theme.module';
import { VideoModule } from '../video/video.module';
import { CourseComponent } from './course.component';
import { themeToken } from '../theme.token';
import { CourseRoutingModule } from './course-routing.module';

import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    VideoModule,
    ThemeModule,
    MaterialModule,
    CourseRoutingModule,
  ],
  exports: [CourseComponent],
})
export class CourseModule {}

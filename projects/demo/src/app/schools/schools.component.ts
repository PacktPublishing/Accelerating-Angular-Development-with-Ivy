import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapAnchorPoint, MapInfoWindow } from '@angular/google-maps';
import { Observable } from 'rxjs';

import { ISchool } from '../course.model';
import { SchoolsService } from '../schools.service';
import { PreferenceService } from '../preference.service';

@Component({
  selector: 'workspace-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent {
  @ViewChild(GoogleMap, { static: false }) public map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) public info!: MapInfoWindow;

  school!: ISchool;

  schools$: Observable<ISchool[]>;
  preferenceService: PreferenceService;

  constructor(
    schoolsService: SchoolsService,
    preferenceService: PreferenceService
  ) {
    this.schools$ = schoolsService.getSchools();
    this.preferenceService = preferenceService;
  }

  openInfo(anchor: MapAnchorPoint, school: ISchool): void {
    this.school = school;
    this.info.open(anchor);
  }

  saveCourseId(courseId: string): void {
    this.preferenceService.setCourseId(courseId);
  }
}

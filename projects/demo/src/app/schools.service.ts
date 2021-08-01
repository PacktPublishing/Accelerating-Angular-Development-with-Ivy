import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISchool } from './course.model';

const mockSchools = [
  {
    id: '1',
    courseId: '1',
    name: 'Tech talks by Lars',
    longitude: 56.783778,
    latitude: 8.228937,
    courses: [
      {
        id: '1',
        title: 'Angular Advanced',
        videos: [
          {
            title:
              'Angular Revisited: Tree-shakable Components and Optional NgModules by Lars Gyrup Brink Nielsen',
            externalId: 'DA3efofhpq4',
            description:
              'NgModule is arguably one of the most confusing Angular concepts. Using tree-shakable components and dependencies, we will need Angular modules less often or not at all. Tree-shakable components are not available yet, but we can use Single Component Angular Modules to ease the migration path.',
          },
          {
            title:
              'Model-View-Presenter with Angular by Lars Gyrup Brink Nielsen',
            externalId: 'D_ytOCPQrI0',
            description:
              'Using container components and presenters, we can achieve separation of concerns in the presentation layer of complex applications. This is the first step in increasing the maintainability, testability and scalability of our Angular applications.',
          },
        ],
      },
    ],
  },
] as ISchool[];

@Injectable({
  providedIn: 'root',
})
export class SchoolsService {
  constructor() {}
  getSchools(): Observable<ISchool[]> {
    return of(mockSchools);
  }
}

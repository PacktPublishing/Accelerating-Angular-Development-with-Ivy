import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICourse } from './course.model';

const mockCourse = {
  id: '1',
  title: 'Accelerating Angular Development with Ivy',
  description:
    'Discussing advanced angular concepts with relation to Angular Ivy',
  hashtag: 'AcceleratingIvy',
  videos: [
    {
      title:
        'Angular Revisited: Tree-shakable Components and Optional NgModules by Lars Gyrup Brink Nielsen',
      externalId: 'DA3efofhpq4',
      description:
        'NgModule is arguably one of the most confusing Angular concepts. Using tree-shakable components and dependencies, we will need Angular modules less often or not at all. Tree-shakable components are not available yet, but we can use Single Component Angular Modules to ease the migration path.',
    },
    {
      title: 'Model-View-Presenter with Angular by Lars Gyrup Brink Nielsen',
      externalId: 'D_ytOCPQrI0',
      description:
        'Using container components and presenters, we can achieve separation of concerns in the presentation layer of complex applications. This is the first step in increasing the maintainability, testability and scalability of our Angular applications.',
    },
  ],
} as ICourse;

@Injectable({
  providedIn: 'platform',
})
export class CourseService {
  constructor() {}
  getCourse(courseId: string): Observable<ICourse> {
    return of(mockCourse);
  }
}

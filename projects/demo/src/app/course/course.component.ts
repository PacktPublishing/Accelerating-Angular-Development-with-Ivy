import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../course.model';
import { Observable, Subscription } from 'rxjs';

console.log('load ourse component');
@Component({
  selector: 'workspace-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.scss'],
})
export class CourseComponent implements OnInit, OnDestroy {
  @Input()
  id!: string;

  subscriptions = new Subscription();
  public course$: Observable<ICourse> | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.subscribeToParamsUpdates();
  }

  subscribeToParamsUpdates(): void {
    this.subscriptions = this.route.params.subscribe((params) => {
      const courseId = params['id'];
      this.course$ = this.courseService.getCourse(courseId);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

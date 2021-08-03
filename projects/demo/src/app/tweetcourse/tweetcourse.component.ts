import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../course.service';
import { ICourse } from '../course.model';

@Component({
  selector: 'workspace-tweetcourse',
  templateUrl: './tweetcourse.component.html',
})
export class TweetCourseComponent implements OnInit {
  @Input()
  courseId!: string;

  public course$: Observable<ICourse> | undefined;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.course$ = this.courseService.getCourse(this.courseId);
  }
}

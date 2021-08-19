import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../course.service';
import { ICourse } from '../course.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'workspace-tweetcourse',
  templateUrl: './tweetcourse.component.html',
})
export class TweetCourseComponent implements OnInit {
  @Input()
  courseId!: string;

  private twitterScript: HTMLScriptElement;

  public course$: Observable<ICourse> | undefined;

   constructor(@Inject(DOCUMENT) private document: Document,
                private courseService: CourseService) {
    this.twitterScript = this.document.createElement('script');
    this.twitterScript.src = "https://platform.twitter.com/widgets.js";
    this.twitterScript.async = true;
  }

  ngOnInit(): void {
    this.course$ = this.courseService.getCourse(this.courseId);
    this.document.body.appendChild(this.twitterScript);
  }

  ngOnDestroy(): void {
    this.document.body.removeChild(this.twitterScript);
  }

}

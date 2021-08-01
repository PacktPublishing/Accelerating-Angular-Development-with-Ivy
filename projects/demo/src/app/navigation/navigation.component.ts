import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PreferenceService } from '../preference.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'workspace-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private preferenceService: PreferenceService,
    private router: Router
  ) {
    this.authService = authService;
    this.preferenceService = preferenceService;
    this.authService.loginEvent.subscribe((token: string) => {
      const courseId: string | null = this.preferenceService.getCourseId();
      if (courseId) {
        router.navigate(['/course', courseId]);
      } else {
        router.navigate(['/schools']);
      }
    });
  }

  get token(): string | null {
    return this.authService.token;
  }
  get courseId(): string | null {
    return this.preferenceService.getCourseId();
  }

  logout(): void {
    this.authService.logout();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class PreferenceService {
  getCourseId(): string | null {
    return localStorage.getItem('courseId');
  }
  setCourseId(id: string): void {
    localStorage.setItem('courseId', id);
  }
}

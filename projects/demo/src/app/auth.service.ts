import { EventEmitter, Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable({
  providedIn: 'platform',
})
export class AuthService {
  public loginEvent: EventEmitter<string> = new EventEmitter();

  login(user: IUser): void {
    if (user.name === 'demo' && user.password === 'demo') {
      this.token = 'thisTokenShouldBeProvidedByTheBackend';
      this.loginEvent.emit(this.token);
    }
  }

  logout(): void {
    this.token = '';
  }

  set token(value: string) {
    localStorage.setItem('token', value);
  }

  get token(): string {
    return localStorage.getItem('token') ?? '';
  }
}

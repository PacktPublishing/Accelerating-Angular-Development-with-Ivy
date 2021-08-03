import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @HostBinding('style.--background')
  background: string;

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    private themeService: ThemeService
  ) {
    this.background = themeService.getSetting('background');
    this.loginForm = this.fb.group({
      name: [''],
      password: [''],
    });
  }

  loginUser(): void {
    this.authService.login(this.loginForm.value);
  }
}

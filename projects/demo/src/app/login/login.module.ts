import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { themeToken } from '../theme.token';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { theme } from '../../metallic.theme';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  providers: [
    {
      provide: themeToken,
      useValue: theme,
    },
  ],
})
export class LoginModule {}

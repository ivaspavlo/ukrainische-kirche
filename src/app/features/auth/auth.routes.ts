import { Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './components';

export enum AUTH_ROUTE_NAMES {
  LOGIN = 'login'
}

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: AUTH_ROUTE_NAMES.LOGIN,
        component: LoginComponent
      }
    ]
  }
];

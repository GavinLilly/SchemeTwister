import { Routes } from '@angular/router';
import { HomeComponent } from '@schemetwister/home';
import { RandomizeComponent } from '@schemetwister/randomize';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'randomize',
    component: RandomizeComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

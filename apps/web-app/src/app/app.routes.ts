import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('@schemetwister/web-app/feature-home').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@schemetwister/web-app/feature-randomize').then(
        (m) => m.RANDOMIZE_ROUTES
      ),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('@schemetwister/web-app-feature-view').then((m) => m.VIEW_ROUTES),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

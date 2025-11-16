import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@schemetwister/web-app/feature-home').then(
        (m) => m.WebAppFeatureHomeModule
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@schemetwister/web-app/feature-randomize').then(
        (m) => m.WebAppFeatureRandomizeModule
      ),
  },
  {
    path: 'view',
    loadComponent: () =>
      import('@schemetwister/web-app-feature-view').then(
        (m) => m.LatestSetupsComponent
      ),
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

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

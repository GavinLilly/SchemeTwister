import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@schemetwister/web-app/feature-home').then(
        (module) => module.WebAppFeatureHomeModule
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@schemetwister/web-app/feature-randomize').then(
        (module) => module.WebAppFeatureRandomizeModule
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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    WebAppUiModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

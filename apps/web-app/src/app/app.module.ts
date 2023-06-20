import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import {
  FIRESTORE_COLLECTION_TOKEN,
  WebAppFeatureRandomizeModule,
} from '@schemetwister/web-app/feature-randomize';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { environment } from '../environments/environment';

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
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    EffectsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    WebAppUiModule,
    WebAppFeatureRandomizeModule,
    WebAppFeatureStoreModule,
  ],
  providers: [
    {
      provide: FIRESTORE_COLLECTION_TOKEN,
      useValue: environment.firestoreCollection,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

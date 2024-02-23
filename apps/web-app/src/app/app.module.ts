import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { LibTwister } from '@schemetwister/libtwister';
import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
import { marvelStudiosSeries } from '@schemetwister/schemetwister-series-marvelstudios';
import { marvelVillainsSeries } from '@schemetwister/schemetwister-series-marvelvillains';
import { WebAppFeatureRandomizeModule } from '@schemetwister/web-app/feature-randomize';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import { LIBTWISTER_TOKEN } from '@schemetwister/web-app/shared';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { FIRESTORE_COLLECTION_TOKEN } from '@schemetwister/web-app-feature-view';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateService } from './update.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    HttpClientModule,

    // Bootstrap
    NgbModule,

    // Icons
    FontAwesomeModule,

    // NGRX
    EffectsModule.forRoot(),

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),

    // Schemetwister
    AppRoutingModule,
    WebAppUiModule,
    WebAppFeatureRandomizeModule,
    WebAppFeatureStoreModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    UpdateService,
    {
      provide: FIRESTORE_COLLECTION_TOKEN,
      useValue: environment.firestoreCollection,
    },
    {
      provide: LIBTWISTER_TOKEN,
      useValue: new LibTwister([
        marvelSeries,
        marvelStudiosSeries,
        marvelVillainsSeries,
      ]),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

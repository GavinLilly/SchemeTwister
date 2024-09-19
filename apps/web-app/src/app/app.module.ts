import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { buffySeries } from '@schemetwister/series-buffy';
import { marvelSeries } from '@schemetwister/series-marvel';
import { marvelStudiosSeries } from '@schemetwister/series-marvel-studios';
import { marvelVillainsSeries } from '@schemetwister/series-marvel-villains';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import {
  FIRESTORE_COLLECTION_TOKEN,
  SERIES_REGISTER_TOKEN,
} from '@schemetwister/web-app/shared';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

import { environment } from '../environments/environment';
import { EnvironmentType } from '../environments/environmentType';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateService } from './update.service';

const seriesRegister = [
  marvelSeries,
  marvelStudiosSeries,
  marvelVillainsSeries,
  buffySeries,
];

const serviceWorkerRegistrationTime = 30 * 1000;

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    // Bootstrap
    NgbModule,
    // Icons
    FontAwesomeModule,
    // NGRX
    EffectsModule.forRoot(),
    // Schemetwister
    AppRoutingModule,
    WebAppUiModule,
    WebAppFeatureStoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: [EnvironmentType.PROD, EnvironmentType.TEST].includes(
        environment.environmentType
      ),
      // Register the ServiceWorker as soon as the app is stable
      // or after the timeout (whichever comes first).
      registrationStrategy: `registerWhenStable:${serviceWorkerRegistrationTime}`,
    }),
  ],
  providers: [
    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.environmentType === EnvironmentType.DEV) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),
    UpdateService,
    {
      provide: FIRESTORE_COLLECTION_TOKEN,
      useValue: environment.firestoreCollection,
    },
    {
      provide: SERIES_REGISTER_TOKEN,
      useValue: seriesRegister,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { buffySeries } from '@schemetwister/series-buffy';
import { marvelSeries } from '@schemetwister/series-marvel';
import { marvelStudiosSeries } from '@schemetwister/series-marvel-studios';
import { marvelVillainsSeries } from '@schemetwister/series-marvel-villains';
import { FIRESTORE_COLLECTION_TOKEN } from '@schemetwister/web-app/feature-setup-store';
import { metaReducers, reducers } from '@schemetwister/web-app/feature-store';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { UpdateService } from './app/update.service';
import { environment } from './environments/environment';
import { EnvironmentType } from './environments/environmentType';

const seriesRegister = [
  marvelSeries,
  marvelStudiosSeries,
  marvelVillainsSeries,
  buffySeries,
];
const serviceWorkerRegistrationTime = 30 * 1000;

if (environment.environmentType === EnvironmentType.PROD) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES),
    // NGRX
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 30, serialize: true, connectInZone: true }),
    provideEffects(),
    importProvidersFrom(
      // Angular
      BrowserModule,
      // Bootstrap
      NgbModule,
      // Icons
      FontAwesomeModule,
      // Schemetwister
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: [EnvironmentType.PROD, EnvironmentType.TEST].includes(
          environment.environmentType
        ),
        // Register the ServiceWorker as soon as the app is stable
        // or after the timeout (whichever comes first).
        registrationStrategy: `registerWhenStable:${serviceWorkerRegistrationTime}`,
      })
    ),
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
  ],
}).catch((err) => console.error(err));

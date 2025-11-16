import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { EnvironmentType } from './environments/environmentType';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { UpdateService } from './app/update.service';
import { FIRESTORE_COLLECTION_TOKEN } from '@schemetwister/web-app/feature-setup-store';
import { SERIES_REGISTER_TOKEN } from '@schemetwister/web-app/shared';
import { marvelSeries } from '@schemetwister/series-marvel';
import { marvelStudiosSeries } from '@schemetwister/series-marvel-studios';
import { marvelVillainsSeries } from '@schemetwister/series-marvel-villains';
import { buffySeries } from '@schemetwister/series-buffy';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app/app-routing.module';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app/app.component';

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
        importProvidersFrom(
        // Angular
        BrowserModule, 
        // Bootstrap
        NgbModule, 
        // Icons
        FontAwesomeModule, 
        // NGRX
        EffectsModule.forRoot(), 
        // Schemetwister
        AppRoutingModule, WebAppFeatureStoreModule, ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: [EnvironmentType.PROD, EnvironmentType.TEST].includes(environment.environmentType),
            // Register the ServiceWorker as soon as the app is stable
            // or after the timeout (whichever comes first).
            registrationStrategy: `registerWhenStable:${serviceWorkerRegistrationTime}`,
        })),
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
    ]
})
  .catch((err) => console.error(err));

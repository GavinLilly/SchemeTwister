import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { buffySeries } from '@schemetwister/schemetwister-series-buffy';
import { marvelSeries } from '@schemetwister/schemetwister-series-marvel';
import { marvelStudiosSeries } from '@schemetwister/schemetwister-series-marvelstudios';
import { marvelVillainsSeries } from '@schemetwister/schemetwister-series-marvelvillains';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import {
  FIRESTORE_COLLECTION_TOKEN,
  SERIES_REGISTER_TOKEN,
} from '@schemetwister/web-app/shared';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { getFirestore } from 'firebase/firestore';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateService } from './update.service';

const seriesRegister = [
  marvelSeries,
  marvelStudiosSeries,
  marvelVillainsSeries,
  buffySeries,
];

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    // Schemetwister
    AppRoutingModule,
    WebAppUiModule,
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
      provide: SERIES_REGISTER_TOKEN,
      useValue: seriesRegister,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

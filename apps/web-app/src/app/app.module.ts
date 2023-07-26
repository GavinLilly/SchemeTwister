import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { WebAppFeatureRandomizeModule } from '@schemetwister/web-app/feature-randomize';
import { WebAppFeatureStoreModule } from '@schemetwister/web-app/feature-store';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { FIRESTORE_COLLECTION_TOKEN } from '@schemetwister/web-app-feature-view';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

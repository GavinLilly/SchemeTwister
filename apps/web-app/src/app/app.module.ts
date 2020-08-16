import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { WebAppUiModule } from '@legendizer/web-app/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { WebAppFeatureRandomizeModule } from "@legendizer/web-app/feature-randomize";

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@legendizer/web-app/feature-home').then(
        (module) => module.WebAppFeatureHomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@legendizer/web-app/feature-home').then(
        (module) => module.WebAppFeatureHomeModule
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@legendizer/web-app/feature-randomize').then(
        (module) => module.WebAppFeatureRandomizeModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),
    NgbModule,
    WebAppUiModule,
    FontAwesomeModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    WebAppFeatureRandomizeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WebAppFeatureRandomizeModule } from '@schemetwister/web-app/feature-randomize';
import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { IRootState, storageSyncReducer } from './storage-sync.reducer';

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

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<IRootState>>(
  'ROOT_REDUCER'
);
const metaReducers: MetaReducer<IRootState>[] = [storageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    WebAppUiModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    WebAppFeatureRandomizeModule,
    StoreModule.forRoot(reducers),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          autoPause: true,
        })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

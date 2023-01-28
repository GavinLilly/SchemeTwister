/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(
        [
          {
            path: 'home',
            loadChildren: () =>
              import('@schemetwister/home').then((m) => m.homeRoutes),
          },
          {
            path: 'randomize',
            loadChildren: () =>
              import('@schemetwister/randomize').then((m) => m.randomizeRoutes),
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      ),
      BrowserAnimationsModule
    ),
  ],
}).catch((err) => console.error(err));

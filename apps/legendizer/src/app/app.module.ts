import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { LegendizerUiModule } from '@legendizer/legendizer/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@legendizer/legendizer/feature-home').then(
        (module) => module.LegendizerFeatureHomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@legendizer/legendizer/feature-home').then(
        (module) => module.LegendizerFeatureHomeModule
      ),
  },
  {
    path: 'randomize',
    loadChildren: () =>
      import('@legendizer/legendizer/feature-randomize').then(
        (module) => module.LegendizerFeatureRandomizeModule
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
    LegendizerUiModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

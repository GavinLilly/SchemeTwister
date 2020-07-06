import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebHomeScreenModule } from '@legendizer/web/home-screen';
import { WebRandomizeModule } from '@legendizer/web/randomize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'legendizer-feature-home',
    loadChildren: () =>
      import('@legendizer/legendizer/feature-home').then(
        (module) => module.LegendizerFeatureHomeModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),
    WebHomeScreenModule,
    WebRandomizeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

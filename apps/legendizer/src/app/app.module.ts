import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebHomeScreenModule } from '@legendizer/web/home-screen';
import { WebRandomizeModule } from '@legendizer/web/randomize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "@legendizer/web/home-screen";
import { MainComponent } from "@legendizer/web/randomize";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'randomize', component: MainComponent },
  { path: '', component: HomeComponent },
]

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  LegendizerHomeScreenModule,
  legendizerHomeScreenRoutes,
} from '@legendizer/legendizer/home-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, LegendizerHomeScreenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

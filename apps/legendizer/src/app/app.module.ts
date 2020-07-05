import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  WebHomeScreenModule,
  legendizerHomeScreenRoutes,
} from '@legendizer/web/home-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, WebHomeScreenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

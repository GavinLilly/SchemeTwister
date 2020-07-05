import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WebHomeScreenModule } from '@legendizer/web/home-screen';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WebHomeScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

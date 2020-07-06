import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { SchemeComponent } from './scheme/scheme.component';
import { MainComponent } from './main/main.component';
import { SchemeDirective } from './scheme.directive';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [
    HeroComponent,
    SchemeComponent,
    MainComponent,
    SchemeDirective,
  ],
  exports: [HeroComponent, SchemeComponent],
})
export class WebRandomizeModule {}

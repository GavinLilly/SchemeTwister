import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SchemeComponent } from './scheme/scheme.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeroComponent, SchemeComponent],
  exports: [HeroComponent, SchemeComponent],
})
export class WebRandomizeModule {}

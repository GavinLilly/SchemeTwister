import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SchemeComponent } from './scheme/scheme.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [HeroComponent, SchemeComponent],
  exports: [HeroComponent, SchemeComponent],
})
export class LegendizerRandomizeModule {}

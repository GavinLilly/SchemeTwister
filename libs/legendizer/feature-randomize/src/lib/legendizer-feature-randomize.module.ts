import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RandomizeComponent } from './randomize/randomize.component';
import { SchemeComponent } from './scheme/scheme.component';
import { MastermindComponent } from './mastermind/mastermind.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: RandomizeComponent}
    ]),
  ],
  declarations: [RandomizeComponent, SchemeComponent, MastermindComponent],
})
export class LegendizerFeatureRandomizeModule {}

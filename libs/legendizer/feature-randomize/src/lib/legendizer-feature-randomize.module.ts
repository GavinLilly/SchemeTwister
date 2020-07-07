import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RandomizeComponent } from './randomize/randomize.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: RandomizeComponent}
    ]),
  ],
  declarations: [RandomizeComponent],
})
export class LegendizerFeatureRandomizeModule {}

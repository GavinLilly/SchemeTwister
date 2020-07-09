import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RandomizeComponent } from './randomize/randomize.component';
import { LegendizerUiModule } from "@legendizer/legendizer/ui";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LegendizerUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RandomizeComponent },
    ]),
  ],
  declarations: [
    RandomizeComponent
  ],
})
export class LegendizerFeatureRandomizeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RandomizeComponent } from './randomize/randomize.component';
import { WebAppUiModule } from '@legendizer/web-app/ui';
import { GameSetupStore } from './game-setup-store';
import { GameSetSelectComponent } from './game-set-select/game-set-select.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebAppUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RandomizeComponent },
    ]),
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [RandomizeComponent, GameSetSelectComponent],
  providers: [GameSetupStore],
  entryComponents: [GameSetSelectComponent]
})
export class WebAppFeatureRandomizeModule {}

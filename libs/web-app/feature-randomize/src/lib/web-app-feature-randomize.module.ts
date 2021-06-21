import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { WebAppUiModule } from '@schemetwister/web-app/ui';

import { GameSetSelectComponent } from './game-set-select/game-set-select.component';
import { GameSetupStore } from './game-setup-store';
import { IterateDeckComponent } from './iterate-deck/iterate-deck.component';
import { RandomizeComponent } from './randomize/randomize.component';
import { SchemeMastermindSelectComponent } from './scheme-mastermind-select/scheme-mastermind-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebAppUiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RandomizeComponent },
    ]),
    NgbModule,
    FontAwesomeModule,
  ],
  declarations: [
    RandomizeComponent,
    GameSetSelectComponent,
    SchemeMastermindSelectComponent,
    IterateDeckComponent,
  ],
  providers: [GameSetupStore, CookieService],
  entryComponents: [GameSetSelectComponent],
})
export class WebAppFeatureRandomizeModule {}

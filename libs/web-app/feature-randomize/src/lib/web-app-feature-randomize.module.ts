import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { WebAppSharedModule } from '@schemetwister/web-app/shared';
import { WebAppUiModule } from '@schemetwister/web-app/ui';
import { CookieService } from 'ngx-cookie-service';

import { GameSetsEffects } from './+state/effects/game-sets.effects';
import { GameSetupEffects } from './+state/effects/game-setup.effects';
import {
  gameSetsFeatureKey,
  gameSetsReducer,
} from './+state/reducers/game-sets.reducer';
import {
  gameSetupFeatureKey,
  gameSetupReducer,
} from './+state/reducers/game-setup.reducer';
import {
  numPlayersFeatureKey,
  numPlayersReducer,
} from './+state/reducers/num-players.reducer';
import { AdditionalDeckComponent } from './additional-deck/additional-deck.component';
import { GameSetSelectComponent } from './game-set-select/game-set-select.component';
import { HeroDeckComponent } from './hero-deck/hero-deck.component';
import { MastermindCardComponent } from './mastermind-card/mastermind-card.component';
import { RandomizeComponent } from './randomize/randomize.component';
import { ReplacePipe } from './replace.pipe';
import { SchemeCardComponent } from './scheme-card/scheme-card.component';
import { SchemeMastermindSelectComponent } from './scheme-mastermind-select/scheme-mastermind-select.component';
import { VillainDeckComponent } from './villain-deck/villain-deck.component';

@NgModule({
    imports: [
        // Angular
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', pathMatch: 'full', component: RandomizeComponent },
        ]),
        // Bootstrap
        NgbModule,
        NgbAccordionModule,
        // Icons
        FontAwesomeModule,
        // NGRX
        StoreModule.forFeature(numPlayersFeatureKey, numPlayersReducer),
        StoreModule.forFeature(gameSetsFeatureKey, gameSetsReducer),
        StoreModule.forFeature(gameSetupFeatureKey, gameSetupReducer),
        EffectsModule.forFeature([GameSetupEffects, GameSetsEffects]),
        // Firebase
        AngularFirestoreModule,
        // Schemetwister
        WebAppUiModule,
        WebAppSharedModule,
    ],
    declarations: [
        RandomizeComponent,
        GameSetSelectComponent,
        SchemeMastermindSelectComponent,
        ReplacePipe,
        HeroDeckComponent,
        VillainDeckComponent,
        AdditionalDeckComponent,
        SchemeCardComponent,
        MastermindCardComponent,
    ],
    providers: [CookieService]
})
export class WebAppFeatureRandomizeModule {}

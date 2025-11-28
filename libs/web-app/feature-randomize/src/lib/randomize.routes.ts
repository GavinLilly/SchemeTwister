import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

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
import { RandomizeComponent } from './randomize/randomize.component';

export const RANDOMIZE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    providers: [
      provideState(numPlayersFeatureKey, numPlayersReducer),
      provideState(gameSetsFeatureKey, gameSetsReducer),
      provideState(gameSetupFeatureKey, gameSetupReducer),
      provideEffects([GameSetupEffects, GameSetsEffects]),
    ],
    component: RandomizeComponent,
  },
];

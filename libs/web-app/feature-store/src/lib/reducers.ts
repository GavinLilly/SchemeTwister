import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  gameSetsReducer,
  gameSetupReducer,
  numPlayersReducer,
} from '@schemetwister/web-app/feature-randomize';

import { IRootState } from './models/root-state';
import { localStorageSyncReducer } from './storage-sync.reducer';

export const reducers: ActionReducerMap<IRootState> = {
  numPlayers: numPlayersReducer,
  gameSets: gameSetsReducer,
  gameSetup: gameSetupReducer,
};

export const metaReducers: Array<MetaReducer<IRootState, Action>> = [
  localStorageSyncReducer,
];

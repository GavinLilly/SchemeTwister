import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  gameSetupFeatureKey,
  IGameSetupState,
} from '../reducers/game-setup.reducer';

export interface AppState {
  gameSetup: IGameSetupState;
}

export const selectGameSetupFeature = createFeatureSelector<
  AppState,
  IGameSetupState
>(gameSetupFeatureKey);

export const selectGameSetupScheme = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.scheme
);

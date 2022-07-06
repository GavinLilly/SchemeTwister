import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  gameSetupFeatureKey,
  IGameSetupState,
} from '../reducers/game-setup.reducer';

const selectGameSetupFeature =
  createFeatureSelector<IGameSetupState>(gameSetupFeatureKey);

export const selectGameSetupScheme = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.scheme
);

export const selectHeroDeck = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.heroDeck
);

export const selectVillainDeck = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.villainDeck
);

export const selectAdditionalDeck = createSelector(
  selectGameSetupFeature,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (state: IGameSetupState) => state.gameSetup.additionalDeck!
);

export const selectMastermind = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.mastermind
);

export const selectDefinedScheme = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedScheme
);

export const selectDefinedMastermind = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedMastermind
);

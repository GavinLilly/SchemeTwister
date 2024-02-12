import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameSetup } from '@schemetwister/libtwister';

import {
  gameSetupFeatureKey,
  IGameSetupState,
} from '../reducers/game-setup.reducer';

const selectGameSetupFeature =
  createFeatureSelector<IGameSetupState>(gameSetupFeatureKey);

export const selectGameSetup = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState): GameSetup => new GameSetup(state.gameSetup)
);

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

export const selectAdditionalDecks = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.additionalDecks
);

export const selectMastermind = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.gameSetup.mastermind
);

export const selectDefinedScheme = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedScheme
);

export const selectIsDefinedScheme = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedScheme !== undefined
);

export const selectDefinedMastermind = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedMastermind
);

export const selectIsDefinedMastermind = createSelector(
  selectGameSetupFeature,
  (state: IGameSetupState) => state.definedMastermind !== undefined
);

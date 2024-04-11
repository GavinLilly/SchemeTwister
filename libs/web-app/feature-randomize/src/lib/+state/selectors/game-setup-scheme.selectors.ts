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
  (state): GameSetup => new GameSetup(state.gameSetup)
);

export const selectGameSetupScheme = createSelector(
  selectGameSetupFeature,
  (state) => state.gameSetup.scheme
);

export const selectHeroDeck = createSelector(
  selectGameSetupFeature,
  (state) => state.gameSetup.heroDeck
);

export const selectVillainDeck = createSelector(
  selectGameSetupFeature,
  (state) => state.gameSetup.villainDeck
);

export const selectAdditionalDecks = createSelector(
  selectGameSetupFeature,
  (state) => state.gameSetup.additionalDecks
);

export const selectMastermind = createSelector(
  selectGameSetupFeature,
  (state) => state.gameSetup.mastermind
);

export const selectDefinedScheme = createSelector(
  selectGameSetupFeature,
  (state) => state.definedScheme
);

export const selectIsDefinedScheme = createSelector(
  selectGameSetupFeature,
  (state) => state.definedScheme !== undefined
);

export const selectDefinedMastermind = createSelector(
  selectGameSetupFeature,
  (state) => state.definedMastermind
);

export const selectIsDefinedMastermind = createSelector(
  selectGameSetupFeature,
  (state) => state.definedMastermind !== undefined
);

export const selectLockedHeroDeckCards = createSelector(
  selectGameSetupFeature,
  (state) => ({ ...state.lockedHeroDeck })
);

export const selectLockedAdditionalDeckCards = createSelector(
  selectGameSetupFeature,
  (state) => ({ ...state.lockedAdditionalDeck })
);

export const selectLockedVillainDeckCards = createSelector(
  selectGameSetupFeature,
  (state) => ({ ...state.lockedVillainDeck })
);

export const selectIsVillainDeckLocked = createSelector(
  selectLockedVillainDeckCards,
  (state) =>
    [state.henchmen, state.heroes, state.masterminds, state.villains].some(
      (stateItem) => stateItem !== undefined && stateItem.length > 0
    )
);

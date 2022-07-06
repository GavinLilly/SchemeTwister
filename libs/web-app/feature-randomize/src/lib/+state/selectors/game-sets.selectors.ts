import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';

import {
  gameSetsFeatureKey,
  IGameSetsState,
} from '../reducers/game-sets.reducer';

const selectGameSetsFeature =
  createFeatureSelector<IGameSetsState>(gameSetsFeatureKey);

export const selectGameSetIds = createSelector(
  selectGameSetsFeature,
  (state: IGameSetsState) => state.gameSetIds
);

export const selectGameSets = createSelector(
  selectGameSetsFeature,
  (state: IGameSetsState) => LibTwister.gameSetIdsToGameSets(state.gameSetIds)
);

export const selectLibTwister = createSelector(
  selectGameSetsFeature,
  (state: IGameSetsState) => {
    const gameSets = LibTwister.gameSetIdsToGameSets(state.gameSetIds);
    return new LibTwister(gameSets);
  }
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISeries, LibTwister } from '@schemetwister/libtwister';

import {
  gameSetsFeatureKey,
  IGameSetsState,
} from '../reducers/game-sets.reducer';

const selectGameSetsFeature =
  createFeatureSelector<IGameSetsState>(gameSetsFeatureKey);

export const selectGameSetIds = createSelector(
  selectGameSetsFeature,
  (state) => state.gameSetIds
);

export const selectSeriesIds = createSelector(
  selectGameSetsFeature,
  (state) => state.seriesIds
);

export const selectLibTwister = (seriesRegister: ISeries[]) =>
  // For now we should use all series
  createSelector(selectGameSetsFeature, () => new LibTwister(seriesRegister));

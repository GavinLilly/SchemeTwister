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
  createSelector(selectSeriesIds, selectGameSetIds, (seriesIds, gameSetIds) => {
    const gameSets = seriesRegister
      .filter((series) => seriesIds.includes(series.seriesMeta.id))
      .flatMap((series) => series.gameSets)
      .filter((gameSet) => gameSetIds.includes(gameSet.id));

    return new LibTwister({ series: seriesRegister, gameSets });
  });

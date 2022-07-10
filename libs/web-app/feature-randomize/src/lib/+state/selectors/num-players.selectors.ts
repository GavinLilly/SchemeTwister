import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  INumPlayersState,
  numPlayersFeatureKey,
} from '../reducers/num-players.reducer';

const selectNumPlayersFeature =
  createFeatureSelector<INumPlayersState>(numPlayersFeatureKey);

export const selectNumPlayers = createSelector(
  selectNumPlayersFeature,
  (state: INumPlayersState) => state.numPlayers
);

export const selectIsAdvancedSolo = createSelector(
  selectNumPlayersFeature,
  (state: INumPlayersState) => state.isAdvancedSolo
);

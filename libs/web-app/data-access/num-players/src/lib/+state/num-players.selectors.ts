import { createSelector } from '@ngrx/store';
import {
  numPlayersReducer
} from './num-players.reducer';

// Lookup the 'NumPlayers' feature state managed by NgRx
export const getNumPlayersState = createFeatureSelector<
  NumPlayersPartialState,
  State
>(NUMPLAYERS_FEATURE_KEY);

const { selectAll, selectEntities } = numPlayersAdapter.getSelectors();

export const getNumPlayersLoaded = createSelector(
  getNumPlayersState,
  (state: State) => state.loaded
);

export const getNumPlayersError = createSelector(
  getNumPlayersState,
  (state: State) => state.error
);

export const getAllNumPlayers = createSelector(
  getNumPlayersState,
  (state: State) => selectAll(state)
);

export const getNumPlayersEntities = createSelector(
  getNumPlayersState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getNumPlayersState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getNumPlayersEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export interface FeatureState {
  numPlayers: number;
}

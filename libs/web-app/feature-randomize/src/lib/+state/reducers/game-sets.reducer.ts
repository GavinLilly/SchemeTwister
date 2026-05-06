import { Action, createReducer, on } from '@ngrx/store';

import {
  gameSetSelectionActions as fromGameSetDialog,
  gameSetCheckerActions as fromGameSetChecker,
  seriesSelectionActions,
} from '../actions/game-sets.actions';

export const gameSetsFeatureKey = 'gameSets';

export interface IGameSetsState {
  seriesIds: string[];
  gameSetIds: string[];
  loading: boolean;
  error: string;
}

export const initialState: IGameSetsState = {
  seriesIds: [],
  gameSetIds: [],
  loading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _gameSetsReducer = createReducer(
  initialState,
  on(
    fromGameSetDialog.setGameSets,
    fromGameSetDialog.addGameSet,
    fromGameSetDialog.removeGameSet,
    (state) => ({
      ...state,
      loading: true,
      error: '',
    })
  ),
  on(fromGameSetChecker.setGameSetsSuccess, (state, { gameSetIds }) => ({
    ...state,
    gameSetIds: gameSetIds,
    loading: false,
  })),
  on(fromGameSetChecker.setGameSetsFailure, (state, { payload }) => ({
    ...state,
    error: payload.error,
  })),
  on(seriesSelectionActions.addSeries, (state, { seriesId }) => ({
    ...state,
    seriesIds: [...state.seriesIds, seriesId],
  })),
  on(seriesSelectionActions.removeSeries, (state, { seriesId }) => ({
    ...state,
    seriesIds: state.seriesIds.filter((value) => value !== seriesId),
  })),
  on(seriesSelectionActions.setSeries, (state, { seriesIds }) => ({
    ...state,
    seriesIds,
  }))
);

export function gameSetsReducer(
  state: IGameSetsState | undefined,
  action: Action
) {
  return _gameSetsReducer(state, action);
}

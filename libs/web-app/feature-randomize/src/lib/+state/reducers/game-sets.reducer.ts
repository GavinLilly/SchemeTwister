import { Action, createReducer, on } from '@ngrx/store';
import { LibTwister } from '@schemetwister/libtwister';

import {
  addGameSet,
  removeGameSet,
  setGameSets,
  setGameSetsFailure,
  setGameSetsSuccess,
} from '../actions/game-sets.actions';

export const gameSetsFeatureKey = 'gameSets';

export interface IGameSetsState {
  gameSetIds: string[];
  loading: boolean;
  error: string;
}

export const initialState: IGameSetsState = {
  gameSetIds: LibTwister.allGameSets.asArray().map((gameSet) => gameSet.id),
  loading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _gameSetsReducer = createReducer(
  initialState,
  on(setGameSets, addGameSet, removeGameSet, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),
  on(setGameSetsSuccess, (state, { gameSetIds }) => ({
    ...state,
    gameSetIds: gameSetIds,
    loading: false,
  })),
  on(setGameSetsFailure, (state, { payload }) => ({
    ...state,
    error: payload.errorMessage,
  }))
);

export function gameSetsReducer(
  state: IGameSetsState | undefined,
  action: Action
) {
  return _gameSetsReducer(state, action);
}

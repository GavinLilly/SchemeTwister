import { Action, createReducer, on } from '@ngrx/store';
import { GameSetup } from '@schemetwister/libtwister';

import {
  generateGameSetup,
  generateGameSetupFailure,
  generateGameSetupSuccess,
} from '../actions/game-setup.actions';

export const gameSetupFeatureKey = 'gameSetup';

export interface IGameSetupState {
  gameSetup: GameSetup;
  loading: boolean;
  error: string;
}

const initialState: IGameSetupState = {
  gameSetup: GameSetup.empty(),
  loading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _gameSetupReducer = createReducer(
  initialState,
  on(generateGameSetup, (state) => ({ ...state, loading: true })),
  on(generateGameSetupSuccess, (state, { gameSetup }) => ({
    ...state,
    gameSetup: gameSetup,
    loading: false,
  })),
  on(generateGameSetupFailure, (state, { payload }) => ({
    ...state,
    error: payload.errorMessage,
  }))
);

export function gameSetupReducer(
  state: IGameSetupState | undefined,
  action: Action
) {
  return _gameSetupReducer(state, action);
}

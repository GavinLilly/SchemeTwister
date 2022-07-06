import { Action, createReducer, on } from '@ngrx/store';
import {
  AbstractMastermind,
  AbstractScheme,
  GameSetup,
} from '@schemetwister/libtwister';

import {
  generateGameSetup,
  generateGameSetupFailure,
  generateGameSetupSuccess,
  resetDefinedMastermind,
  resetDefinedScheme,
  setDefinedMastermind,
  setDefinedScheme,
} from '../actions/game-setup.actions';

export const gameSetupFeatureKey = 'gameSetup';

export interface IGameSetupState {
  gameSetup: GameSetup;
  loading: boolean;
  error: string;
  definedScheme?: AbstractScheme;
  definedMastermind?: AbstractMastermind;
}

export const initialState: IGameSetupState = {
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
  })),
  on(setDefinedScheme, (state, {scheme}) => ({ ...state, definedScheme: scheme})),
  on(setDefinedMastermind, (state, {mastermind}) => ({ ...state, definedMastermind: mastermind})),
  on(resetDefinedScheme, (state) => ({ ...state, definedScheme: undefined})),
  on(resetDefinedMastermind, (state) => ({ ...state, definedMastermind: undefined}))
);

export function gameSetupReducer(
  state: IGameSetupState | undefined,
  action: Action
) {
  return _gameSetupReducer(state, action);
}

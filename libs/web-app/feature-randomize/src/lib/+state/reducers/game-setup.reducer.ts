import { Action, createReducer, on } from '@ngrx/store';
import {
  Mastermind,
  GameSetup,
  SchemeMinusRules,
  IGameSetup,
  TransformingMastermind,
} from '@schemetwister/libtwister';

import {
  gameSetupGeneratorActions,
  randomizePageActions,
} from '../actions/game-setup.actions';

export const gameSetupFeatureKey = 'gameSetup';

export interface IGameSetupState {
  gameSetup: IGameSetup;
  loading: boolean;
  error: string;
  definedScheme?: SchemeMinusRules;
  definedMastermind?: Mastermind | TransformingMastermind;
}

export const initialState: IGameSetupState = {
  gameSetup: GameSetup.empty(),
  loading: false,
  error: '',
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const _gameSetupReducer = createReducer(
  initialState,
  on(randomizePageActions.generateGameSetup, (state) => ({
    ...state,
    loading: true,
  })),
  on(gameSetupGeneratorActions.success, (state, { gameSetup }) => ({
    ...state,
    gameSetup: gameSetup,
    loading: false,
  })),
  on(gameSetupGeneratorActions.failure, (state, { payload }) => ({
    ...state,
    error: payload.error,
  })),
  on(randomizePageActions.setDefinedScheme, (state, { scheme }) => ({
    ...state,
    definedScheme: scheme,
  })),
  on(randomizePageActions.setDefinedMastermind, (state, { mastermind }) => ({
    ...state,
    definedMastermind: mastermind,
  })),
  on(randomizePageActions.resetDefinedScheme, (state) => ({
    ...state,
    definedScheme: undefined,
  })),
  on(randomizePageActions.resetDefinedMastermind, (state) => ({
    ...state,
    definedMastermind: undefined,
  }))
);

export function gameSetupReducer(
  state: IGameSetupState | undefined,
  action: Action
) {
  return _gameSetupReducer(state, action);
}
